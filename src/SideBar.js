import React, { Component } from 'react';
import { View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DrawerItem from './DrawerItem.js';
import { test } from './actions.js';


class SideBar extends Component {
  goTo = (page) => {
    this.props.navigation.navigate(page);
  }

  render() {
    if (this.props.value === 1) {
      return (
        <View style={{ marginTop: 22 }}>
          <DrawerItem title='HOME' {...this.props} />
        </View>
      );
    }
    return (
      <View style={{ marginTop: 22 }}>
        <DrawerItem title='HOME' {...this.props} />
        <DrawerItem title='ABOUT' {...this.props} />
      </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
