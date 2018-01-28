import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function CustomButton({ children, onPress, style = {}, textStyle = {}, outline }) {
  return (
    <TouchableOpacity
      style={[
        styles.AndroidSubmitBtn,
        outline ? {
          backgroundColor: 'white',
          borderColor: 'purple',
          borderWidth: 1
        } : {},
        style
      ]}
      onPress={onPress}
    >
      <Text style={[
        styles.submitBtnText,
        outline ? { color: 'purple' } : {},
        textStyle
      ]}>{children}</Text>
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