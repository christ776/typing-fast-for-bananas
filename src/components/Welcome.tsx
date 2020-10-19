import React from 'react'
import { useDispatch } from 'react-redux'

import { startGame } from 'src/app/wordsSlice'

import titleScreenSrc from 'assets/Hackathon_Title_Screen-03.png'
import startSrc from 'assets/Hackathon_Start.png'
import '../styles/index.css'

const WelcomeScreen: React.FC = () => {
    const dispatch = useDispatch()
    const onClickHandler = () => {
        dispatch(startGame())
    }

    return (
        <div className="title-screen">
            <img src={titleScreenSrc} className="title-screen-background" alt="Title screen" />
            <input
                type="image"
                src={startSrc}
                alt="start"
                className="start-button"
                onClick={onClickHandler}
            />
        </div>
    )
}

export default WelcomeScreen
