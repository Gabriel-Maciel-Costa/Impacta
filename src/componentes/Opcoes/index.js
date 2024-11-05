import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, Alert, BackHandler } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native'; // Importe o useFocusEffect
import ThemeToggle from 'src/componentes/Estilos/ThemeToggle.js';
import styles from './style';

const Main = ({ navigation }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

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
    };

    // Exibe o pop-up de confirmação quando o botão de voltar é pressionado
    useFocusEffect(
        React.useCallback(() => {
            const backAction = () => {
                Alert.alert("Sair", "Você deseja voltar à Tela de Login?", [
                    {
                        text: "Cancelar",
                        onPress: () => null,
                        style: "cancel"
                    },
                    {
                        text: "Sair",
                        onPress: () => navigation.navigate('Login')
                    }
                ]);
                return true;
            };

            const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);

            // Remove o evento quando a tela perde o foco
            return () => backHandler.remove();
        }, [navigation])
    );

    return (
        <View style={[styles.conteiner, isDarkMode ? styles.darkBackground : styles.lightBackground]}>
            <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
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
            <View style={styles.conteinerOpcoes}>
                <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Forms')}>
                    <Text style={styles.textoBotao}>Adicionar Show</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Agenda')}>
                    <Text style={styles.textoBotao}>Agenda</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Artista')}>
                    <Text style={styles.textoBotao}>Artistas</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Main;
