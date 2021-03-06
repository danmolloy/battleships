import { useState } from "react"
import { instructionsContent } from "./InstructionsContent"

export const Instructions = (props: {close: any}) => {
  const [pageNumber, setPageNumber] = useState(1)

  const handleClick = () => {
    pageNumber < instructionsContent.length
    ? setPageNumber(pageNumber + 1)
    : props.close()
  }

  const renderedInstructions = instructionsContent.map((i: {key: number, text: string}) => 
  <p className="p-2" key={i.key}>{i.text.split('\n')}</p>)

  return (
    <div className="instructions-window">
      <div className="flex flex-row items-end self-end w-full p-2">
        <h2 className="self-center w-3/4">Instructions</h2>
        <p className="w-1/4">{`${pageNumber}/${instructionsContent.length}`}</p>
      </div>
      <div className="my-4">
      {renderedInstructions[pageNumber - 1]}
      </div>
      <div className="flex flex-row justify-end w-full">
        <button id="next-instruction-btn" onClick={() => handleClick()} className="self-end text-blue-500 hover:text-blue-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </div>
  )
}