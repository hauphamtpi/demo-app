/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'

import { NavigationContainer } from '@react-navigation/native'

import MainNavigation from './navigations'
import { Provider } from 'react-redux'
import store from '@/redux/store'

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  )
}

export default App
