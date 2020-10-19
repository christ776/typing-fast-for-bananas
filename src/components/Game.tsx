import React, { ChangeEvent, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from 'src/app/reducers'
import Timer from './Timer'
import Score from 'components/Score'
import Words from 'components/Words'
import WelcomeScreen from './Welcome'

import keyboardImg from 'assets/Hackathon_Keyboard.png'
import '../styles/index.css'
import { restartGame } from 'src/app/wordsSlice'

const Game: React.FC = () => {
    const [currentInputValue, setCurrentInputValue] = useState('')
    const { showWelcomeScreen, showGameOverScreen } = useSelector((state: RootState) => ({
        showWelcomeScreen: state.gameState.showWelcomeScreen,
        showGameOverScreen: state.gameState.showGameOverScreen
    }))
    const dispatch = useDispatch()
    const ref = useRef<HTMLInputElement>()
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setCurrentInputValue(event.target.value)
    }

    const playAgainHandler = () => {
        dispatch(restartGame())
    }

    const resetInputField = () => {
        ref.current.value = ''
    }

    const gameScreen = (
        <div className="border">
            <div className="container">
                <Timer />
                <Score />
            </div>
            <Words resetInputField={resetInputField} currentInputValue={currentInputValue} />
            <div className="keyboard-container">
                <div className="pepe">
                    <img className="keyboard" src={keyboardImg} />
                    <input ref={ref} className="input-box" onChange={onChangeHandler} />
                </div>
            </div>
        </div>
    )

    const gameOverScreen = (
        <div className="game-over">
            <button className="play-again-button" onClick={playAgainHandler}></button>
        </div>
    )

    return showWelcomeScreen ? (
        <div className="border">
            <WelcomeScreen />
        </div>
    ) : showGameOverScreen ? (
        gameOverScreen
    ) : (
        gameScreen
    )
}

export default Game
