import { useState } from "react"
import { useAppSelector, useAppDispatch } from '../../../app/hooks'
import { addPlayerData } from '../gameSlice'


export const NameForm = (props: {hideForm: any}) => {
  const [playerName, setPlayerName] = useState("")

  const dispatch = useAppDispatch()
  const playerScore = useAppSelector(state => state.cpuShips.numAttacks)

  const handleChange = (e: any) => {
    setPlayerName(e.target.value)
  }

  const handleClick = () => {
    dispatch(addPlayerData({name: playerName, moves: playerScore}))
    props.hideForm();
  }

  return (
    <div id="score-form">
        <label>Your name:</label>
        <input id="score-input" className="border px-1" value={playerName} onChange={(e) => handleChange(e)}/>
        <button 
        className="header-btn bg-pink-600 text-white hover:bg-pink-700 focus:ring-pink-500" 
        onClick={() => handleClick()}>Submit</button>
      </div>
  )
}