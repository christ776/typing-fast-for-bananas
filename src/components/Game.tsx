import React, { ChangeEvent, useRef, useState } from 'react'
import Timer from './Timer'
import Score from 'components/Score'
import Words from 'components/Words'
import keyboardImg from 'assets/Hackathon_Keyboard.png'
import headerImg from 'assets/Hackathon_Header.png'
import WelcomeScreen from './Welcome'

import '../styles/index.css'
import { useSelector } from 'react-redux'
import { RootState } from 'src/app/reducers'

const Game: React.FC = () => {
    const [currentInputValue, setCurrentInputValue] = useState('')
    const showWelcomeScreen = useSelector((state: RootState) => state.gameState.showWelcomeScreen)
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

    return showWelcomeScreen ? (
        <div className="border">
            <WelcomeScreen />
        </div>
    ) : (
        gameScreen
    )
}

export default Game
