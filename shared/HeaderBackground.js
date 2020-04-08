import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

const HeaderBackground = () => {

    return (
        <View style={styles.imageContainer}>
            <Image source={require('../assets/game_bg.png')} style={styles.image}/>
        </View>

    )
}

const styles = StyleSheet.create({
    imageContainer: {
        height: 70,
        elevation: 6,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    image: {
        height: 70,
    }
})

export default HeaderBackground