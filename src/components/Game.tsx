import React, { ChangeEvent, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'src/app/reducers'
import Timer from './Timer'
import Score from 'components/Score'
import Words from 'components/Words'
import WelcomeScreen from './Welcome'

import keyboardImg from 'assets/Hackathon_Keyboard.png'
import gameOverImgSrc from 'assets/Hackathon_KeyboardingOdyssey-12.png'
import '../styles/index.css'
// import headerImg from 'assets/Hackathon_Header.png'

const Game: React.FC = () => {
    const [currentInputValue, setCurrentInputValue] = useState('')
    const { showWelcomeScreen, showGameOverScreen } = useSelector((state: RootState) => ({
        showWelcomeScreen: state.gameState.showWelcomeScreen,
        showGameOverScreen: state.gameState.showGameOverScreen
    }))
    const ref = useRef<HTMLInputElement>()
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setCurrentInputValue(event.target.value)
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

    const gameOverScreen = <div className="game-over"></div>

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
