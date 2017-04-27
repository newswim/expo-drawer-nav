import React, { Component } from 'react';
import { Font } from 'expo';
import { Provider } from 'react-redux';
import MyNavigator from './MyNavigator.js';
import Store from './Store.js';


const fontRoboto = require('../assets/fonts/Roboto_medium.ttf');

class App extends Component {
  state = {
    fontsLoaded: false
  }

  async componentDidMount() {
    await Font.loadAsync({ Roboto_medium: fontRoboto });

    this.setState({ fontsLoaded: true });
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <Provider store={Store}>
          <MyNavigator />
        </Provider>
      );
    }
    return (null);
  }
}


export default App;
