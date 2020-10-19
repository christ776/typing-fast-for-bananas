import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { timeOver } from 'src/app/wordsSlice'
import '../styles/index.css'

const Timer: React.FC = () => {
    const [time, setTime] = useState(60)
    const dispatch = useDispatch()
    const counter = new Date(time * 1000).toISOString().substr(14, 5)

    useEffect(() => {
        const timer = setInterval(() => {
            if (time === 0) {
                dispatch(timeOver())
            } else {
                setTime(time - 1)
            }
        }, 1000)
        return () => clearInterval(timer)
    })

    return (
        <div className="small-container">
            <div className="timer">{counter}</div>
        </div>
    )
}

export default Timer
