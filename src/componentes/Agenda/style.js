import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(18, 18, 18, 1)', // Fundo escuro para o calendário
        alignItems: 'center',
        justifyContent: 'center',
        paddingtop: 150,
    },

    themeToggleButton: {
        position: 'absolute',
        right: 20, // distância do lado direito
        top: 20, // distância do topo
        backgroundColor: 'transparent',
        padding: 10,
        borderRadius: 5,
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
        resizeMode: 'contain', // Ajusta a imagem para se adaptar ao espaço sem cortar
    },

    darkText: {
        color: 'white', // Cor do texto no modo escuro
    },
    lightText: {
        color: 'black', // Cor do texto no modo claro
    },

    calendar: {
        backgroundColor: 'rgba(18, 18, 18, 1)', // Fundo escuro para o calendário
        borderRadius: 10, // Borda arredondada
        borderWidth: 1,
        borderColor: 'rgba(0, 89, 158, 1)', // Cor da borda em azul
        padding: 20,
        width: '90%',
    },
    calendarHeader: {
        backgroundColor: 'rgba(0, 89, 158, 1)', // Cabeçalho azul
        padding: 15,
        borderRadius: 5,
        marginBottom: 10,
    },
    headerText: {
        color: '#fff', // Texto branco no cabeçalho
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    eventItem: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    eventTitle: {
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: 'rgba(18, 18, 18, 1)',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    botaoContainer: {
        marginTop: 20, // Espaçamento em relação ao conteúdo anterior
        justifyContent: 'flex-end', // Empurrar o botão para o final
        alignItems: 'center', // Centralizar horizontalmente
    },
    customButton: {
        backgroundColor: 'rgba(0, 89, 158, 1)', // Cor do botão
        padding: 10, // Espaçamento interno
        borderRadius: 5, // Bordas arredondadas
        alignItems: 'center',
        width: 290,
        borderColor: 'rgba(0, 53, 94, 0.8)',
        borderRightWidth: 4,
        borderBottomWidth: 4, // Largura do botão
    },
    customButtonText: {
        color: '#fff', // Cor do texto
        fontWeight: 'bold', // Texto em negrito
        fontSize: 16, // Tamanho da fonte
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
    }
});

export default styles;
