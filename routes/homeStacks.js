import { createStackNavigator } from 'react-navigation-stack';
import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, AsyncStorage } from 'react-native';
import { createAppContainer } from 'react-navigation';
import Login from '../screens/login';
import listaProdutos from '../screens/listaProdutos';
import produtoDetalhado from '../screens/produtoDetalhado';

const screens = {
    Login: {
        screen: Login,
        navigationOptions: {
            headerTitle: 'Login',
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: 'black',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },

        }

    },
    ListaProdutos: {
        screen: listaProdutos,
        navigationOptions: ({ navigate, navigation }) => ({
            headerTitle: 'Lista de Produtos',
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: 'black',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerRight: () => (
                <TouchableOpacity onPress={async () => {
                    await AsyncStorage.multiSet([
                        ['@LanchoneteAPPReact:token', ''],
                        ['@LanchoneteAPPReact:user', ''],
                    ]);
                    navigation.navigate('Login');

                }}>
                    <Text style={styles.text}> LogOut</Text>
                </TouchableOpacity >
            )
        })
    },
    ProdutoDetalhado: {
        screen: produtoDetalhado,
        navigationOptions: {
            headerTitle: 'Produto Detalhado',
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: 'black',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    }

}




const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);

const styles = StyleSheet.create({
    text: {
        color: "white",
        fontSize: 17,
    }
});
