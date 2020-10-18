import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { typeWordSuccessfully } from 'src/app/wordsSlice'
import { RootState } from '../app/reducers'

import '../styles/index.css'
import leafImg from '../assets/Hackathon_Leaf.png'

interface WordsProps {
    currentInputValue: string
    resetInputField: () => void
}

interface SelectedWord {
    word: string
}

const Correct: React.FC<SelectedWord> = ({ word }) => {
    return <span className="correct">{word}</span>
}
const Incorrect: React.FC<SelectedWord> = ({ word }) => {
    return <span className="incorrect">{word}</span>
}

const Words: React.FC<WordsProps> = ({ currentInputValue, resetInputField }) => {
    const [highlightedWords, sethighlightedWords] = useState([])
    const dispatch = useDispatch()
    const wordToType = useSelector((state: RootState) => state.gameState.wordsToType[0])

    useEffect(() => {
        const result: Array<JSX.Element> = []
        let letterMismatch = false

        if (currentInputValue === '') {
            sethighlightedWords([...wordToType])
        } else {
            const b = [...wordToType]
            b.forEach((e, index) => {
                if (e === currentInputValue[index]) {
                    result.push(<Correct word={e} />)
                } else {
                    letterMismatch = true
                    result.push(<Incorrect word={e} />)
                }
            })
            sethighlightedWords(result)

            if (!letterMismatch) {
                resetInputField()
                dispatch(typeWordSuccessfully())
            }
        }
    }, [currentInputValue, wordToType])

    return (
        <div className="leaf-container">
            <img className="leaf" src={leafImg} alt="leaf" />
            <div className="words-challenge">{highlightedWords}</div>
        </div>
    )
}

export default Words
