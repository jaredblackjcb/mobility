import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Accordion from '../components/Accordion';
import { EXERCISES } from '../data/app-data';
import Colors from '../constants/Colors';

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
      // console.log(ids);
      }
    // for (let i = 0; i < catIDs.length; i++) {
      // console.log(catIDs[i]);
    // }
    return filteredExercises;
  }


    return (
      <View style={styles.container}>
      <ScrollView>
          {renderAccordions(filteredExercises(categoryIDs))}
          <TouchableOpacity style={styles.endButton} onPress={() => {navigation.navigate('Home')}}>
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