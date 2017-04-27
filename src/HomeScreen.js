import React, { Component } from 'react';
import {
  Text
} from 'react-native';
import { Container, Button } from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ToolBar from './ToolBar.js';
import { test } from './actions.js';


class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome2',
    headerRight: <Text>ttt</Text>
  };

  openDrawer = () => {
    this.props.navigation.navigate('DrawerOpen');
  }

  render() {
    return (
      <Container style={{ marginTop: 22 }}>
        <ToolBar navigate={this.openDrawer} />
        <Button onPress={() => this.props.test(1)}><Text>ACTION</Text></Button>
        <Button onPress={() => this.props.test(0)}><Text>RESET</Text></Button>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const { value } = state.home;

  return { value };
};

const mapDispatchToProps = (dispatch) => ({
  test: bindActionCreators(test, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
