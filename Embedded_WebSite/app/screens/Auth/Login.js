import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements'
import styles from '../../assets/css/style';
class Login extends React.Component {
   state = {}
   render() {
      return (
         <View style={[styles.container_center]}>
            <Button
               large
               rightIcon={{ name: 'web' }}
               title='Go to React Navite Website'
               backgroundColor='#486348'
               onPress={()=> this.props.navigation.navigate('Website')}
            />
         </View>
      );
   }
}

export default Login;