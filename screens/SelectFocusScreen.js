import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SelectFocusScreen() {
    return (
      <View style={styles.container}>
        <Text>Select up to 4 focus areas:</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
      container: {
        flex: 1,
         alignItems: 'center',
          justifyContent: 'center'
      }
  });