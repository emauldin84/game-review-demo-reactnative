import React from 'react'
import {StyleSheet, View, Text, Button } from 'react-native'

import { globalStyles } from '../styles/global'


const ReviewDetails = ({ navigation }) => {

    const pressHandler = () => {
        navigation.goBack()
        // or...
        // navigation.pop()
    }
    
    return (
        <View style={globalStyles.container}>
            <Text>ReviewDetails Screen</Text>
            <Button title='back to home' onPress={pressHandler}/>
        </View>
    )
}


export default ReviewDetails