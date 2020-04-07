import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import About from '../screens/About'
import Header from '../shared/Header'


const Stack = createStackNavigator()

const AboutStack = () => {
    return(
        <Stack.Navigator
            screenOptions={{
                headerStyle:{
                    backgroundColor: '#eee',
                    height: 60,
                },
                headerTintColor: '#444',
            }} 
        >
            <Stack.Screen 
                name="About Game Review Demo" 
                component={About}
                options= {({ navigation }) => {
                    return {
                        headerLeft: () => <Header navigation={navigation}/>,
                    }
                }}
            />
        </Stack.Navigator>
    )
}

export default AboutStack