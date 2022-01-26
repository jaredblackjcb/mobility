import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import RadioButtonDuration from '../components/RadioButtonDuration';

export default function HomeScreen({navigation}) {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => {navigation.navigate('Workout')}} style={styles.imageTouchable}>
          <ImageBackground source={require('../assets/home_screen/home1.jpg')} resizeMode='cover' style={styles.image}>
            <Text style={styles.h1Text}>Full Body Session</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate('SelectCategory')}} style={styles.imageTouchable}>
          <ImageBackground source={require('../assets/home_screen/home2.jpeg')} resizeMode='cover' style={styles.image}>
            <Text style={styles.h1Text}>Focused Session</Text>
          </ImageBackground>
        </TouchableOpacity>
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
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    imageTouchable: {
        flex: .5,
        marginTop: 15,
    },
    h1Text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#384955',
    }
  });