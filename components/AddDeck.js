import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet
} from "react-native";

export default class AddDeck extends Component {
  state = {
    deckTitle: undefined
  };

  render() {
    const { deckTitle } = this.state;
    return (
      <View style={styles.center}>
        <TextInput
          style={{width: 200}}
          placeholder="Deck Title"
          value={deckTitle}
          onChangeText={deckTitle =>
            this.setState({
              deckTitle
            })
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 30,
    marginRight: 30
  }
});
