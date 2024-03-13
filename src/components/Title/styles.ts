import { getFontFamily } from '@/helpers/getFonts'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  root: {
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: 24,
    color: '#022150'
  }
})
export default styles
