import { createStackNavigator } from 'react-navigation';

// screens
import LoginScreen from '../../screens/Auth/Login';
import ReactNativeWebsiteScreen from '../../screens/ReactNativeWebsite';

export default createStackNavigator(
   {
      Website: { screen: ReactNativeWebsiteScreen },
      Login: { screen: LoginScreen }
   }, {
      initialRouteName: 'Login',
      navigationOptions: {
         headerStyle: {
            backgroundColor: '#f4511e',
         },
         headerTintColor: '#fff',
         headerTitleStyle: {
            fontWeight: 'bold',
         },
      },

   }
);