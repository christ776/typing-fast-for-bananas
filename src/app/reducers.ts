import { combineReducers } from 'redux'
import wordsReducer from './wordsSlice'

const rootReducer = combineReducers({
    gameState: wordsReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
