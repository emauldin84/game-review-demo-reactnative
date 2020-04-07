import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const Header = ({ navigation }) => {

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
        top: 5
    }
})

export default Header