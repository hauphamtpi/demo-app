import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { PATH } from './path'

import {
  DetailsScreen,
  HomeScreen,
  ResetPasswordScreen,
  SignInScreen,
  SignUpScreen
} from '@/screens'

import { useAppSelector } from '@/redux/store'

const Stack = createNativeStackNavigator()

const MainNavigation = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth)
  return (
    <Stack.Navigator
      screenOptions={{ header: () => null, headerShown: false }}
      initialRouteName={PATH.SignIn}
    >
      {isAuthenticated ? (
        <>
          <Stack.Screen name={PATH.HomeScreen} component={HomeScreen} />
          <Stack.Screen name={PATH.DetailsScreen} component={DetailsScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name={PATH.SignIn} component={SignInScreen} />
          <Stack.Screen name={PATH.SignUp} component={SignUpScreen} />
          <Stack.Screen
            name={PATH.ResetPassword}
            component={ResetPasswordScreen}
          />
        </>
      )}
    </Stack.Navigator>
  )
}

export default MainNavigation
