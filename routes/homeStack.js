import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Home from '../screens/Home'
import ReviewDetails from '../screens/ReviewsDetails'

const Stack = createStackNavigator()

const StackNavigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator