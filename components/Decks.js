import React, { Component } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  FlatList
} from "react-native";
import { connect } from 'react-redux';
import { fetchDecks } from '../actions';
import DeckSummary from './DeckSummary';

class Decks extends Component {
  componentDidMount() {
    this.props.fetchDecks();
  }
  render() {
    const { decks } = this.props;
    return (
      <View style={styles.container}>
        {decks && (
          <FlatList
            data={Object.keys(decks).map(key => decks[key])}
            renderItem={({ item: deck, index }) => (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate(
                  'DeckDetail',
                  { deckId: deck.title }
                )}
              >
                <DeckSummary
                  title={deck.title}
                  cardsCount={deck.cards.length}
                />
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => (index)}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  marginBottom: 20,
                  marginTop: 20,
                  height: 1,
                  backgroundColor: 'gray'
                }}
              />
            )}
          />
        )}
      </View>
    );
  }
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    paddingTop: 20,
    paddingBottom: 20,
    marginLeft: 30,
    marginRight: 30
  }
});

function mapStateToProps(decks) {
  return {
    decks
  };
}

export default connect(
  mapStateToProps,
  { fetchDecks }
)(Decks);