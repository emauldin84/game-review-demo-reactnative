import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Home from '../screens/Home'
import ReviewDetails from '../screens/ReviewsDetails'

const Stack = createStackNavigator()

const HomeStack = () => {
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
                name="Home" 
                component={Home} 
            />
            <Stack.Screen 
                name="ReviewDetails" 
                component={ReviewDetails} 
            />
        </Stack.Navigator>
    )
}

export default HomeStack