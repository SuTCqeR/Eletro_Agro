import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

export default function ButtonCustom({ title, onPress }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "80%",
        justifyContent: "flex-end"
    },
    button: {
        backgroundColor: '#3a3cff', // Cor de fundo do botão
        padding: 10,
        borderRadius: 20, // Bordas arredondadas
        alignItems: 'center', // Centraliza o texto
        justifyContent: 'center', // Centraliza o texto verticalmente
        width: '40%', // Largura do botão
        marginVertical: 10, // Margem vertical para espaçamento
    },
    buttonText: {
        color: '#FFFFFF', // Cor do texto
        fontSize: 16,
    },
});
