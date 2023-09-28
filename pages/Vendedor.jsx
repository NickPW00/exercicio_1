import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

export default function Vendedor({ route }) {
    const dados = route.params;
    const item = dados.dado.vendedor;

    return (
        <View style={styles.container}>
            {item ? (
                <>
                    <Text style={styles.title}>{item.nome}</Text>
                    <Text style={styles.text}>Telefone: {item.telefone}</Text>
                    <Text style={styles.text}>Email: {item.email}</Text>
                    <Text style={styles.text}>Avaliação: {item.avaliacao.toString()}</Text>
                </>
            ) : (
                <ActivityIndicator size="large" color="#0000ff" />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#333',
    },
    text: {
        fontSize: 16,
        marginBottom: 8,
        color: '#555',
    },
});
