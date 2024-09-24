import React from "react"
import {View, Text, TextInput, TouchableOpacity, Image} from "react-native"
import styles from './style'

const Main = ({ navigation }) => {
    return(

        

        <View style={styles.conteiner}>
            <View style={styles.cabecalho}>
                <Image
                style={styles.titulo}
                source={require('@/src/componentes/Title/imagem-apoio.png')}
                />
            </View>
            <View style={styles.conteinerArtistas}>
                <View style={styles.alinhar}>
                    <TouchableOpacity style={styles.artista} onPress={() => navigation.navigate('Opcoes')}>                        
                            <Image
                            style={styles.imgArtista}
                            source={require('@/src/componentes/Artistas/Logo.png')}
                            />    
                            <Image
                            style={styles.imgNome}
                            source={require('@/src/componentes/Artistas/nomeArtista.png')}
                            />                       
                    </TouchableOpacity>                
                    <TouchableOpacity style={styles.artista} onPress={() => navigation.navigate('Opcoes')}>
                        <Image
                        style={styles.imgArtista}
                        source={require('@/src/componentes/Artistas/Logo.png')}
                        />
                        <Image
                        style={styles.imgNome}
                        source={require('@/src/componentes/Artistas/nomeArtista.png')}
                        />                        
                </TouchableOpacity>
                </View>                    
                <View style={styles.alinhar}>
                    <TouchableOpacity style={styles.artista} onPress={() => navigation.navigate('Opcoes')}>
                            <Image
                            style={styles.imgArtista}
                            source={require('@/src/componentes/Artistas/Logo.png')}
                            />
                            <Image
                            style={styles.imgNome}
                            source={require('@/src/componentes/Artistas/nomeArtista.png')}
                            />                        
                    </TouchableOpacity>               
                    <TouchableOpacity style={styles.artista} onPress={() => navigation.navigate('Opcoes')}>
                        <Image
                        style={styles.imgArtista}
                        source={require('@/src/componentes/Artistas/Logo.png')}
                        />
                        <Image
                        style={styles.imgNome}
                        source={require('@/src/componentes/Artistas/nomeArtista.png')}
                        />                        
                </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.artista} onPress={() => navigation.navigate('Opcoes')}>
                        <Image
                        style={styles.imgArtista}
                        source={require('@/src/componentes/Artistas/Logo.png')}
                        />
                        <Image
                        style={styles.imgNome}
                        source={require('@/src/componentes/Artistas/nomeArtista.png')}
                        />                        
                </TouchableOpacity>                
            </View>
             
        </View>

    );
}

export default Main;