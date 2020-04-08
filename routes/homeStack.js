import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Home from '../screens/Home'
import ReviewDetails from '../screens/ReviewsDetails'
import Header from '../shared/Header'
import LogoTitle from '../shared/LogoTitle'
import HeaderBackground from '../shared/HeaderBackground'

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
                headerTitleAlign: 'center',
            }} 
        >
            <Stack.Screen 
                name="Game Review Demo"
                component={Home}
                options= {({ navigation }) => {
                    return {
                        headerLeft: () => <Header navigation={navigation}/>,
                        headerTitle: props => <LogoTitle {...props} />,
                        headerBackground: props => <HeaderBackground {...props} />,
                    }
                }}
            />
            <Stack.Screen 
                name="ReviewDetails" 
                component={ReviewDetails}
                options={{ 
                    headerTitle: props => <LogoTitle {...props} />,
                    headerBackground: props => <HeaderBackground {...props} />,
                    headerBackTitleVisible: null
                }}
            />
        </Stack.Navigator>
    )
}

export default HomeStack