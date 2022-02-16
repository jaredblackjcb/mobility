import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const DurationSelector = props => {
    const [selectedDuration, setSelectedDuration] = useState(props.duration);

    const selectDuration = duration => {
        props.changeDurationState(duration);
        setSelectedDuration(duration);
    }


    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={selectDuration(5)}>
            <View style={[styles.radioButton, { backgroundColor: selectedDuration == 5 ? '#3FBE69' : '#00A0F3' }]}>
                <Text style={styles.innerText}>5 minutes</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={selectDuration(10)}>
            <View style={[styles.radioButton, { backgroundColor: selectedDuration == 10 ? '#3FBE69' : '#00A0F3' }]}>
                <Text style={styles.innerText}>10 minutes</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={selectDuration(15)}>
            <View style={[styles.radioButton, { backgroundColor: selectedDuration == 15 ? '#3FBE69' : '#00A0F3' }]}>
                <Text style={styles.innerText}>15 minutes</Text>
            </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: .08,
        marginTop: 40,
    },
    radioButton: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00A0F3',
        borderWidth: 1,
        borderColor: 'white',
        height: 30,
        width: 80
    },
    innerText: {
        color: 'white'
    }
})

export default DurationSelector;