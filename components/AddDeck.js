import React, { Component } from "react";
import {
  KeyboardAvoidingView,
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
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={{ padding: 5, fontSize: 20 }}>Enter New Deck's Title:</Text>
        <TextInput
          style={styles.input}
          placeholder="Deck Title"
          value={deckTitle}
          onChangeText={deckTitle =>
            this.setState({
              deckTitle
            })
          }
        />
        <TouchableOpacity
          style={[styles.AndroidSubmitBtn, {marginTop: 20}]}>
            <Text style={styles.submitBtnText}>CREATE</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 30,
    marginRight: 30
  },
  input: {
    width: 200,
    padding: 5,
    fontSize: 20
  },
  AndroidSubmitBtn: {
    backgroundColor: 'purple',
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitBtnText: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
  }
});
