import React, { Component } from 'react';
import { clearDecks } from '../actions';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class ClearDecks extends Component {
  state = {
    done: false
  };

  clearDecks = () => {
    this.props.clearDecks().then(
      this.setState({
        done: true
      })
    );
  }

  render() {
    return (
      <View>
        {this.state.done && (
          <Text>
            Done!
          </Text>
        )}
        <TouchableOpacity
          style={[styles.AndroidSubmitBtn, { marginTop: 20 }]}
          onPress={this.clearDecks}
        >
          <Text style={styles.submitBtnText}>CLEAR DECKS</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  null,
  {
    clearDecks
  }
)(ClearDecks);