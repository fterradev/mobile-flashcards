import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Text } from 'react-native';
import DeckSummary from './DeckSummary';
import CustomButton from './CustomButton';

class Quiz extends Component {
  state = {
    cardIndex: 0,
    showAnswer: false,
    score: 0
  };

  nextQuestion = (correct = false) => {
    const { cards } = this.props;
    this.setState(
      prevState => ({
        cardIndex:
          prevState.cardIndex < cards.length - 1
            ? prevState.cardIndex + 1
            : prevState.cardIndex,
        showAnswer: false,
        score: correct ? prevState.score + 1 : prevState.score
      }),
      () => {
        if (this.state.cardIndex == cards.length) {
        }
      }
    );
  };

  render() {
    const { cards } = this.props;
    const { cardIndex, showAnswer } = this.state;
    return (
      <View style={styles.container}>
        <View>
          <Text>{`${cardIndex + 1}/${cards.length}`}</Text>
          <Text style={{ color: 'purple' }}>Question</Text>
          <Text style={styles.question}>{cards[cardIndex].question}</Text>
          {!showAnswer && (
            <CustomButton
              outline
              style={{ marginTop: 20 }}
              onPress={() =>
                this.setState({
                  showAnswer: true
                })
              }
            >
              Show Answer
            </CustomButton>
          )}
        </View>
        {showAnswer && (
          <View style={{ flex: 1, justifyContent: 'space-between' }}>
            <View>
              <Text style={{ color: 'purple' }}>Answer</Text>
              <Text style={styles.question}>{cards[cardIndex].answer}</Text>
            </View>
            <View style={{ paddingBottom: 30 }}>
              <CustomButton
                style={{ marginTop: 20, backgroundColor: 'green' }}
                onPress={() => this.nextQuestion(true)}
              >
                Correct
              </CustomButton>
              <CustomButton
                style={{ marginTop: 20, backgroundColor: 'red' }}
                onPress={() => this.nextQuestion(false)}
              >
                Incorrect
              </CustomButton>
            </View>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    paddingTop: 20,
    paddingBottom: 20,
    marginLeft: 30,
    marginRight: 30
  },
  question: {
    padding: 5,
    marginBottom: 30,
    fontSize: 25,
    textAlign: 'center'
  }
});

function mapStateToProps(decks, { navigation }) {
  const { deckId } = navigation.state.params;
  return {
    cards: decks[deckId].cards
  };
}

export default connect(mapStateToProps)(Quiz);
