import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    conteiner:{
        width:'100%',
        height:'100%',
        bottom:'0',
        backgroundColor:'rgba(18, 18, 18, 1)',
        alignItems:'center',
        marginTop:0,
        paddingTop:150,
    },
    conteiner2:{
        width:'100%',
        height:'100%',
        bottom:'0',
        backgroundColor:'rgba(18, 18, 18, 1)',
        alignItems:'center',
        marginTop:0,
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
        paddingTop:0,
    },
    titulo: {
        width: 280, // Largura fixa da imagem
        height: undefined, // Permite que a altura seja ajustada com base no aspecto
        aspectRatio: 280 / 90, // Define a proporção da imagem (largura/altura)
        resizeMode: 'contain', // Ajusta a imagem para se adaptar ao espaço sem cortar
    },

    darkText: {
        color: 'white', // Cor do texto no modo escuro
    },
    lightText: {
        color: 'black', // Cor do texto no modo claro
    },

    alinhar:{
        flexDirection: 'row', 
    },
    form:{
        width:'100%',
        heigh:'auto',
        padding:10,
        paddingLeft:20,
        paddingRight:20,
    },
    label:{
        color:'white',
        fontSize:18,
    },
    label2:{
        color:'white',
        fontSize:18,
        marginLeft:125
    },
    inputGrande: {
        borderRadius: 10,
        width: '298px',
        height: 50,
        backgroundColor: 'rgba(222, 222, 222, 1)',
        marginBottom: 0,
        paddingLeft: 10,
        borderColor: 'rgba(125, 125, 125, 0.8)',
        borderRightWidth: 4,
        borderBottomWidth: 4,
        
    },

    inputPequeno:{
        borderRadius: 10,
        widht:'40%',
        height: 50,
        backgroundColor: 'rgba(222, 222, 222, 1)',
        marginBottom:10,
        paddingLeft:10,
        paddingRight:95,
        borderColor: 'rgba(125, 125, 125, 0.8)',
        borderRightWidth: 4,
        borderBottomWidth: 4,
    },
    inputPequeno1:{
        borderRadius: 10,
        widht:'40%',
        height: 50,
        backgroundColor: 'rgba(222, 222, 222, 1)',
        marginBottom:10,
        paddingLeft:10,
        paddingRight:70,
        borderColor: 'rgba(125, 125, 125, 0.8)',
        borderRightWidth: 4,
        borderBottomWidth: 4,
    },
    inputPequeno2:{
        borderRadius: 10,
        widht:'20%',
        height: 50,
        backgroundColor: 'rgba(222, 222, 222, 1)',
        marginBottom:10,
        paddingLeft:10,
        marginLeft: 10,   
        paddingRight:100,
        borderColor: 'rgba(125, 125, 125, 0.8)',
        borderRightWidth: 4,
        borderBottomWidth: 4,
    },
    botao: {
        backgroundColor: "rgba(0, 89, 158, 1)",
        width: "298px",
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        paddingTop: 12,
        paddingBottom: 12,
        marginTop: 20,
        justifyContent: 'center',
        borderColor: 'rgba(0, 53, 94, 0.8)',
        borderRightWidth: 4,
        borderBottomWidth: 4,
    },
    textoBotao:{
        color:'white',
        fontSize:18,
        fontWeight:'bold',
    },
    erroMenssage:{
        fontSize: 12,
        color:'red',
        fontWeight:'bold'
    },
    caixaSuc:{
        marginTop: 10,
        alignItems:"center",
        justifyContent:"center",
    },
    sucessoMenssage:{
        fontSize: 14,
        color:'lightgreen',
        fontWeight:'bold'
        
    },
    afastar:{
        marginLeft:70
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