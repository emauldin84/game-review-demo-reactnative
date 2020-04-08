import React, { useState } from 'react'
import {StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native'

import { globalStyles } from '../styles/global'
import Card from '../shared/Card'

const Home = ( { navigation }) => {

    const [reviews, setReviews] = useState([
        { title: 'Zelda: Breath of the Wild', rating: 5, body: 'lorem ipsum', key: '1'},
        { title: 'Secret of Mana', rating: 3, body: 'lorem ipsum', key: '2'},
        { title: 'Final Fantasy VII', rating: 5, body: 'lorem ipsum', key: '3'},
    ])

    // const pressHandler = () => {
    //     navigation.navigate('ReviewDetails')
        // or...
        // navigation.push('ReviewDetails')
    // }

    return (
        <View style={globalStyles.container}>
            <FlatList 
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />

        </View>
    )
}

export default Home