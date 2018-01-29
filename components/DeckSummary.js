import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default function DeckSummary({ title, cardsCount }) {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ color: 'purple', fontSize: 25 }}>{title}</Text>
      <Text style={{ fontSize: 16, color: 'gray' }}>{cardsCount} cards</Text>
    </View>
  );
}
