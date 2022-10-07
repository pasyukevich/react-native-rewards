import React from 'react'
import { View, SafeAreaView } from 'react-native'
import { useSelector } from 'react-redux'
import { useTheme } from '@/Hooks'
import { Header, GiveRewardModal } from '@/Components'
import { PeerRewardsTabs } from './Components'
export const PeerRewards = () => {
  const { Layout, Colors } = useTheme()

  const { name, givenAmount, receivedAmount, photoUrl } = useSelector(
    state => state.userData,
  )

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: Colors.isabelline }]}>
      <View style={[Layout.fill]}>
        <Header
          name={name}
          given={givenAmount}
          received={receivedAmount}
          photoUrl={photoUrl}
        />
        <PeerRewardsTabs />
        <GiveRewardModal />
      </View>
    </SafeAreaView>
  )
}
