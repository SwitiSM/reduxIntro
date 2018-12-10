import { createStackNavigator,createAppContainer} from 'react-navigation'
import LoginFrom from './LoginForm'
import ShoppingItemsList from './ShoppingItemsList';
import ItemDetails from './ItemDetails'
const navigator = createStackNavigator({
    ShoppingList:{
        screen:ShoppingItemsList,
        navigationOptions: {
            title: 'shopping Items'
        }
    },
    ItemDetails:{
        screen:ItemDetails,
        navigationOptions: {
            title: 'Item Details'
        }
    }
},
{
initialRouteName:"ShoppingList"
})

export default createAppContainer(navigator)