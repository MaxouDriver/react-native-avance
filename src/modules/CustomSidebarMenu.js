//This is an example code for Navigation Drawer with Custom Side bar//
//This Example is for React Navigation 3.+//
import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Icon } from 'react-native-elements';

export default class CustomSidebarMenu extends Component {
  constructor() {
    super();

    this.items = [
      {
        navOptionThumb: 'camera',
        navOptionName: 'Home',
        screenToNavigate: 'Home',
      },
      {
        navOptionThumb: 'image',
        navOptionName: 'Shared expenses',
        screenToNavigate: 'SharedExpenses',
      },
      {
        navOptionThumb: 'image',
        navOptionName: 'My expenses',
        screenToNavigate: 'Expenses',
      },
      {
        navOptionThumb: 'build',
        navOptionName: 'Users',
        screenToNavigate: 'Users',
      },
    ];
  }
  render() {
    return (
      <View style={styles.sideMenuContainer}>
        {/*Divider between Top Image and Sidebar Option*/}
        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: '#e2e2e2',
            marginTop: 15,
          }}
        />
        {/*Setting up Navigation Options from option array using loop*/}
        <View style={{ width: '100%' }}>
          {this.items.map((item, key) => (
            <View
              key={key}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: global.currentScreenIndex === key ? '#e0dbdb' : '#ffffff',
              }}>
              <View style={{ marginRight: 10, marginLeft: 20 }}>
                <Icon name={item.navOptionThumb} size={25} color="#808080" />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  color: global.currentScreenIndex === key ? 'red' : 'black',
                }}
                onPress={() => {
                  global.currentScreenIndex = key;
                  this.props.navigation.navigate(item.screenToNavigate);
                }}>
                {item.navOptionName}
              </Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,
  },
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 150,
    height: 150,
    marginTop: 20,
    borderRadius: 150 / 2,
  },
});
