import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

export default function Detalhes({ route }) {
    const dados = route.params;
    const item = dados.dado.especificacoes;
    const nome = dados.dado.nome;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{nome}</Text>
            {item ? (
                Object.entries(item).map(([key, value], index) => (
                    <View style={styles.specContainer} key={index}>
                        <Text style={styles.specKey}>{key}:</Text>
                        <Text style={styles.specValue}>{value}</Text>
                    </View>
                ))
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
    specContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    specKey: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#555',
    },
    specValue: {
        fontSize: 16,
        color: '#333',
    },
});
