import React from 'react'
import { WebView } from 'react-native';
import { BackHandler } from "react-native";

class ReactNativeWebsite extends React.Component {

   // back button logic on android
   state = {
      canGoBack: false
   }
   componentDidMount() {
      BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
   }
   componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
   }
   onNavigationStateChange(navState) {
      this.setState({
         canGoBack: navState.canGoBack
      });
   }
   handleBackPress = () => {
      if (this.state.canGoBack) {
         this.refWeb.goBack();
      }
      else {
         this.props.navigation.goBack(null)
      }
      return true;
   }
// end

   render() {
      return (
         <WebView
            ref={(myWeb) => this.refWeb = myWeb}
            onNavigationStateChange={this.onNavigationStateChange.bind(this)}
            automaticallyAdjustContentInsets={false}
            source={{ uri: 'https://facebook.github.io/react-native/docs/getting-started' }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            startInLoadingState={true}
         />
      );
   }
}

export default ReactNativeWebsite;