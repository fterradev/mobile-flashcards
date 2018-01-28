import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import AddDeck from './components/AddDeck';
import Decks from './components/Decks';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Constants } from 'expo';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import thunkMiddleware from 'redux-thunk';

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
}, {
  navigationOptions: {
    header: null
  }
});

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs
  }
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(
        reducer,
        applyMiddleware(thunkMiddleware)
      )}>
        <View style={{ flex: 1 }}>
          <AppStatusBar backgroundColor="purple" barStyle="light-content" />
          <MainNavigator />
        </View>
      </Provider>
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
