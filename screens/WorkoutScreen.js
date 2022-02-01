import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Accordion from '../components/Accordion';
import { EXERCISES } from '../data/app-data';
import Colors from '../constants/Colors';
import Exercise from '../models/Exercise';

// const categoryIds = props.navigation.getParam('categoryIds');
// const selectedExercises = EXERCISES.find(exercise => exercise.categoryIds = categoryIds); //TODO: Just an example. Need to figure out how to select 3-5 exercises that have selected categoryIds from the selection screen in their categoryId list


export default function WorkoutScreen({route, navigation}) {
  const categoryIDs = route.params.categoryIDs;

  const filteredExercises = catIDs => {
    const filteredExercises = [];
    // Pass in EXERCISES
    for (let exercise of EXERCISES) {
      const ids = exercise.categoryIds.categoryIDs;
      for (let id of ids){
        if (catIDs.includes(id) && !filteredExercises.includes(exercise)) {
          filteredExercises.push(exercise);
        }
      }
      console.log(ids);
      }
    for (let i = 0; i < catIDs.length; i++) {
      console.log(catIDs[i]);
    }
    return filteredExercises;
  }


    return (
      <View style={styles.container}>
      <ScrollView>
          {renderAccordions(filteredExercises(categoryIDs))}
      </ScrollView>
        </View>
    );
  }

  const renderAccordions = (data) => {
    const accordions = [];
    for (let item of data) {
      accordions.push(
        <Accordion
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
      }
  });