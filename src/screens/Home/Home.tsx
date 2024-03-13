import React from 'react'
import { SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'

import { Title } from '@/components'
import { useAppSelector } from '@/redux/store'

export default function Home() {
  const { currentUser } = useAppSelector((state) => state.user)
  const a = 1
  a - 1
  return (
    <SafeAreaView>
      <Title text="Welcome Back" />
      <Icon name="switch" size={30} />
    </SafeAreaView>
  )
}
