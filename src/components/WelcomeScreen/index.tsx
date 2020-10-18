import React, { ChangeEvent, useRef, useState } from 'react'
import Timer from '../Timer'
import Score from 'components/Score'
import Words from 'components/Words'
import keyboardImg from 'assets/Hackathon_Keyboard.png'
import headerImg from 'assets/Hackathon_Header.png'

import '../../styles/index.css'

const WelcomeScreen: React.FC = () => {
    const [currentInputValue, setCurrentInputValue] = useState('')
    const ref = useRef<HTMLInputElement>()
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setCurrentInputValue(event.target.value)
    }

    const resetInputField = () => {
        ref.current.value = ''
    }

    return (
        <>
            <img className="header" src={headerImg} />
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
        </>
    )
}

export default WelcomeScreen
