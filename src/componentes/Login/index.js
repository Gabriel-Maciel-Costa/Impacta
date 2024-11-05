import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Pressable, Keyboard, KeyboardAvoidingView, Platform } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from 'src/componentes/Estilos/style.js'; // Certifique-se de que o caminho esteja correto
import ThemeToggle from 'src/componentes/Estilos/ThemeToggle.js'; // Importe o componente

const Main = ({ navigation }) => {
    const [userDig, setUserDig] = useState("");
    const [senhaDig, setSenhaDig] = useState("");
    const [textBotao, setTextBotao] = useState("Entrar");
    const [textErroU, setMenssageErroU] = useState("");
    const [textErroS, setMenssageErroS] = useState("");
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isCreatingAccount, setIsCreatingAccount] = useState(false);

    useEffect(() => {
        const loadTheme = async () => {
            try {
                const storedTheme = await AsyncStorage.getItem('theme');
                if (storedTheme) {
                    setIsDarkMode(storedTheme === 'dark');
                }
            } catch (error) {
                console.error('Erro ao carregar o tema:', error);
            }
        };
        loadTheme();
    }, []);

    const toggleTheme = async () => {
        const newTheme = !isDarkMode ? 'dark' : 'light';
        setIsDarkMode(!isDarkMode);
        await AsyncStorage.setItem('theme', newTheme);

        navigation.addListener('focus', async () => {
            const storedTheme = await AsyncStorage.getItem('theme');
            setIsDarkMode(storedTheme === 'dark');
        });
    };

    // Função para converter uma string em vetor de números
    const stringToVector = (str) => {
        return str.split("").map(char => char.charCodeAt(0));
    };

    // Função para converter vetor de números em string
    const vectorToString = (vector) => {
        return vector.map(code => String.fromCharCode(code)).join("");
    };

    const Criar = async () => {
        try {
            const userVector = stringToVector(userDig);
            const senhaVector = stringToVector(senhaDig);

            const storedAccounts = await AsyncStorage.getItem('accounts');
            const accounts = storedAccounts ? JSON.parse(storedAccounts) : [];

            const userExists = accounts.some(account => vectorToString(account.user) === userDig);
            if (userExists) {
                setMenssageErroU("Usuário já existe!");
                return;
            }

            accounts.push({ user: userVector, senha: senhaVector });
            await AsyncStorage.setItem('accounts', JSON.stringify(accounts));

            setTextBotao("Entrar");
            setUserDig("");
            setSenhaDig("");
            setIsCreatingAccount(false);
        } catch (error) {
            console.error('Erro ao salvar os dados:', error);
        }
    };

    const tirarFoco = () => {
        Keyboard.dismiss();
    };

    const Validar = async () => {
        tirarFoco();
        if (!userDig || !senhaDig) {
            setTextBotao("Preencha Todos os Campos");
            if (!userDig) setMenssageErroU("Campo Obrigatório");
            if (!senhaDig) setMenssageErroS("Campo Obrigatório");
            return;
        }
        setMenssageErroU("");
        setMenssageErroS("");

        const storedAccounts = await AsyncStorage.getItem('accounts');
        const accounts = storedAccounts ? JSON.parse(storedAccounts) : [];

        const isValidAccount = accounts.some(account =>
            vectorToString(account.user) === userDig &&
            vectorToString(account.senha) === senhaDig
        );

        if (isValidAccount) {
            setUserDig(""); // Limpa o campo de usuário
            setSenhaDig(""); // Limpa o campo de senha
            navigation.navigate('Opcoes');
        } else {
            setTextBotao("Usuário ou Senha estão errados");
            setTimeout(() => {
                setTextBotao("Entrar");
            }, 1000);
        }
    };

    const toggleMode = () => {
        setIsCreatingAccount(!isCreatingAccount);
        setUserDig("");
        setSenhaDig("");
        setMenssageErroU("");
        setMenssageErroS("");
        setTextBotao(isCreatingAccount ? "Entrar" : "Criar Conta");
    };

    return (
        <Pressable onPress={Keyboard.dismiss} style={[styles.conteiner, isDarkMode ? styles.darkBackground : styles.lightBackground]}>
            <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

            <KeyboardAvoidingView style={styles.conteiner2} behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
                <View style={styles.cabecalho}>
                    <Image 
                        style={styles.titulo} 
                        source={isDarkMode 
                            ? require('../Title/Modo claro.png')
                            : require('../Title/logo preta.png')
                        } 
                        resizeMode="contain" 
                    />
                </View>

                <View style={styles.form}>
                    <Text style={[styles.label, isDarkMode ? styles.darkText : styles.lightText]}>Usuário:</Text>
                    <TextInput 
                        style={styles.inputGrande} 
                        onChangeText={setUserDig} 
                        value={userDig} 
                        placeholder="" 
                    />
                    <Text style={styles.erroMenssage}>{textErroU}</Text>

                    <Text style={[styles.label, isDarkMode ? styles.darkText : styles.lightText]}>Senha:</Text>
                    <TextInput 
                        style={styles.inputGrande} 
                        onChangeText={setSenhaDig} 
                        value={senhaDig} 
                        secureTextEntry={true} 
                    />
                    <Text style={styles.erroMenssage}>{textErroS}</Text>

                    <TouchableOpacity style={styles.botao} onPress={isCreatingAccount ? Criar : Validar}>
                        <Text style={styles.textoBotao}>{textBotao}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={toggleMode} style={{ marginTop: 20 }}>
                        <Text style={{ textAlign: 'center', color: isDarkMode ? 'white' : 'black' }}>
                            {isCreatingAccount ? "Já tem uma conta? Fazer login" : "Ainda não tem conta? Criar Conta"}
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </Pressable>
    );
};

export default Main;
