import React, { useState } from 'react'
import {StyleSheet, View, Text, FlatList, TouchableOpacity, Modal } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { globalStyles } from '../styles/global'
import Card from '../shared/Card'

const Home = ( { navigation }) => {

    const [reviews, setReviews] = useState([
        { title: 'Zelda: Breath of the Wild', rating: 5, body: 'lorem ipsum', key: '1'},
        { title: 'Secret of Mana', rating: 3, body: 'lorem ipsum', key: '2'},
        { title: 'Final Fantasy VII', rating: 5, body: 'lorem ipsum', key: '3'},
    ])

    const [modalOpen, setModalOpen] = useState(false)

    // const pressHandler = () => {
    //     navigation.navigate('ReviewDetails')
        // or...
        // navigation.push('ReviewDetails')
    // }

    return (
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType='slide'>
                <View style={styles.modalContent}>
                    <MaterialIcons 
                        name='close' 
                        size={24}
                        style={{...styles.modalToggle, ...styles.modalClose}} 
                        onPress={() => setModalOpen(false)}
                    />
                    <Text>Hello from the modal</Text>
                </View>
            </Modal>
            <MaterialIcons 
                name='add' 
                size={24}
                style={styles.modalToggle} 
                onPress={() => setModalOpen(true)}
            />
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

const styles = StyleSheet.create({
    modalContent:{
        flex: 1,
    },
    modalToggle:{
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
        backgroundColor: '#fff'
    },
    modalClose:{
        marginTop: 20,
        marginBottom: 0,
    }
})

export default Home