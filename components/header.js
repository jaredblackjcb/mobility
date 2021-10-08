import React from 'react';
import {View, Image, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Image style={styles.image} source={require('../assets/header/logo.png')}></Image>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flex: .085,
        width: '100%',
        backgroundColor: '#00A0F3',
        alignItems: 'center',
        marginTop: 40
    },
    image: {
        marginTop:10,
        flex: .8,
        width: '40%'
    }
})
export default Header;