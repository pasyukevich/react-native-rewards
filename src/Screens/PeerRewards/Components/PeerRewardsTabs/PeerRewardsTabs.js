import React from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'
import { Tab, TabView } from '@rneui/themed'
import { useTheme } from '@/Hooks'
import { PeerRewardList } from './PeerRewardList'
import { peerRewardsTabsStyle } from './PeerRewardsTabs.style'

export const PeerRewardsTabs = () => {
  const { Fonts, Layout, Colors } = useTheme()
  const [index, setIndex] = React.useState(0)

  const feedData = useSelector(state => state.feedData)
  const userData = useSelector(state => state.userData)

  const ownRewardList = feedData.filter(
    ({ senderName }) => senderName === userData.name,
  )

  return (
    <View style={[Layout.fill]}>
      <Tab
        value={index}
        onChange={e => setIndex(e)}
        disableIndicator
        style={[Layout.fill]}
      >
        <Tab.Item
          title="Feed"
          titleStyle={active => [
            Fonts.textSmall,
            {
              color: active ? Colors.khaki : Colors.black,
            },
          ]}
          containerStyle={(active, i) => [
            {
              backgroundColor: active ? Colors.white : Colors.chineseWhite,
            },
            peerRewardsTabsStyle.firstTab,
          ]}
        />
        <Tab.Item
          title="My rewards"
          titleStyle={[
            Fonts.textSmall,
            active => ({
              color: active ? Colors.khaki : Colors.black,
            }),
          ]}
          containerStyle={active => [
            {
              backgroundColor: active ? Colors.white : Colors.chineseWhite,
            },
            peerRewardsTabsStyle.lastTab,
          ]}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={[Layout.fill, peerRewardsTabsStyle.background]}>
          <PeerRewardList list={feedData} />
        </TabView.Item>
        <TabView.Item style={[Layout.fill, peerRewardsTabsStyle.background]}>
          <PeerRewardList list={ownRewardList} />
        </TabView.Item>
      </TabView>
    </View>
  )
}
