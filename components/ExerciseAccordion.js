import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from "react-native";
import VideoPlayer from "./VideoPlayer";

import Colors from "../constants/Colors";
import Icon from "react-native-vector-icons/MaterialIcons";

const ExerciseAccordion = (props) => {
  useEffect(() => {
    console.log("using effect");
  }, [props.expandedId]);

  const list = (exercises) => {
    let array = [];
    for (let exercise of exercises) {
      array.push(exercise);
    }
    return array.map((item) => {
      return (
        <View key={item.id}>
          <TouchableOpacity
            style={styles.row}
            onPress={() => {
              if (props.expandedId !== item.id) {
                props.setExpandedId(item.id);
              } else {
                props.setExpandedId(0);
              }
              console.log(props.expandedId);
            }}
          >
            <Text style={[styles.h2, styles.font]}>{item.title}</Text>
            <Icon
              name={item.id === props.expandedId ? "keyboard-arrow-up" : "keyboard-arrow-down"}
              size={30}
              color={Colors.white}
            />
          </TouchableOpacity>
          <View style={styles.parentHr} />
          {item.id === props.expandedId && (
            <View style={styles.child}>
              <View style={styles.videoPlayerHolder}>
                <VideoPlayer videoPath={item.videoPath} />
              </View>
              <Text style={styles.textHolder}>
                <Text style={styles.h2}>Repetitions: </Text>
                <Text style={styles.text}>{item.repetitions}</Text>
              </Text>
              <Text style={styles.textHolder}>
                <Text style={styles.h2}>Hold: </Text>
                <Text style={styles.text}>{item.duration} seconds</Text>
              </Text>
              <Text style={styles.text}>{item.description}</Text>
            </View>
          )}
        </View>
      );
    });
  };

  return <View>{list(props.selectedExercises)}</View>;
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 50,
    paddingLeft: 25,
    paddingRight: 18,
    alignItems: "center",
    backgroundColor: Colors.primaryColor,
  },
  parentHr: {
    height: 1,
    color: Colors.primaryColor,
    width: "100%",
  },
  child: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    padding: 16,
  },
  videoPlayerHolder: {
    flex: 1,
    marginBottom: 15,
    backgroundColor: 'white',
    alignItems: "center"
  },
  h2: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.white,
  },
  text: {
    color: "white",
  },
  textHolder: {
    marginBottom: 5
  }
});

export default ExerciseAccordion;
