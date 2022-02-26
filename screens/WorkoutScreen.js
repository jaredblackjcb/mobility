import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Accordion from '../components/Accordion';
import { EXERCISES } from '../data/app-data';
import Colors from '../constants/Colors';

export default function WorkoutScreen({ route, navigation }) {
  const categoryIDs = route.params.categoryIDs;

  // Return 3 exercises. Include at least one exercise from each category contained in catIDs. 
  const filteredExercises = catIDs => {
    let selectedExercises = [];
    // console.log("catIDs: " + catIDs);
    while (selectedExercises.length < 3) {
      for (let catID of catIDs) {
        const categoryExercises = EXERCISES.filter(exercise => exercise.categoryIds.categoryIDs.includes(catID));
        const selectedExercise = categoryExercises[Math.floor(Math.random() * categoryExercises.length)];
        // console.log("selectedExercise: " + JSON.stringify(selectedExercise.categoryIds));
        // console.log("catID: " + catID);
        if (selectedExercises.length < 3 && !selectedExercises.includes(selectedExercise)) {
          selectedExercises.push(selectedExercise);
        }
        // console.log("selectedExercises: " + JSON.stringify(selectedExercises));
      }
    }
    return selectedExercises;
  }


  return (
    <View style={styles.container}>
      <ScrollView>
        {renderAccordions(filteredExercises(categoryIDs))}
        <TouchableOpacity style={styles.endButton} onPress={() => { navigation.navigate('Home') }}>
          <Text style={styles.buttonTitle}>Finish</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const renderAccordions = (data) => {
  const accordions = [];
  for (let item of data) {
    accordions.push(
      <Accordion
        key={item.id}
        title={item.title}
        description={item.description}
        imagePath={item.imagePath}
      />
    )
  }
  return accordions;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: Colors.backgroundColor
  },
  endButton: {
    marginTop: 50,
    marginBottom: 50,
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