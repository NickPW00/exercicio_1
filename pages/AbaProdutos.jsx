import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Lista from './Lista';
import TabDetalhes from "./TabDetalhes";

export default function AbaProdutos() {
    const Stack = createNativeStackNavigator();
    return (
            <Stack.Navigator>
                <Stack.Screen name="Lista" component={Lista} options={{headerShown: false}}/>
                <Stack.Screen name="TabDetalhes" component={TabDetalhes} />
            </Stack.Navigator>
    );
}