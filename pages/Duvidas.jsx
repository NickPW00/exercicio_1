import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

export default function Duvidas({ route }) {
    const dados = route.params;
    const item = dados.dado.duvidas;

    return (
        <View style={styles.container}>
            {item ? (
                item.map((question, index) => (
                    <View style={styles.questionContainer} key={index}>
                        <Text style={styles.userName}>{question.usuario}</Text>
                        <Text style={styles.date}>{question.data_publicacao}</Text>
                        <Text style={styles.questionText}>Pergunta: {question.duvida}</Text>
                        {question.resposta && (
                            <Text style={styles.answerText}>Resposta: {question.resposta}</Text>
                        )}
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
    questionContainer: {
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
    questionText: {
        fontSize: 16,
        marginBottom: 8,
    },
    answerText: {
        fontSize: 16,
        color: '#333',
    },
});
