import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const Header = ({ navigation, title }) => {

    const openMenu = () => {
        navigation.openDrawer()
    }
    return (
        <View style={styles.header}>
            <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon}/>
        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        position: 'absolute',
        left: 16,
        top: 5,
        color: '#444',
    },
    headerImage: {
        width: 26,
        height: 26,
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    }
})

export default Header