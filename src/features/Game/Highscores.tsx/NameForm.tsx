import { useState } from "react"
import { useAppSelector, useAppDispatch } from '../../../app/hooks'
import { addPlayerData } from '../../Game/gameSlice'


export const NameForm = (props: any) => {
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
        <button className="py-2 px-4 bg-gray-200 w-36
        text-gray-600 font-semibold rounded-lg 
        shadow-md hover:bg-gray-300 focus:outline-none 
        focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75 m-1" onClick={() => handleClick()}>Submit</button>
      </div>
  )
}