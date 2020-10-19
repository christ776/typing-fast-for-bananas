import { createSlice } from '@reduxjs/toolkit'
import { generateWords } from 'src/utils/word.generation'

export const slice = createSlice({
    name: 'wordsToType',
    initialState: {
        wordsToType: generateWords(),
        points: 0,
        wordsTypedOK: 0,
        gameIsRunning: false,
        showWelcomeScreen: true,
        showGameOverScreen: false
    },

    reducers: {
        typeWordSuccessfully: (state) => {
            state.wordsToType.shift()
            state.points += 100
            if (state.wordsToType.length === 0) {
                state.showGameOverScreen = true
                state.gameIsRunning = false
            }
        },
        timeOver: (state) => {
            state.gameIsRunning = false
            state.showGameOverScreen = true
        },
        startGame: (state) => {
            state.showWelcomeScreen = false
            state.gameIsRunning = true
        }
    }
})

export const { typeWordSuccessfully, startGame, timeOver } = slice.actions

export default slice.reducer
