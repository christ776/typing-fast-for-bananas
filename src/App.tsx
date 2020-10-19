import React from 'react'
import Game from 'components/Game'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import rootReducer from './app/reducers'

const store = configureStore({
    reducer: rootReducer
})

const App: React.FC = () => (
    <Provider store={store}>
        <Game />
    </Provider>
)

export default App
