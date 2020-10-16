import React, { useEffect, useState } from 'react'

import '../styles/index.css'

interface WordsProps {
    currentInputValue: string
    wordToType: string
}

interface SelectedWord {
    word: string
}

const Correct: React.FC<SelectedWord> = ({ word }) => {
    return <span className='correct'>{word}</span>
}
const Incorrect: React.FC<SelectedWord> = ({ word }) => {
    return <span className='incorrect'>{word}</span>
}

const Words: React.FC<WordsProps> = ({ currentInputValue, wordToType }) => {
    const [highlightedWords, sethighlightedWords] = useState([])

    useEffect(() => {
        const result: Array<JSX.Element> = []
        const b = [...wordToType]
        b.forEach((e, index) => {
            if (e === currentInputValue[index]) {
                result.push(<Correct word={e} />)
            } else {
                result.push(<Incorrect word={e} />)
            }
        })
        sethighlightedWords(result)
    }, [currentInputValue, wordToType])

    return <div className='words-challenge'>{highlightedWords}</div>
}

export default Words
