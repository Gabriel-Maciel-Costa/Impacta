import React, { useState, useEffect, useRef } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Pressable, Keyboard, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';
import ThemeToggle from 'src/componentes/Estilos/ThemeToggle.js'; // Importe o componente de alternância de tema

const Main = ({ navigation }) => {
    const [contratante, setContratante] = useState(null);
    const [artista, setArtista] = useState(null);
    const [cache, setCache] = useState(null);
    const [estado, setEstado] = useState(null);
    const [cidade, setCidade] = useState(null);
    const [data, setData] = useState(null);
    const [hora, setHora] = useState(null);
    const [textSucesso, settextSucesso] = useState("");
    const [textErroCo, setMenssageErroCo] = useState(null);
    const [textErroAr, setMenssageErroAr] = useState(null);
    const [textErroCa, setMenssageErroCa] = useState(null);
    const [textErroE, setMenssageErroE] = useState(null);
    const [textErroCi, setMenssageErroCi] = useState(null);
    const [textErroD, setMenssageErroD] = useState(null);
    const [textErroH, setMenssageErroH] = useState(null);
    const [isDarkMode, setIsDarkMode] = useState(true); // Estado para o tema
    const inputRef = useRef(null);

    // Carrega o tema salvo ao iniciar
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

    // Função para alternar tema e salvar a preferência
    const toggleTheme = async () => {
        const newTheme = !isDarkMode ? 'dark' : 'light';
        setIsDarkMode(!isDarkMode);
        await AsyncStorage.setItem('theme', newTheme);
    };

    const tirarFoco = () => {
        if (inputRef.current) {
            inputRef.current.blur();
        }
    };

    function Validar() {
        tirarFoco();
        if (!contratante || !artista || !cache || !estado || !cidade || !data || !hora) {
            settextSucesso(null);
            if (!contratante) setMenssageErroCo("Campo Obrigatório*");    
            if (!artista) setMenssageErroAr("Campo Obrigatório*");
            if (!cache) setMenssageErroCa("Campo Obrigatório*");
            if (!estado) setMenssageErroE("Campo Obrigatório*");
            if (!cidade) setMenssageErroCi("Campo Obrigatório*");
            if (!data) setMenssageErroD("Campo Obrigatório*");
            if (!hora) setMenssageErroH("Campo Obrigatório*");
            return;
        } else {
            settextSucesso("Adicionado");
            const event = {
                artista,
                contratante,
                cache: Number(cache),
                estado,
                cidade,
                hora,
            };
            navigation.navigate('Agenda', { newEvent: { [data]: [event] } });
        }
    }

    return (
        <Pressable style={[styles.conteiner, isDarkMode ? styles.darkBackground : styles.lightBackground]} onPress={Keyboard.dismiss}>
            {/* Componente de alternância de tema */}

            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 20} 
            >
                <View style={styles.cabecalho}>
                <Image
                    style={styles.titulo}
                    source={isDarkMode 
                        ? require('../Title/Modo claro.png')  // Imagem para o modo escuro
                        : require('../Title/logo preta.png')  // Imagem para o modo claro
                    }
                    resizeMode="contain"
                />
            </View>

                <ScrollView 
                    contentContainerStyle={{ flexGrow: 1 }}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.form}>
                        <Text style={[styles.label, isDarkMode ? styles.darkText : styles.lightText]}>Artista</Text>
                        <TextInput 
                            style={styles.inputGrande}
                            ref={inputRef}
                            onChangeText={setArtista}
                            value={artista}
                            placeholder="Ex. Rodriguinho"
                            placeholderTextColor={"rgba(125, 125, 125, 0.8)"}
                        />
                        <Text style={styles.erroMenssage}>{textErroCo}</Text>

                        <Text style={[styles.label, isDarkMode ? styles.darkText : styles.lightText]}>Contratante</Text>
                        <TextInput 
                            style={styles.inputGrande}
                            ref={inputRef}
                            onChangeText={setContratante}
                            value={contratante}
                            placeholder="Ex. Renato"
                            placeholderTextColor={"rgba(125, 125, 125, 0.8)"}
                        />
                        <Text style={styles.erroMenssage}>{textErroAr}</Text>

                        <View style={styles.alinhar}>
                            <Text style={[styles.label, isDarkMode ? styles.darkText : styles.lightText]}>Cachê</Text>
                            <Text style={[styles.label2, isDarkMode ? styles.darkText : styles.lightText]}>Estado</Text>
                        </View>

                        <View style={styles.alinhar}>
                            <TextInput
                                ref={inputRef}
                                onChangeText={setCache}
                                value={cache}
                                style={styles.inputPequeno}
                                placeholder="Ex. 3.000"
                                placeholderTextColor={"rgba(125, 125, 125, 0.8)"}
                                keyboardType="numeric"
                            />
                            <TextInput
                                ref={inputRef}
                                onChangeText={setEstado}
                                value={estado}
                                style={styles.inputPequeno2}
                                placeholder="Ex. RJ, SP"
                                placeholderTextColor={"rgba(125, 125, 125, 0.8)"}
                                keyboardType="ascii-capable"
                            />
                        </View>

                        <View style={styles.alinhar}>
                            <Text style={styles.erroMenssage}>{textErroCa}</Text>
                            <View style={styles.afastar}><Text style={styles.erroMenssage}>{textErroE}</Text></View>
                        </View>

                        <Text style={[styles.label, isDarkMode ? styles.darkText : styles.lightText]}>Cidade</Text>
                        <TextInput
                            style={styles.inputGrande}
                            ref={inputRef}
                            onChangeText={setCidade}
                            value={cidade}
                            placeholder="Ex. Rio de Janeiro"
                            placeholderTextColor={"rgba(125, 125, 125, 0.8)"}
                            keyboardType="ascii-capable"
                        />
                        <Text style={styles.erroMenssage}>{textErroCi}</Text>

                        <View style={styles.alinhar}>
                            <Text style={[styles.label, isDarkMode ? styles.darkText : styles.lightText]}>Data</Text>
                            <Text style={[styles.label2, isDarkMode ? styles.darkText : styles.lightText]}>Hora</Text>
                        </View>

                        <View style={styles.alinhar}>
                            <TextInput
                                style={styles.inputPequeno1}
                                ref={inputRef}
                                onChangeText={setData}
                                value={data}
                                placeholder="Ex. 2024-11-07"
                                placeholderTextColor={"rgba(125, 125, 125, 0.8)"}
                                keyboardType="numbers-and-punctuation"
                            />
                            <TextInput
                                style={styles.inputPequeno2}
                                ref={inputRef}
                                onChangeText={setHora}
                                value={hora}
                                placeholder="Ex. 18:30"
                                placeholderTextColor={"rgba(125, 125, 125, 0.8)"}
                                keyboardType="numbers-and-punctuation"
                            />
                        </View>

                        <View style={styles.alinhar}>
                            <Text style={styles.erroMenssage}>{textErroD}</Text>
                            <View style={styles.afastar}><Text style={styles.erroMenssage}>{textErroH}</Text></View>
                        </View>

                        <TouchableOpacity style={styles.botao} onPress={Validar}>
                            <Text style={styles.textoBotao}>Adicionar Nova Data</Text>
                        </TouchableOpacity>

                        <View style={styles.caixaSuc}>
                            <Text style={styles.sucessoMenssage}>{textSucesso}</Text>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </Pressable>
    );
};

export default Main;
