import React, {Component} from 'react';
import { View, TouchableOpacity, Text, StyleSheet, LayoutAnimation, Platform, UIManager, Image} from "react-native";
import Colors from '../constants/Colors'
import Icon from "react-native-vector-icons/MaterialIcons";

export default class Accordion extends Component {


    constructor(props) {
        super(props)
        this.state = {
            data: props.data,
            expanded: false
        }

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }


    render() {
        return (
            <View>
                <TouchableOpacity ref={this.accordion} style={styles.row} onPress={() => this.toggleExpand()}>
                    <Text style={[styles.title, styles.font]}>{this.props.title}</Text>
                    <Icon name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={Colors.white} />
                </TouchableOpacity>
                <View style={styles.parentHr}/>
                {
                    this.state.expanded &&
                    <View style={styles.child}>
                    <Image source={this.props.imagePath} style={styles.image}/>
                    <Text style={{color: 'white'}}>{this.props.description}</Text>
                    </View>
                }
            </View>
        )
    }

    toggleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({expanded : !this.state.expanded})
    }

}

const styles = StyleSheet.create({
title:{
    fontSize: 14,
    fontWeight:'bold',
    color: Colors.white
},
row:{
    flexDirection: 'row',
    justifyContent:'space-between',
    height:56,
    paddingLeft:25,
    paddingRight:18,
    alignItems:'center',
    backgroundColor: Colors.primaryColor
},
parentHr:{
    height:1,
    color: Colors.primaryColor,
    width:'100%'
},
child:{
    backgroundColor: Colors.backgroundColor,
    padding:16,
    alignItems: 'center'
},
image:{
    height: 300,
    width: 300,
    margin: 16
}
// childButton:{
//     margin: 30,
//     padding: 15,
//     borderRadius: 3,
//     backgroundColor: Colors.completeColor
// }
});