import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, Modal, Pressable } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import ThemeToggle from 'src/componentes/Estilos/ThemeToggle.js'; // Importe o componente de alternância de tema
import styles from './style';

const Main = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [visibleModal, setVisibleModal] = useState(false);
    const [selectedArtist, setSelectedArtist] = useState(null);

    // Carrega o tema salvo globalmente ao iniciar
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

    // Função para alternar o tema e salvar globalmente
    const toggleTheme = async () => {
        const newTheme = !isDarkMode ? 'dark' : 'light';
        setIsDarkMode(!isDarkMode);
        await AsyncStorage.setItem('theme', newTheme);

        // Atualiza o estado em outras telas ao navegar
        navigation.addListener('focus', async () => {
            const storedTheme = await AsyncStorage.getItem('theme');
            setIsDarkMode(storedTheme === 'dark');
        });
    };

    const openModal = (artist) => {
        setSelectedArtist(artist);  // Define o artista selecionado
        setVisibleModal(true);      // Abre o modal
    };

    const closeModal = () => {
        setVisibleModal(false);     // Fecha o modal
        setSelectedArtist(null);    // Reseta o artista selecionado
    };

    const artistData = {
        rodriguinho: {
            name: "Rodriguinho",
            description: "Rodriguinho começou sua carreira em 1994 como vocalista do grupo Os Travessos, um dos maiores nomes do pagode. Ele se destaca pelos hits 'Sorria' e 'Fatalmente'. O cantor segue com sua carreira solo desde 2002, explorando tanto o pagode quanto o samba. Rodriguinho começou a trabalhar com a Impacta em 2010.",
            image: require('src/componentes/Artista/Rodriguinho/rodriguinho.jpg'),
        },
        bdt: {
            name: "Bonde do Tigrão",
            description: "O Bonde do Tigrão iniciou sua trajetória no funk carioca em 1999. O grupo é conhecido por levar o funk às massas com músicas de sucesso como 'Cerol na Mão' e 'Tchutchuca', representando o subgênero do funk melody. Atualmente, o trio é formado por Leandrinho, Góia e Maurício. Eles começaram a trabalhar com a empresa em 2002, mantendo uma parceria de sucesso.",
            image: require('src/componentes/Artista/BDT/bonde do tigrão.jpg'),
        },
        revelacao: {
            name: "Grupo Revelação",
            description: "Formado em 1991, o Grupo Revelação é uma das maiores bandas de samba e pagode do Brasil. Com clássicos como 'Deixa Acontecer' e 'Tá Escrito'. Em 2018, com a chegada de Jhonatan Alexandre, o Mamute, o grupo entrou em uma nova fase, iniciando uma nova jornada em busca do melhor som e repertório para seus fãs. Já havia trabalhado com a empresa anteriormente, mas assinou contrato oficialmente novamente em 2019.",
            image: require('src/componentes/Artista/Revelação/revelação.png'),
        },
        legado: {
            name: "Legado",
            description: "O projeto Legado, criado no final de 2018, reúne três gerações de talento musical: Gaab, seu pai Rodriguinho e seu tio Mr. Dan. Juntos, eles interpretam os grandes sucessos de suas carreiras, oferecendo ao público uma verdadeira celebração da trajetória musical da família. Essa parceria não só destaca a rica herança sonora que une os três, como também homenageia os hits que marcaram diferentes épocas e conquistaram muitos fãs.",
            image: require('src/componentes/Artista/Legado/legado.jpg'),
        },
        malu: {
            name: "MaLu",
            description: "MaLu, conhecida como a Princesinha do Pagode, é uma das novas apostas do gênero e chegou ao mercado com o projeto Pagode da MaLu. Durante a pandemia, ela viralizou nas redes sociais com suas versões, cantando e tocando cavaquinho. MaLu começou a trabalhar com a empresa em 2023, prometendo um futuro brilhante no cenário musical.",
            image: require('src/componentes/Artista/Malu/Malu.png'),
        },
    };

    return (
        <View style={[styles.conteiner, isDarkMode ? styles.darkBackground : styles.lightBackground]}>

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

            {/* Modal para exibir as informações do artista */}
            <Modal
                transparent={true}
                visible={visibleModal}
                animationType="slide"
                onRequestClose={closeModal}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        {selectedArtist && (
                            <>
                                <Image style={styles.modalImage} source={artistData[selectedArtist].image} />
                                <Text style={styles.modalTitle}>{artistData[selectedArtist].name}</Text>
                                <Text style={styles.modalDescription}>{artistData[selectedArtist].description}</Text>
                                <Pressable style={styles.closeButton} onPress={closeModal}>
                                    <Text style={styles.closeButtonText}>Fechar</Text>
                                </Pressable>
                            </>
                        )}
                    </View>
                </View>
            </Modal>

            <View style={styles.conteinerArtistas}>
                <View style={styles.alinhar}>
                    {/* Rodriguinho */}
                    <TouchableOpacity style={styles.artista} onPress={() => openModal('rodriguinho')}>
                        <Image
                            style={styles.imgArtista}
                            source={require('src/componentes/Artista/Rodriguinho/rodriguinho.jpg')}
                        />
                        <View style={styles.nomeContainer}>
                            <Image
                                style={styles.imgNome}
                                source={require('src/componentes/Artista/Rodriguinho/logo rodriguinho preto.png')}
                            />
                        </View>
                    </TouchableOpacity>

                    {/* Bonde do Tigrão */}
                    <TouchableOpacity style={styles.artista} onPress={() => openModal('bdt')}>
                        <Image
                            style={styles.imgArtista}
                            source={require('src/componentes/Artista/BDT/bonde do tigrão.jpg')}
                        />
                        <View style={styles.nomeContainer}>
                            <Image
                                style={styles.imgNome}
                                source={require('src/componentes/Artista/BDT/logo bdt.png')}
                            />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.alinhar}>
                    {/* Grupo Revelação */}
                    <TouchableOpacity style={styles.artista} onPress={() => openModal('revelacao')}>
                        <Image
                            style={styles.imgArtista}
                            source={require('src/componentes/Artista/Revelação/revelação.png')}
                        />
                        <View style={styles.nomeContainer}>
                            <Image
                                style={styles.imgNome}
                                source={require('src/componentes/Artista/Revelação/logo revelação.png')}
                            />
                        </View>
                    </TouchableOpacity>

                    {/* Legado */}
                    <TouchableOpacity style={styles.artista} onPress={() => openModal('legado')}>
                        <Image
                            style={styles.imgArtista}
                            source={require('src/componentes/Artista/Legado/legado.jpg')}
                        />
                        <View style={styles.nomeContainer}>
                            <Image
                                style={styles.imgNome}
                                source={require('src/componentes/Artista/Legado/logo legado preto.png')}
                            />
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Malu */}
                <TouchableOpacity style={styles.artista} onPress={() => openModal('malu')}>
                    <Image
                        style={styles.imgArtista}
                        source={require('src/componentes/Artista/Malu/Malu.png')}
                    />
                    <View style={styles.nomeContainer}>
                        <Image
                            style={styles.imgNome}
                            source={require('src/componentes/Artista/Malu/logo malu.png')}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Main;
