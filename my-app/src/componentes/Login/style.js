import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    conteiner:{
        width:'100%',
        height:'100%',
        bottom:'0',
        //backgroundColor:'lightblue',
        alignItems:'center',
        marginTop:0,
        paddingTop:150,
    },
    conteiner2:{
        width:'100%',
        height:'100%',
        bottom:'0',
        //backgroundColor:'lightblue',
        alignItems:'center',
        marginTop:0,
    },
    cabecalho:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom:40,
    },
    titulo:{
        width: 200,
        height: 90,
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
    inputGrande:{
        borderRadius: 10,
        widht:'100%',
        height: 50,
        backgroundColor: 'white',
        marginBottom:0,
        paddingLeft:10,
        borderColor:'black',
        borderRightWidth: 4,
        borderBottomWidth: 4,

    },
    botao:{
        backgroundColor:"lightblue",
        width:"100%",
        heigh:10,
        borderRadius: 10,
        alignItems:'center',
        paddingTop:12,
        paddingBottom:12,
        marginTop: 20,
        justifyContent:'center',
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
    }

});

export default styles