import React, { ChangeEvent, useState } from 'react'
import Timer from '../Timer'
import Score from 'components/Score'
import Words from 'components/Words'

import { generateWords } from 'src/utils/word.generation'
import '../../styles/index.css'

const WelcomeScreen: React.FC = () => {
    const [currentInputValue, setCurrentInputValue] = useState('')
    const [wordsToType, setWordsToType] = useState(generateWords)
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        setCurrentInputValue(event.target.value)
    }

    return (
        <div className='container'>
            <Timer />
            <Score />
            <Words wordToType={wordsToType[0]} currentInputValue={currentInputValue} />
            <input type='text' className='input-box' onChange={onChangeHandler} />
        </div>
    )
}

export default WelcomeScreen
