import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import About from '../screens/About'
import Header from '../shared/Header'
import LogoTitle from '../shared/LogoTitle'
import HeaderBackground from '../shared/HeaderBackground'

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
                headerTitleAlign: 'center'
            }} 
        >
            <Stack.Screen 
                name="About" 
                component={About}
                options={({ navigation }) => {
                    return {
                        headerLeft: () => <Header navigation={navigation}/>,
                        headerTitle: props => <LogoTitle {...props} />,
                        headerBackground: props => <HeaderBackground {...props} />,
                    }
                }}
            />
        </Stack.Navigator>
    )
}

export default AboutStack