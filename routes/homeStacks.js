import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import listaProdutos from '../screens/listaProdutos';

const screens = {
    Home: {
        screen: Home
    },
    ListaProdutos: {
        screen: listaProdutos
    }
}

 const HomeStack = createStackNavigator(screens);

 export default createAppContainer(HomeStack);

