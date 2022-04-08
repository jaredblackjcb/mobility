import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Video } from 'expo-av';

export default function VideoPlayer(props) {
  const DEVICE_WIDTH = Dimensions.get('window').width;
  return (
    <View style={styles.container}>
     <Video
        style={[styles.video, {width: DEVICE_WIDTH, height: 210}]}
        source={props.videoPath}
        useNativeControls
        resizeMode="contain"
        isLooping={false}
        backgroundColor="black"
        isMuted
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    video: {
      alignSelf: 'center',
    }
  });