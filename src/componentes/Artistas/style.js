import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: 'rgba(18, 18, 18, 1)',
        alignItems: 'center',
        paddingTop: 150,
    },

    conteiner2: {
        flex: 1,
        backgroundColor: 'rgba(18, 18, 18, 1)',
        alignItems: 'center',
    },

    cabecalho: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40,
        flex: 1,  // Permite que o contêiner ocupe espaço suficiente
    },

    titulo: {
        width: 280,
        height: 90,
        alignSelf: 'center',  
    },

    conteinerArtistas: {
        marginTop: 7,
        alignItems: 'center',
        justifyContent: 'center',
    },

    alinhar: {
        flexDirection: 'row',
        marginBottom: 20,
        justifyContent: 'space-between',
    },

    artista: {
        backgroundColor: 'rgba(18, 18, 18, 1)',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
        width: 134,  // Altera para a mesma largura da imagem
        height: 157, // Aumenta a altura para comportar a imagem e o contêiner do nome juntos
        borderRadius: 10,
        position: 'relative',
    },

    imgArtista: {
        width: 134,
        height: 120,
        borderTopLeftRadius: 7,  
        borderTopRightRadius: 7, 
        borderBottomLeftRadius: 0,  
        borderBottomRightRadius: 0, 
        borderWidth: 1,  
        borderColor: 'rgba(0, 89, 158, 1)',  
        borderBottomWidth: 0, 
    },

    nomeContainer: {
        width: 134, // Define a largura do contêiner do nome para ser igual à largura da imagem
        height: 41, // Aumenta a altura para comportar a imagem e o contêiner do nome juntos
        backgroundColor: 'rgba(0, 89, 158, 1)', 
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderBottomLeftRadius: 7,  
        borderBottomRightRadius: 7,
    },

    imgNome: {
        width: 100,
        height: 37,
    }
});

export default styles;
