import React from 'react'
import {StyleSheet, View, Text } from 'react-native'

import { globalStyles } from '../styles/global'


const ReviewDetails = ({navigation, route}) => {
    // const pressHandler = () => {
    //     navigation.goBack()
        // or...
        // navigation.pop()
    // }

    return (
        <View style={globalStyles.container}>
            <Text>{route.params.title}</Text>
            <Text>{route.params.body}</Text>
            <Text>{route.params.rating}</Text>
        </View>
    )
}


export default ReviewDetails