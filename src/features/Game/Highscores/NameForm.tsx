import { useState } from "react"
import { useAppSelector, useAppDispatch } from '../../../app/hooks'
import { addPlayerData } from '../gameSlice'


export const NameForm = (props: {hideForm: any}) => {
  const [playerName, setPlayerName] = useState("")

  const dispatch = useAppDispatch()
  const playerScore = useAppSelector(state => state.cpuShips.numAttacks)

  const handleClick = () => {
    dispatch(addPlayerData({name: playerName, moves: playerScore}))
    props.hideForm();
  }

  return (
    <div>
        <label>Your name:</label>
        <input className="border px-1" value={playerName} onChange={(e) => setPlayerName(e.target.value)}/>
        <button 
        className="header-btn text-gray-600 hover:bg-gray-300 focus:ring-gray-500" 
        onClick={() => handleClick()}>Submit</button>
      </div>
  )
}