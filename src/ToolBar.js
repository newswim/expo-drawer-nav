import React, { Component } from 'react';
import {
  Text,
} from 'react-native';
import { Header, Left, Body, Title } from 'native-base';


class ToolBar extends Component {
  render() {
    return (
      <Header>
        <Left>
          <Text onPress={() => this.props.navigate('DrawerOpen')}>XXX</Text>
        </Left>
        <Body>
          <Title>TITLE HERE</Title>
        </Body>
      </Header>
    );
  }
}

export default ToolBar;
