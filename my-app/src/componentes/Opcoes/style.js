import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    conteiner:{
        width:'100%',
        height:'100%',
        bottom:'0',
        //backgroundColor:'lightblue',
        alignItems:'center',
        marginTop:150,
    },
    cabecalho:{
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:40,
    },
    titulo:{
        width: 200,
        height: 90,
    },
    conteinerOpcoes:{
        width:'100%',
        heigh:'auto',
        padding:10,
        paddingLeft:20,
        paddingRight:20,
    },
    botao:{
        backgroundColor:"lightblue",
        width:"100%",
        heigh:10,
        borderRadius: 10,
        alignItems:'center',
        paddingTop:20,
        paddingBottom:20,
        marginTop: 20,
        justifyContent:'center',
    },
    textoBotao:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
    }
});

export default styles