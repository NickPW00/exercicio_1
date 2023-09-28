import React from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 16,
    },
    image: {
        width: 300,
        height: 200,
        borderRadius: 8,
        marginBottom: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#333',
    },
    description: {
        fontSize: 16,
        marginBottom: 16,
        color: '#555',
    },
});

export default function Produto({ route }) {
    const dados = route.params;
    const item = dados.dado;

    return (
        <View style={styles.container}>
            {item ? (
                <>
                    <Image
                        style={styles.image}
                        source={{ uri: item.imagem }}
                    />
                    <Text style={styles.title}>{item.nome}</Text>
                    <Text style={styles.description}>{item.descricao}</Text>
                </>
            ) : (
                <ActivityIndicator size="large" color="#0000ff" />
            )}
        </View>
    );
}
