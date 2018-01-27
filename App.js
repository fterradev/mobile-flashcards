import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import AddDeck from './components/AddDeck';
import Decks from './components/Decks';
import { TabNavigator } from 'react-navigation';
import { Constants } from 'expo';

function AppStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = TabNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks'
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck'
    }
  }
});

export default class App extends React.Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppStatusBar backgroundColor="purple" barStyle="light-content" />
        <Tabs />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
