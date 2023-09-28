import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Pressable, ActivityIndicator, StyleSheet, Image } from "react-native";
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function Lista() {
    const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://mocki.io/v1/2163a961-b295-41be-bb0c-3c2f140325a6");
                setData(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            {isLoading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <Pressable
                            style={styles.itemContainer}
                            onPress={() => navigation.navigate('TabDetalhes', { dado: item })}
                        >
                            <Image
                                style={styles.eventImage}
                                source={{ uri: item.imagem }}
                            />
                            <Text style={styles.itemText}>{item.nome}</Text>
                        </Pressable>
                    )}
                    keyExtractor={item => item.id.toString()}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    itemContainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    eventImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 16,
    },
    itemText: {
        fontSize: 16,
        fontWeight: "bold",
    },
});
