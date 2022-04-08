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
            <Text style={[styles.title, styles.font]}>{item.title}</Text>
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
              <Text style={{ color: "white" }}>{item.description}</Text>
            </View>
          )}
        </View>
      );
    });
  };

  return <View>{list(props.selectedExercises)}</View>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.white,
  },
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
    alignItems: "center",
  },
  image: {
    height: 200,
    width: "100%",
    margin: 16,
  },
  videoPlayerHolder: {
    flex: 1,
    marginBottom: 15,
    backgroundColor: 'white'
  }
});

export default ExerciseAccordion;