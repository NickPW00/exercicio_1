import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import AbaProdutos from './pages/AbaProdutos';

const Drawer = createDrawerNavigator();

function Info() {
  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>
        Esta aplicação renderiza produtos e fornece informações adicionais.
      </Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Produtos">
        <Drawer.Screen
          name="Produtos"
          component={AbaProdutos}
          options={{
            drawerLabel: 'Lista de Produtos',
          }}
        />
        <Drawer.Screen
          name="Informações Adicionais"
          component={Info}
          options={{
            drawerLabel: 'Informações',
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  infoText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
});
