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
    conteinerArtistas:{
        marginTop:10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    alinhar:{
        flexDirection: 'row', 
        marginBottom:20,
        justifyContent:'space-between',
    },
    artista:{
        backgroundColor:'lightblue',
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:10,
        marginRight:10,
        width:130,
        height:140,
        borderRadius:10,
    },
    imgArtista:{
        width: 100,
        height: 90,
        
        
    },
    imgNome:{
        borderTopColor:'black',
        borderTopWidth:20, 
        width: 95,
        height: 20,
    }

});

export default styles