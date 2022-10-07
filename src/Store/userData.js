import { createSlice } from '@reduxjs/toolkit'
import { userDataMock } from '@/Mocks'

const userDataSlice = createSlice({
  name: 'userData',
  initialState: {
    name: userDataMock.name,
    receivedAmount: userDataMock.receivedAmount,
    givenAmount: userDataMock.givenAmount,
    photoUrl: userDataMock.photoUrl,
  },
  reducers: {
    incrementUserReceivedAmount: (state, { payload }) => {
      state.givenAmount = state.givenAmount + payload
    },
  },
})

export const { incrementUserReceivedAmount } = userDataSlice.actions

export { userDataSlice }
