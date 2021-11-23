import { useAppSelector } from '../../../app/hooks'


export const HighScores = () => {

  const scores = useAppSelector(state => state.game.highScores)


  return (
    <div className="flex flex-col m-4">
      <table>
       <tr>
         <th>Name</th>
         <th>Moves</th>
       </tr>
       {scores && scores.map((i: any) => 
        <tr key={i.id} >
          <td className="p-2 border-r">{i.name}</td>
          <td className="p-2">{i.moves}</td>
        </tr>)}
      </table>
    </div>
  )
}