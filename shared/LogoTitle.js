import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

const LogoTitle = (props) => {

    return (
        <View style={styles.titleContainer}>
            <Image source={require('../assets/heart_logo.png')} style={styles.headerImage}/>
            <Text style={styles.headerText}>{props.children}</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row'
    },
    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10,
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    }
})

export default LogoTitle