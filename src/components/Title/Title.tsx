import React from 'react'
import { Text } from 'react-native'
import styles from './styles'

interface Props {
  text: string
}
export default function Title({ text }: Props) {
  return <Text style={styles.root}>{text}</Text>
}
