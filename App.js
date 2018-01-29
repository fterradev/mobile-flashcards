import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import AddDeck from './components/AddDeck';
import Decks from './components/Decks';
import ClearDecks from './components/ClearDecks';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Constants } from 'expo';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import DeckDetail from './components/DeckDetail';
import AddCard from './components/AddCard';
import Quiz from './components/Quiz';

function AppStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

const Tabs = TabNavigator(
  {
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
    },
    ClearDecks: {
      screen: ClearDecks,
      navigationOptions: {
        tabBarLabel: 'Clear Decks'
      }
    }
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: 'white',
      style: {
        height: 56,
        backgroundColor: 'purple',
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
);

const MainNavigator = StackNavigator(
  {
    Home: {
      screen: Tabs
    },
    DeckDetail: {
      screen: DeckDetail
    },
    AddCard: {
      screen: AddCard,
      navigationOptions: {
        title: 'Add Card'
      }
    },
    Quiz: {
      screen: Quiz,
      navigationOptions: {
        title: 'Quiz'
      }
    }
  },
  {
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'purple'
      }
    }
  }
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer, applyMiddleware(thunkMiddleware))}>
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
    justifyContent: 'center'
  }
});
