import React, { Component } from "react";
import { KeyboardAvoidingView, Text, TextInput, StyleSheet } from "react-native";
import { saveCardIntoDeck } from '../actions';
import { connect } from 'react-redux';
import CustomButton from "./CustomButton";

class AddCard extends Component {
  state = {
    question: undefined,
    answer: undefined
  };

  componentDidMount() {
    this
      .refs
      .questionInput
      .focus();
  }

  submit = () => {
    const { deck } = this.props;
    const { question, answer } = this.state;
    if (!question) {
      alert('You must provide a question for the new card.');
      return;
    }
    if (!answer) {
      alert('You must provide an answer for the new card.');
      return;
    }
    this
      .props
      .saveCardIntoDeck(deck.title, { question, answer })
      .then(() => this.props.navigation.goBack())
      .then(this.setState({ question: undefined, answer: undefined }));
  };

  render() {
    const { question, answer } = this.state;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TextInput
          ref="questionInput"
          style={styles.input}
          placeholder="Question"
          value={question}
          onChangeText={question => this.setState({ question })}
          onSubmitEditing={(event) => {
            this
              .refs
              .answerInput
              .focus();
          }} />
        <TextInput
          ref="answerInput"
          style={styles.input}
          placeholder="Answer"
          value={answer}
          onChangeText={answer => this.setState({ answer })} />
        <CustomButton style={{
          marginTop: 20
        }} onPress={this.submit}>
          CREATE
        </CustomButton>
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
    width: 300,
    padding: 5
  }
});

function mapStateToProps(decks, { navigation }) {
  const { deckId } = navigation.state.params;
  return { deck: decks[deckId] };
}

export default connect(mapStateToProps, { saveCardIntoDeck })(AddCard);