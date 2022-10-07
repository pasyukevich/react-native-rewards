import { createSlice } from '@reduxjs/toolkit'
import { rewardListMock } from '@/Mocks'

const feedDataSlice = createSlice({
  name: 'feedData',
  initialState: rewardListMock,
  reducers: {
    addRewardToFeed: (state, { payload }) => {
      return [payload, ...state]
    },
  },
})

export const { addRewardToFeed } = feedDataSlice.actions

export { feedDataSlice }
