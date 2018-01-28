import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function CustomButton({ children, onPress, style = {}, textStyle = {} }) {
  return (
    <TouchableOpacity
      style={[styles.AndroidSubmitBtn, style]}
      onPress={onPress}
    >
      <Text style={[styles.submitBtnText, textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  AndroidSubmitBtn: {
    backgroundColor: 'purple',
    padding: 10,
    marginLeft: 50,
    marginRight: 50,
    height: 45,
    borderRadius: 2,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitBtnText: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
  }
});