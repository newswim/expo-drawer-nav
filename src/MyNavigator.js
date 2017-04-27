import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen.js';
import AboutScreen from './AboutScreen.js';
import SideBar from './SideBar.js';


const DrawerNav = DrawerNavigator({
  HOME: { screen: HomeScreen },
  ABOUT: { screen: AboutScreen }
}, {
  contentComponent: props => <SideBar {...props} />
});


export default DrawerNav;
