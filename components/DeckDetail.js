import React, { Component } from "react";
import { connect } from 'react-redux';
import { View, StyleSheet, Text } from 'react-native';
import DeckSummary from './DeckSummary';
import CustomButton from "./CustomButton";

class DeckDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deckId } = navigation.state.params;
    return {
      title: deckId
    };
  }
  
  render() {
    const { deck } = this.props;
    return (
      <View style={styles.container}>
        <DeckSummary
          title={deck.title}
          cardsCount={deck.cards.length}
        />
        <CustomButton
          style={{ marginTop: 20 }}
          onPress={() => this.props.navigation.navigate(
            'AddCard',
            { deckId: deck.title }
          )}
        >
          Add Card
        </CustomButton>
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
  },
  item: {
    backgroundColor: 'white',
    borderRadius: 2,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    },
  },
});

function mapStateToProps(decks, { navigation }) {
  const { deckId } = navigation.state.params;
  return {
    deck: decks[deckId]
  };
}

export default connect(
  mapStateToProps
)(DeckDetail);