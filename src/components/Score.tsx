import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'src/app/reducers'
import '../styles/index.css'

const Score: React.FC = () => {
    const score = useSelector((state: RootState) => state.gameState.points)
    return <div className="small-container score-board">{score} points</div>
}

export default Score
