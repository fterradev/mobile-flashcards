import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  StyleSheet
} from 'react-native';
import { saveDeckTitle } from '../actions';
import { connect } from 'react-redux';
import CustomButton from './CustomButton';

class AddDeck extends Component {
  state = {
    deckTitle: undefined
  };

  submit = () => {
    const { deckTitle } = this.state;
    if (deckTitle) {
      this.props
        .saveDeckTitle(deckTitle)
        .then(() =>
          this.props.navigation.navigate('DeckDetail', { deckId: deckTitle })
        )
        .then(
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
        <Text style={{ padding: 5, fontSize: 20 }}>
          Enter New Deck's Title:
        </Text>
        <TextInput
          ref="deckTitleInput"
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
        <CustomButton style={{ marginTop: 20 }} onPress={this.submit}>
          Create Deck
        </CustomButton>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30
  },
  input: {
    width: 300,
    padding: 5,
    fontSize: 20
  }
});

export default connect(null, {
  saveDeckTitle
})(AddDeck);
