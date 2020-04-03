import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

import StackNavigator from './routes/homeStack'

import Home from './screens/Home'

const getFonts = () => {
  return Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
  })
}

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false)


  if (fontsLoaded){
    return (
      <StackNavigator />
    )
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }

}

export default App
