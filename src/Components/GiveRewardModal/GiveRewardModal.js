import React, { useState, useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Alert } from 'react-native'
import { Button, Overlay, Icon, Text } from '@rneui/themed'
import { useTheme } from '@/Hooks'
import { Input } from '@rneui/themed'
import { reducer, ACTIONS, initialState } from './GiveRewardModal.reducer'
import { addRewardToFeed } from '@/Store/feedData'
import { incrementUserReceivedAmount } from '@/Store/userData'
import { avatarUrlMock } from '@/Mocks'
import { giveRewardModalStyles } from './GiveRewardModal.styles'

export const GiveRewardModal = () => {
  const { Gutters, Layout, Colors } = useTheme()
  const [visible, setVisible] = useState(false)
  const [formState, formDispatch] = useReducer(reducer, initialState)

  const reduxDispatch = useDispatch()

  const userData = useSelector(state => state.userData)

  const toggleOverlay = () => {
    setVisible(!visible)
  }

  const onClose = () => {
    setVisible(false)
    formDispatch({ type: ACTIONS.RESET })
  }

  const onSubmit = () => {
    if (!formState.recipientName || !formState.message) {
      Alert.alert('To send reward provide data for every field')
      return
    }

    reduxDispatch(
      addRewardToFeed({
        title: formState.message,
        avatarUrl: avatarUrlMock,
        senderName: userData.name,
        recipientName: formState.recipientName,
        amount: Number(formState.amount || 0),
        sentAt: new Date().toISOString(),
      }),
    )

    reduxDispatch(incrementUserReceivedAmount(Number(formState.amount)))

    onClose()
  }

  return (
    <View>
      <Button
        icon={<Icon name="plus" type="antdesign" color="white" size={30} />}
        type="solid"
        radius={22}
        onPress={toggleOverlay}
        buttonStyle={giveRewardModalStyles.button}
        containerStyle={giveRewardModalStyles.buttonOpenContainer}
      />
      <Overlay
        isVisible={visible}
        onBackdropPress={toggleOverlay}
        animationType="fade"
        avoidKeyboard={false}
        overlayStyle={giveRewardModalStyles.overlay}
      >
        <Text style={giveRewardModalStyles.textPrimary}>Give reward</Text>
        <Input
          label="To"
          labelStyle={[
            giveRewardModalStyles.label,
            Gutters.smallLPadding,
            Gutters.smallBPadding,
          ]}
          onChangeText={str =>
            formDispatch({ type: ACTIONS.UPDATE_RECIPIENT_NAME, payload: str })
          }
          inputStyle={giveRewardModalStyles.input}
          inputContainerStyle={[
            giveRewardModalStyles.inputContainer,
            Gutters.smallPadding,
          ]}
          maxLength={20}
        />
        <Input
          label="Amount"
          labelStyle={[
            giveRewardModalStyles.label,
            Gutters.smallLPadding,
            Gutters.smallBPadding,
          ]}
          inputStyle={giveRewardModalStyles.input}
          inputContainerStyle={[
            giveRewardModalStyles.inputContainer,
            Gutters.smallPadding,
          ]}
          maxLength={3}
          keyboardType="numeric"
          value={formState.amount}
          onChangeText={str =>
            formDispatch({
              type: ACTIONS.UPDATE_AMOUNT,
              payload: str.replace(/[^0-9]/g, ''),
            })
          }
        />
        <Input
          label="Message"
          labelStyle={[
            giveRewardModalStyles.label,
            Gutters.smallLPadding,
            Gutters.smallBPadding,
          ]}
          inputStyle={[giveRewardModalStyles.input]}
          inputContainerStyle={[
            giveRewardModalStyles.inputMessageContainer,
            Gutters.smallPadding,
          ]}
          multiline={true}
          value={formState.message}
          maxLength={150}
          onChangeText={str =>
            formDispatch({
              type: ACTIONS.UPDATE_MESSAGE,
              payload: str.replace(/\r\n|\r|\n/, ''),
            })
          }
        />
        <Button
          title={'Give'}
          type="solid"
          radius={22}
          onPress={onSubmit}
          buttonStyle={giveRewardModalStyles.giveButton}
          titleStyle={[{ color: Colors.black }, Layout.alignItemsCenter]}
          containerStyle={[
            Layout.alignItemsCenter,
            Gutters.smallRMargin,
            giveRewardModalStyles.buttonSubmitContainer,
          ]}
        />
        <Button
          icon={<Icon name="close" type="antdesign" color="white" size={30} />}
          type="solid"
          radius={25}
          onPress={onClose}
          buttonStyle={giveRewardModalStyles.button}
          containerStyle={[
            giveRewardModalStyles.buttonClose,
            Layout.alignItemsEnd,
          ]}
        />
      </Overlay>
    </View>
  )
}
