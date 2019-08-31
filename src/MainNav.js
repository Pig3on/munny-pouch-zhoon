import {
     createAppContainer
} from 'react-navigation';

import HomeContainer from './Home/HomeContainer';
import { createStackNavigator } from 'react-navigation-stack';
import InputCostScreen from './Funds/InputCostScreen';



const AppNavigator = createStackNavigator({
    Home: {
      screen: HomeContainer,
      navigationOptions: {
        headerVisible: false,
        header:null
        }
    },
    InputFunds:{
        screen:InputCostScreen,
        navigationOptions:{
            headerStyle: {
                backgroundColor: 'black',
                fontSize:30,
              },
            headerTintColor: 'white',
        }
    }
});



export default createAppContainer(AppNavigator);