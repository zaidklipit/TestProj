import React from 'react'
import {Button, Image, StyleSheet, Text, View , TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';

const PrimaryButton = ({title, onPress, }) => {

    return (
        <TouchableOpacity style={styles.container} onPress={onPress} >
            <Text style={styles.title} >{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 55,
        borderRadius: 10,
        width: '100%',
        marginBottom: 100,
        backgroundColor: '#1D1D2C',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        color: 'white'
    }
})

export default PrimaryButton