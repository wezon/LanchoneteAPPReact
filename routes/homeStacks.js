import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Login from '../screens/login';
import listaProdutos from '../screens/listaProdutos';

const screens = {
    Home: {
        screen: Login
    },
    ListaProdutos: {
        screen: listaProdutos
    }
}

 const HomeStack = createStackNavigator(screens);

 export default createAppContainer(HomeStack);

