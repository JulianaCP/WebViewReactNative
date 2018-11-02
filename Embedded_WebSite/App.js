import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Constants } from 'expo';
import { Alert } from "react-native";
import AppRoot from './app/components/navigation/AppRoot';
import { SafeAreaView } from 'react-navigation';
SafeAreaView.setStatusBarHeight(0);

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoadingComplete: false,
    }
  }
  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      )
    }
    else {
      return (
        <View style={styles.container}>
          <AppRoot/>
        </View>
      );
    }
  }
  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./app/assets/icons/icon.png'),
        require('./app/assets/images/splash.png'),
      ]),
    ]);
  };
  _handleLoadingError = error => {
    Alert.alert('Ha ocurrido un error!');
  };
  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
