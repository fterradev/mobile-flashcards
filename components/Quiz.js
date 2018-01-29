import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Text } from 'react-native';
import DeckSummary from './DeckSummary';
import CustomButton from './CustomButton';
import { clearLocalNotification, setLocalNotification } from '../utils/helpers';

class Quiz extends Component {
  state = {
    cardIndex: 0,
    showAnswer: false,
    score: 0
  };

  componentDidUpdate(prevProps, prevState) {
    const { cards } = this.props;
    const { cardIndex } = this.state;
    const finished = cardIndex === cards.length;
    const wasFinishedPreviously = prevState.cardIndex === cards.length;
    if (finished && !wasFinishedPreviously) {
      clearLocalNotification().then(setLocalNotification);
    }
  }

  nextQuestion = (correct = false) => {
    const { cards } = this.props;
    this.setState(prevState => ({
      cardIndex: prevState.cardIndex + 1,
      showAnswer: false,
      score: correct ? prevState.score + 1 : prevState.score
    }));
  };

  restart = () => {
    this.setState({
      cardIndex: 0,
      showAnswer: false,
      score: 0
    });
  };

  render() {
    const { cards } = this.props;
    const { cardIndex, showAnswer, score } = this.state;
    const finished = cardIndex === cards.length;
    return (
      <View style={styles.container}>
        {!finished && (
          <View style={{ flex: 1, justifyContent: 'space-between' }}>
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
        )}
        {finished && (
          <View>
            <Text style={{ color: 'purple' }}>Final score</Text>
            <View style={styles.finalScoreContainer}>
              <Text style={{ fontSize: 50, color: 'purple' }}>
                {`${score}/${cards.length}`}
              </Text>
              <Text style={{ fontSize: 20, color: 'purple' }}>
                ({`${Math.round(100 * score / cards.length)}%`})
              </Text>
              {score === cards.length && (
                <Text style={{ fontSize: 40, color: 'purple' }}>Perfect!</Text>
              )}
            </View>
            <View style={{ paddingBottom: 30 }}>
              <CustomButton
                outline
                style={{ marginTop: 20 }}
                onPress={() => this.props.navigation.goBack()}
              >
                Back to Deck
              </CustomButton>
              <CustomButton
                style={{ marginTop: 20 }}
                onPress={() => this.restart()}
              >
                Restart Quiz
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
  },
  finalScoreContainer: {
    padding: 30,
    alignItems: 'center'
  }
});

function mapStateToProps(decks, { navigation }) {
  const { deckId } = navigation.state.params;
  return {
    cards: decks[deckId].cards
  };
}

export default connect(mapStateToProps)(Quiz);
