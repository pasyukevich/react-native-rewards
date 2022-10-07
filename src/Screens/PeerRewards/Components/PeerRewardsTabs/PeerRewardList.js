import React, { useCallback } from 'react'
import { FlatList } from 'react-native'
import PropTypes from 'prop-types'
import { Avatar, ListItem } from '@rneui/themed'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { useTheme } from '@/Hooks'
import { peerRewardListStyle } from './PeerRewardList.style'

dayjs.extend(relativeTime)

export const PeerRewardList = ({ list }) => {
  const { Fonts, Gutters, Layout } = useTheme()

  const formatDate = useCallback(date => {
    if (dayjs().diff(date, 'd') < 1) {
      return dayjs(date).fromNow()
    }

    return dayjs(date).format('MMM D, YYYY')
  }, [])

  const renderItem = ({ item }) => {
    return (
      <ListItem containerStyle={[[Layout.alignItemsStart]]}>
        <Avatar
          size={48}
          rounded
          title={item.senderName}
          source={{ uri: item.avatarUrl }}
        />
        <ListItem.Content>
          <ListItem.Title
            style={[
              peerRewardListStyle.title,
              Gutters.regularBMargin,
              Fonts.bold,
            ]}
            ellipsizeMode={'tail'}
            numberOfLines={4}
          >
            {item.title}
          </ListItem.Title>
          <ListItem.Subtitle
            style={[Fonts.textTiny, peerRewardListStyle.subtitle]}
            ellipsizeMode={'tail'}
            numberOfLines={1}
          >
            {`${item.recipientName} rewarded by ${item.senderName}`}
          </ListItem.Subtitle>
          <ListItem.Subtitle
            style={[Fonts.textTiny, peerRewardListStyle.subtitle]}
          >
            {formatDate(item.sentAt)}
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    )
  }

  const keyExtractor = (item, i) => i.toString()

  return (
    <FlatList keyExtractor={keyExtractor} data={list} renderItem={renderItem} />
  )
}

PeerRewardList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      avatarUrl: PropTypes.string,
      title: PropTypes.string,
      senderName: PropTypes.string,
      recipientName: PropTypes.string,
      amount: PropTypes.number,
      sentAt: PropTypes.string,
    }),
  ),
}

PeerRewardList.defaultProps = {
  list: [],
}
