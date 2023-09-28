import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

export default function Comentarios({ route }) {
    const dados = route.params;
    const item = dados.dado.comentarios;

    return (
        <View style={styles.container}>
            {item ? (
                item.map((comment, index) => (
                    <View style={styles.commentContainer} key={index}>
                        <Text style={styles.userName}>{comment.usuario}</Text>
                        <Text style={styles.date}>{comment.data_publicacao}</Text>
                        <Text style={styles.commentText}>{comment.comentario}</Text>
                        <Text style={styles.rating}>Nota: {comment.nota.toString()}</Text>
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
    commentContainer: {
        marginBottom: 16,
        padding: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    date: {
        fontSize: 14,
        color: '#555',
        marginBottom: 8,
    },
    commentText: {
        fontSize: 16,
        marginBottom: 8,
    },
    rating: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
});
