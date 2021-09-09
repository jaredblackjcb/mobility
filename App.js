import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Header from './components/Header';
import RadioButtonDuration from './components/RadioButtonDuration';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.imageContainer}>
        <ImageBackground source={require('./assets/home_screen/home1.jpg')} resizeMode='cover' style={styles.image}>
          <Text style={styles.h1Text}>Full Body Mobility</Text>
        </ImageBackground>
        <ImageBackground source={require('./assets/home_screen/home2.jpeg')} resizeMode='cover' style={styles.image}>
          <Text style={styles.h1Text}>Focused Mobility</Text>
        </ImageBackground>
        <RadioButtonDuration />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#384955',

  },
  imageContainer: {
    marginTop: 30,
    flex: 1,
    marginBottom: 150
  },
  image: {
    flex: .5,
    marginTop: 15,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  h1Text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#384955',
  }
});
