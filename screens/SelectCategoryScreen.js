import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions, Button } from 'react-native';
import { WORKOUT_CATEGORIES } from '../data/category-data';
import Colors from '../constants/Colors';



export default function SelectCategoryScreen({ navigation }) {


  return (
    <View style={styles.container} >
      <Text style={styles.h1}>Select up to 3 focus areas:</Text>
      <FlatList
        contentContainerStyle={styles.gridContainer}
        data={WORKOUT_CATEGORIES}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
      <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate('Workout')}>
        <Text style={styles.buttonTitle}>Start Session</Text>
      </TouchableOpacity>
      {/* <View style={styles.startButton}>
        <Button title="Start Session" onPress={() => navigation.navigate('Workout')}></Button>
      </View> */}
    </View>
  );
}

const Item = ({ categoryName }) => {
  return (
    <TouchableOpacity style={styles.gridItem}>
      <Text style={styles.gridItemLabel}>{categoryName}</Text>
    </TouchableOpacity>
  );
};

const renderItem = ({ item }) => (
  <Item categoryName={item.categoryName} />
);

//Define grid item dimensions
const { width, height } = Dimensions.get('window');
const sideMargin = 22
const itemWidth = (width - sideMargin * 3) / 2; //3 side margins, 2 columns
const itemHeight = height / 12;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  h1: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 20,
    paddingHorizontal: 25,
    paddingBottom: 10
  },
  gridContainer: {
    marginLeft: sideMargin,
    // backgroundColor: '#fff'
  },
  gridItem: {
    backgroundColor: Colors.primaryColor,
    marginVertical: 8,
    borderRadius: 5,
    width: itemWidth,
    height: itemHeight,
    marginRight: sideMargin,
  },
  gridItemLabel: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 5
  },
  startButton: {
    marginBottom: 150,
    marginHorizontal: 80,
    height: 45,
    borderRadius: 3,
    backgroundColor: Colors.completeColor,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonTitle: {
    fontSize: 18,
    color: '#fff'
  }
});