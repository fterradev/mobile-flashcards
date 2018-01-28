import React, { Component } from "react";
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet
} from "react-native";
import { saveDeckTitle } from '../actions';
import { connect } from 'react-redux';

class AddDeck extends Component {
  state = {
    deckTitle: undefined
  };

  submit = () => {
    const { deckTitle } = this.state;
    if (deckTitle) {
      this.props.saveDeckTitle(deckTitle).then(
        this.setState({
          deckTitle: undefined
        })
      );
    } else {
      alert('You must provide a title for the new deck.');
    }
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
          onSubmitEditing={this.submit}
        />
        <TouchableOpacity
          style={[styles.AndroidSubmitBtn, { marginTop: 20 }]}
          onPress={this.submit}
        >
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

export default connect(
  null, {
    saveDeckTitle
  }
)(AddDeck);