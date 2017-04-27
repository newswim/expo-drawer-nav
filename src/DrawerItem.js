import React from 'react';
import { Text } from 'react-native';


const DrawerItem = ({ title, navigation }) => (
  <Text
    style={{ fontSize: 24 }}
    onPress={() => navigation.navigate(title)}
  >{title}</Text>
);

export default DrawerItem;
