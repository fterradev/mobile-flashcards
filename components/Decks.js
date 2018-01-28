import React, { Component } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text
} from "react-native";
import { connect } from 'react-redux';
import { fetchDecks } from '../actions';

class Decks extends Component {
  componentDidMount() {
    this.props.fetchDecks();
  }
  render() {
    const { decks } = this.props;
    return (
      <View>
        <Text>
          {JSON.stringify(decks)}
        </Text>
      </View>
    );
  }
}

function mapStateToProps(decks) {
  return {
    decks
  };
}

export default connect(
  mapStateToProps,
  { fetchDecks }
)(Decks);