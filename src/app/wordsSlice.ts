import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { generateWords } from 'src/utils/word.generation'

export const slice = createSlice({
    name: 'wordsToType',
    initialState: {
        wordsToType: generateWords(),
        points: 0,
        wordsTypedOK: 0,
        gameIsRunning: true
    },

    reducers: {
        typeWordSuccessfully: (state) => {
            state.wordsToType.shift()
            state.points += 100
        },
        timeOver: (state) => {
            state.gameIsRunning = false
        }
    }
})

export const { typeWordSuccessfully } = slice.actions

export default slice.reducer
