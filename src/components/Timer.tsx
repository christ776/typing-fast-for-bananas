import React, { useEffect, useState } from 'react'
import '../styles/index.css'

const Timer: React.FC = () => {
    const [time, setTime] = useState(60)
    const counter = new Date(time * 1000).toISOString().substr(11, 8)

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(time - 1)
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
