import { useState, useEffect } from 'react'

export const HighScores = () => {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false);
  let [users, setUsers] = useState([])

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.users)
        setIsLoaded(true)
      }, (err) => {
        setError(error)
      })
  }, [])

  const renderedBoard = users.map(i => 
    <tr key={i.id} >
      <td>{i.name}</td>
      <td>{i.moves}</td>
    </tr>
    )

  return (
    <div className="flex flex-col">
     {error && <p>{error}</p>}
     {isLoaded === true && 
     <table>
       <tr>
         <th>Name</th>
         <th>Moves</th>
       </tr>
       {renderedBoard}
      </table>
     }
    </div>
  )
}