import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    conteiner:{
        width:'100%',
        height:'100%',
        bottom:'0',
        backgroundColor:'rgba(18, 18, 18, 1)',
        alignItems:'center',
        paddingTop:150,
    },
        darkBackground: {
            backgroundColor: 'rgba(18, 18, 18, 1)', // Fundo escuro para o modo escuro
        },
        lightBackground: {
            backgroundColor: 'rgba(233, 233, 233, 1)', // Fundo claro para o modo claro
        },
    
    cabecalho:{
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:40,
    },
    titulo:{
        width: 280,
        height: 90,
    },

    darkText: {
        color: 'white', // Cor do texto no modo escuro
    },
    lightText: {
        color: 'black', // Cor do texto no modo claro
    },

    conteinerOpcoes:{
        width:'100%',
        heigh:'auto',
        padding:10,
        paddingLeft:20,
        paddingRight:20,
    },
    botao:{
        backgroundColor:"rgba(0, 89, 158, 1)",
        width:"298px",
        heigh:10,
        borderRadius: 10,
        alignItems:'center',
        paddingTop:20,
        paddingBottom:20,
        marginTop: 20,
        borderColor: 'rgba(0, 53, 94, 0.8)',
        borderRightWidth: 4,
        borderBottomWidth: 4,
        justifyContent:'center',
    },
    textoBotao:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
    },
    
    darkBackground: {
        backgroundColor: 'rgba(18, 18, 18, 1)', // Fundo escuro para o modo escuro
    },
    lightBackground: {
        backgroundColor: 'rgba(233, 233, 233, 1)', // Fundo claro para o modo claro
    },
    // Estilos para o componente de alternância de tema (light/dark mode)
    themeToggle: {
        position: 'absolute', // Posiciona o toggle de forma absoluta na tela
        top: 40, // Distância do topo
        right: 20, // Distância da direita
        width: 60, // Largura do container de alternância
        height: 55, // Altura do container de alternância
        borderRadius: 15, // Borda arredondada
        justifyContent: 'center', // Centraliza o conteúdo verticalmente
        padding: 5, // Padding interno
    },
    // Estilos para o container da alternância de tema
    toggleContainer: {
        flex: 1, // Ocupar o máximo de espaço disponível
        backgroundColor: 'rgba(128, 128, 128, 0.3)', // Cor do fundo do container no modo claro
        borderRadius: 15, // Arredonda as bordas
        justifyContent: 'center', // Centraliza verticalmente o conteúdo
        padding: 5, // Padding interno
    },
    // Estilos para a "bolinha" dentro do toggle
    toggleBall: {
        width: 20, // Largura da bolinha
        height: 20, // Altura da bolinha
        borderRadius: 10, // Arredondamento completo (bolinha)
        backgroundColor: '#fff', // Cor da bolinha
    },

});

export default styles