import 'react-native-gesture-handler'
import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store, persistor } from '@/Store'
import { PeerRewards } from '@/Screens'

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <PeerRewards />
    </PersistGate>
  </Provider>
)

export default App
