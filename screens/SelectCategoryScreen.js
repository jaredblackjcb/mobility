import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions, Platform, ToastAndroid } from 'react-native';
import { WORKOUT_CATEGORIES } from '../data/app-data';
import Colors from '../constants/Colors';



export default function SelectCategoryScreen({ navigation }) {

  const [selectedIDs, setSelectedIDs] = useState([]);
  const [checkboxState, setCheckboxState] = useState({ 100: false, 101: false, 102: false, 103: false, 104: false, 105: false, 106: false });
  const [errorMessage, setErrorMessage] = useState('');

  const Item = ({ categoryName, categoryID }) => {
    return (
      <TouchableOpacity style={[styles.gridItem, checkboxState[categoryID] ? { backgroundColor: Colors.completeColor } : { backgroundColor: Colors.primaryColor }]}
        onPress={() => addIDHandler(categoryID)}>
        <Text style={styles.gridItemLabel}>{categoryName}</Text>
      </TouchableOpacity>
    );
  };

  const addIDHandler = id => {
    let allSelectedIDs = selectedIDs;
    let newCheckboxState;
    // If box is not currently selected and there are 3 or less boxes selected, turn box green and add id to the selected state 
    console.log("numSelectedIds: " + allSelectedIDs.length);
    if (allSelectedIDs.length < 3 && !allSelectedIDs.includes(id)) {
      allSelectedIDs.push(id);
      setSelectedIDs(allSelectedIDs);
      newCheckboxState = { ...checkboxState, [id]: true };
      setCheckboxState(newCheckboxState);
      console.log(allSelectedIDs);
      console.log(newCheckboxState);
    } else {
      // Deselect the category
      if (allSelectedIDs.includes(id)){
        allSelectedIDs = allSelectedIDs.filter(item => item != id);
        setSelectedIDs(allSelectedIDs);
        newCheckboxState = { ...checkboxState, [id]: false };
        setCheckboxState(newCheckboxState);
        console.log(allSelectedIDs);
        console.log(newCheckboxState);
      }
      //Error message handling for attempting to select a 4th box
      if (allSelectedIDs.length === 3) {
        if (Platform.OS === 'android') {
          ToastAndroid.show("Only 3 categories can be selected.", ToastAndroid.SHORT, ToastAndroid.BOTTOM);
        } else {
          setErrorMessage("Only 3 categories can be selected.");
        }
      } else {
        setErrorMessage('');
      }
    }
    // You can't set and use the state within the same {}. It is asynchronous so it will maintain its original state until after the function has executed.
  }
  
  const renderItem = ({ item }) => (
    <Item categoryName={item.categoryName} categoryID={item.id} />
  );

  function startSessionNullHandler() {
    if (Platform.OS === 'android') {
      ToastAndroid.show("Please select at least one category.",
      ToastAndroid.SHORT, ToastAndroid.BOTTOM);
    } else {
      setErrorMessage("Please select at least one category.");
    }
  }

  const renderError = () => {
    if (errorMessage) {
      return (
        <View style={styles.errorMessageContainer}>
          <Text style={styles.errorMessageText}>{errorMessage}</Text>
        </View>);
    }
  }

  return (
    <View style={styles.container} >
      <Text style={styles.h1}>Select up to 3 categories:</Text>
      <FlatList
        contentContainerStyle={styles.gridContainer}
        data={WORKOUT_CATEGORIES}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id}
        numColumns={2}
      />
      {renderError()}

      <TouchableOpacity style={styles.startButton} onPress={ () => selectedIDs.length > 0 ? navigation.navigate('Workout', {categoryIDs: selectedIDs}) : startSessionNullHandler()}>
        <Text style={styles.buttonTitle}>Start Session</Text>
      </TouchableOpacity>
    </View>
  );
}


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
  },
  errorMessageContainer: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center'
  },
  errorMessageText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  }
});