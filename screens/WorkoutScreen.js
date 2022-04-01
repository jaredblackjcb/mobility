import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
// import { verticalScale, scale } from "react-native-size-matters";

import ExerciseAccordion from "../components/ExerciseAccordion";
import { EXERCISES } from "../data/app-data";
import Colors from "../constants/Colors";

export default function WorkoutScreen({ route, navigation }) {
  const categoryIDs = route.params.categoryIDs;
  const [selectedExercises, setSelectedExercises] = useState(
    filterExercises(categoryIDs)
  );
  const [expandedId, setExpandedId] = useState(selectedExercises[0].id);

  // Return 3 exercises. Include at least one exercise from each category contained in catIDs.
  function filterExercises(catIDs) {
    let exercises = [];
    // console.log("catIDs: " + catIDs);
    while (exercises.length < 3) {
      for (let catID of catIDs) {
        const categoryExercises = EXERCISES.filter((exercise) =>
          exercise.categoryIds.categoryIDs.includes(catID)
        );
        const selectedExercise =
          categoryExercises[
            Math.floor(Math.random() * categoryExercises.length)
          ];
        // console.log("selectedExercise: " + JSON.stringify(selectedExercise.categoryIds));
        // console.log("catID: " + catID);
        if (exercises.length < 3 && !exercises.includes(selectedExercise)) {
          exercises.push(selectedExercise);
        }
        // console.log("selectedExercises: " + JSON.stringify(selectedExercises));
      }
    }
    return exercises;
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.accordionView}>
          <ExerciseAccordion
            selectedExercises={selectedExercises}
            expandedId={expandedId}
            setExpandedId={setExpandedId}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.endButton}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Text style={styles.buttonTitle}>Finish</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: Colors.backgroundColor,
  },
  endButton: {
    marginTop: "15%",
    width: 240,
    height: 45,
    borderRadius: 3,
    backgroundColor: Colors.completeColor,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTitle: {
    fontSize: 18,
    color: "#fff",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
