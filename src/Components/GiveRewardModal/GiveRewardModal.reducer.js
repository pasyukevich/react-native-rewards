export const initialState = {
  recipientName: '',
  amount: '',
  message: '',
}

export const ACTIONS = {
  UPDATE_RECIPIENT_NAME: 'updateRecipientName',
  UPDATE_AMOUNT: 'updateAmount',
  UPDATE_MESSAGE: 'updateMessage',
  RESET: 'reset',
}

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_RECIPIENT_NAME:
      return {
        ...state,
        recipientName: action.payload,
      }
    case ACTIONS.UPDATE_AMOUNT:
      return {
        ...state,
        amount: action.payload,
      }
    case ACTIONS.UPDATE_MESSAGE:
      return {
        ...state,
        message: action.payload,
      }
    case ACTIONS.RESET:
      return {
        initialState,
      }
    default:
      return state
  }
}

// const [state, dispatch] = useReducer(reducer, initialState)

// const handleSubmit = e => {
//   e.preventDefault()
//   dispatch({
//     type: 'add',
//     payload: {
//       id: new Date().getTime(),
//       name: state.input,,
//     },,
//   })
// }

// const handleChange = e => {
//   dispatch({
//     type: 'input',
//     payload: e.target.value,,
//   })
// }
