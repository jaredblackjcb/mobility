import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { WORKOUT_CATEGORIES } from '../data/app-data';


export default function HomeScreen({navigation}) {
  const selectedIDs = () => {
    let catIDs = [];
    for (let category of WORKOUT_CATEGORIES) {
      catIDs.push(category.id);
    }
    console.log("catIDs: " + catIDs);
    return getRandomSlice(catIDs, 3);
  }
  
  function getRandomSlice(array, n) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, n);
    console.log("Selected IDs: " + selected);
    return selected;
  }

    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => {navigation.navigate('Workout', {categoryIDs: selectedIDs()})}} style={styles.imageTouchable}>
          <ImageBackground source={require('../assets/home_screen/home1.jpg')} resizeMode='cover' style={styles.image}>
            <Text style={styles.h1Text}>Quick Start</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate('SelectCategory')}} style={styles.imageTouchable}>
          <ImageBackground source={require('../assets/home_screen/home2.jpeg')} resizeMode='cover' style={styles.image}>
            <Text style={styles.h1Text}>Custom Session</Text>
          </ImageBackground>
        </TouchableOpacity>
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