import React from 'react'
import {
  TextInputProps,
  TextInput,
  View,
  Text,
  StyleProp,
  ViewStyle
} from 'react-native'
import styles from './styles'

interface ExtraTextInputProps {
  label?: string
  icon?: any
  containerStyle?: StyleProp<ViewStyle>
}

type InputProps = ExtraTextInputProps & TextInputProps

export default function CustomInput({
  label,
  icon,
  containerStyle,
  ...props
}: InputProps) {
  return (
    <View style={containerStyle}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        onChangeText={(value) => console.log('value', value)}
        style={styles.input}
        {...props}
      />
    </View>
  )
}
