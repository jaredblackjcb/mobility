import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class RadioButtonDuration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            durationOptions: [
                { minutes: 5 },
                { minutes: 10 },
                { minutes: 15 }
            ]
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.durationOptions.map((minutes, index) => {lolllll
                        return (
                            <TouchableOpacity onPress={() => {
                                const durationState = this.state.durationOptions;
                                if (durationState.some(minutes => { if (minutes.selected) return true})) {
                                    const selectedIndex = durationState.findIndex(minutes => minutes.selected == true);
                                    if (selectedIndex == index) {
                                        durationState[selectedIndex].selected = false;
                                    } else {
                                        durationState[selectedIndex].selected = false;
                                        durationState[index].selected = !durationState[index].selected;
                                    }
                                } else {
                                    durationState[index].selected = !durationState[index].selected;
                                }
                                this.setState({ durationOptions: durationState });
                            }}>
                                <View style={[styles.radioButton, {backgroundColor: minutes.selected ? '#3FBE69' : '#00A0F3'}]}>
                                    <Text style={styles.innerText}>{minutes.minutes} minutes</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }
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
