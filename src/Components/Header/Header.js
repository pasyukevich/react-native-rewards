import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { useTheme } from '@/Hooks'
import { Avatar, Text, Header as HeaderComponent } from '@rneui/themed'

export const Header = ({ name, received, given, photoUrl }) => {
  const { Fonts, Gutters, Layout, Colors } = useTheme()

  return (
    <HeaderComponent
      containerStyle={[Gutters.largeHPadding, Gutters.largeVMargin]}
      backgroundColor={Colors.isabelline}
      leftComponent={
        <Avatar size={80} rounded title={name} source={{ uri: photoUrl }} />
      }
      leftContainerStyle={[]}
      centerComponent={
        <>
          <Text style={[Fonts.textRegular, Fonts.bold, Gutters.tinyBMargin]}>
            {name}
          </Text>
          <View style={[Layout.row]}>
            <Text style={[Fonts.textSmall]}>Given </Text>
            <Text style={[Fonts.textSmall, Fonts.bold]}>${given}</Text>
            <Text style={[Fonts.textSmall]}> / Received </Text>
            <Text style={[Fonts.textSmall, Fonts.bold]}>${received}</Text>
          </View>
        </>
      }
      centerContainerStyle={[
        Gutters.giantLMargin,
        Layout.justifyContentCenter,
        Layout.alignItemsStart,
      ]}
      statusBarProps={{
        hidden: true,
      }}
    />
  )
}

Header.propTypes = {
  given: PropTypes.number,
  name: PropTypes.string,
  photoUrl: PropTypes.string,
  received: PropTypes.number,
}

Header.defaultProps = {
  given: 0,
  name: '',
  received: 0,
  photoUrl: '',
}
