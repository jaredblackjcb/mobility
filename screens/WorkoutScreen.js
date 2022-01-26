import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Accordion from '../components/Accordion';
import { EXERCISES } from '../data/app-data';
import Colors from '../constants/Colors';

// const categoryIds = props.navigation.getParam('categoryIds');
// const selectedExercises = EXERCISES.find(exercise => exercise.categoryIds = categoryIds); //TODO: Just an example. Need to figure out how to select 3-5 exercises that have selected categoryIds from the selection screen in their categoryId list


export default function SelectCategoryScreen() {
    return (
      <View style={styles.container}>
      <ScrollView>
          {renderAccordions(EXERCISES)}
      </ScrollView>
        </View>
    );
  }

  const renderAccordions = (data) => {
    const accordions = [];
    for (item of data) {
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