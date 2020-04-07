import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Home from '../screens/Home'
import ReviewDetails from '../screens/ReviewsDetails'
import Header from '../shared/Header'

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
                name="Game Review Demo"
                component={Home}
                options= {({ navigation }) => {
                    return {
                        headerLeft: () => <Header navigation={navigation}/>,
                    }
                }}
            />
            <Stack.Screen 
                name="ReviewDetails" 
                component={ReviewDetails}
                options={{
                    title: 'Review Details',
                }}
            />
        </Stack.Navigator>
    )
}

export default HomeStack