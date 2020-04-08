import React from 'react'
import {StyleSheet, View, Text } from 'react-native'

import { globalStyles } from '../styles/global'
import Card from '../shared/Card'


const ReviewDetails = ({navigation, route}) => {
    // const pressHandler = () => {
    //     navigation.goBack()
        // or...
        // navigation.pop()
    // }

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{route.params.title}</Text>
                <Text>{route.params.body}</Text>
                <Text>{route.params.rating}</Text>
            </Card>
        </View>
    )
}


export default ReviewDetails