import { StyleSheet } from 'react-native'

export const giveRewardModalStyles = StyleSheet.create({
  button: {
    margin: 10,
    width: 60,
    height: 50,
    backgroundColor: 'black',
  },
  buttonOpenContainer: { position: 'absolute', right: 20, bottom: 20 },
  buttonClose: {
    marginRight: 10,
  },
  buttonSubmitContainer: {
    marginBottom: 60,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: '85%',
    width: '100%',
    backgroundColor: 'black',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  giveButton: {
    paddingLeft: 140,
    paddingRight: 140,
    height: 50,
    backgroundColor: 'white',
    color: 'black',
  },
  textPrimary: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
  input: {
    color: '#a49380',
  },
  label: {
    color: '#a49380',
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#a49380',
    height: 50,
  },
  inputMessageContainer: {
    borderWidth: 1,
    borderColor: '#a49380',
    height: 110,
  },
})
