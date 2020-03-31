import { createStackNavigator } from 'react-navigation-stack';
import StyleSheet from 'react-native';
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
        navigationOptions: {
            headerTitle: 'Lista de Produtos',
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
