import React from 'react'
import WelcomeScreen from 'components/WelcomeScreen'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import rootReducer from './app/reducers'

const store = configureStore({
    reducer: rootReducer
})

const App: React.FC = () => (
    <Provider store={store}>
        <WelcomeScreen />
    </Provider>
)

export default App
