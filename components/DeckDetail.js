import React, { Component } from "react";
import { connect } from 'react-redux';

class DeckDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deckId } = navigation.state.params
    return {
      title: deckId
    };
  }
  
  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

function mapStateToProps(decks, { navigation }) {
  const { deckId } = navigation.state.params;
  return {
    deck: decks[deckId]
  };
}

export default connect(
  mapStateToProps
)(DeckDetail);