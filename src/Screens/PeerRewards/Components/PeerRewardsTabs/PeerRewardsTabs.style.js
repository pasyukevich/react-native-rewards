import { StyleSheet } from 'react-native'
import { DefaultVariables } from '@/Theme'

export const peerRewardsTabsStyle = StyleSheet.create({
  lastTab: {
    borderTopRightRadius: 20,
  },
  firstTab: {
    borderTopLeftRadius: 20,
  },
  background: {
    backgroundColor: DefaultVariables.Colors.white,
  },
})
