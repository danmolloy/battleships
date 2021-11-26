import { fireEvent, getByText } from '@testing-library/react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils"
import App from '../../../App';
import { Provider } from 'react-redux';
import pretty from 'pretty';
import { configureStore } from '@reduxjs/toolkit';
import cpuShipsReducer, { resetCPUBoard } from '../../cpuBoard/cpuShipsSlice'
import playerShipsReducer from '../../playerBoard/playerShipsSlice'
import gameReducer, { addPlayerData } from '../../Game/gameSlice'
import { instructionsContent } from '../Instructions/InstructionsContent'
import { makeServer } from '../../../Server'

jest.spyOn(window, 'alert').mockImplementation(() => {});

let container: any = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove();
  container = null;
});

describe("App", () => {

  it('renders app without error', () => {
    act(() => {
      render(
      <Provider store={configureStore({
        reducer: {
          game: gameReducer,
          cpuShips: cpuShipsReducer,
          playerShips: playerShipsReducer
        }
      })}>
        <App />
      </Provider>, container)
    })
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  })

  it('handles Start button click', () => {
    act(() => {
      render( 
        <Provider store={configureStore({
          reducer: {
            game: gameReducer,
            cpuShips: cpuShipsReducer,
            playerShips: playerShipsReducer
          }
        })}>
          <App />
        </Provider>, container
      )
    })
    fireEvent.click(getByText(container, "Start"));

    expect(container.querySelector("#cpu-board-inner").textContent.length).toBe(0);
    expect(container.querySelector("#cpu-board-inner").textContent).not.toMatch(/•/g);

    expect(pretty(container.querySelector("#CPU-board").innerHTML)).toMatchSnapshot();

    expect(container.querySelector("#player-board-inner").textContent.length).toBe(17);
    expect(container.querySelector("#player-board-inner").textContent).toMatch(/^•{17}$/);
    expect(pretty(container.querySelector("#Player-board").innerHTML)).toMatchSnapshot();

    expect(container.textContent).toMatch(/Player turn/);
    expect(container.querySelector("#status-btn").textContent).toMatch(/^Reset$/)
  })

  it("handles player turn and makes CPU turn", async () => {
    act(() => {
      render( 
        <Provider store={configureStore({
          reducer: {
            game: gameReducer,
            cpuShips: cpuShipsReducer,
            playerShips: playerShipsReducer
          }
        })}>
          <App />
        </Provider>, container
      )
    })

    fireEvent.click(getByText(container, "Start"));
    let randInt = Math.floor(Math.random() * 100)

    await act(async () => {
      fireEvent.click(container.querySelector("#cpu-board-inner").children[randInt])
      await new Promise(resolve => setTimeout(resolve, 100))
    })
    
    expect(container.querySelector("#cpu-board-inner").children[randInt].textContent).toMatch(/^[OX]$/)
    expect(container.querySelector("#Player-board").textContent).toMatch(/Attack count: 1/g)
    expect(container.textContent).toMatch(/CPU turn/g)
    
    await act(async() => {
      await new Promise(resolve => setTimeout(resolve, 1000))
    })
    expect(container.querySelector("#player-board-inner").textContent).toMatch(/^•*[OX]•*$/)
    expect(container.textContent).toMatch(/Player turn/g)
    expect(container.querySelector("#CPU-board").textContent).toMatch(/Attack count: 1/g)
  })


  it("calls reload on Reset button click", () => {
    Object.defineProperty(window, 'location', {
      value: { reload: jest.fn() }
    });
    act(() => {
      render( 
        <Provider store={configureStore({
          reducer: {
            game: gameReducer,
            cpuShips: cpuShipsReducer,
            playerShips: playerShipsReducer
          }
        })}>
          <App />
        </Provider>, container
      )
    })
    act(() => {
      fireEvent.click(getByText(container, "Start"));
    })
    expect(container.textContent).toMatch(/Reset/g)
    act(() => {
      fireEvent.click(getByText(container, "Reset"));
    })
    expect(window.location.reload).toHaveBeenCalled();
    
  })

  it("renders instructions", () => {
    act(() => {
      render( 
        <Provider store={configureStore({
          reducer: {
            game: gameReducer,
            cpuShips: cpuShipsReducer,
            playerShips: playerShipsReducer
          }
        })}>
          <App />
        </Provider>, container
      )
    })
    act(() => {
      fireEvent.click(getByText(container, "Instructions"));
    })
    
    expect(container.textContent).toMatch(instructionsContent[0].text)
    expect(container.textContent).toMatch(/1\/6/g)

    act(() => {
      fireEvent.click(container.querySelector("#next-instruction-btn"))
    })
    expect(container.textContent).toMatch(instructionsContent[1].text.slice(0,20))
    expect(container.textContent).toMatch(/2\/6/g)

    act(() => {
      fireEvent.click(container.querySelector("#next-instruction-btn"))
    })
    expect(container.textContent).toMatch(instructionsContent[2].text.slice(0,20))
    expect(container.textContent).toMatch(/3\/6/g)

    act(() => {
      fireEvent.click(container.querySelector("#next-instruction-btn"))
    })
    expect(container.textContent).toMatch(instructionsContent[3].text.slice(0,20))
    expect(container.textContent).toMatch(/4\/6/g)

    act(() => {
      fireEvent.click(container.querySelector("#next-instruction-btn"))
    })
    expect(container.textContent).toMatch(instructionsContent[4].text.slice(0,20))
    expect(container.textContent).toMatch(/5\/6/g)

    act(() => {
      fireEvent.click(container.querySelector("#next-instruction-btn"))
    })
    expect(container.textContent).toMatch(instructionsContent[5].text.slice(0,20))
    expect(container.textContent).toMatch(/6\/6/g)
    act(() => {
      fireEvent.click(container.querySelector("#next-instruction-btn"))
    })
    expect(container.textContent).not.toMatch(/\/6/g)
  })

  it("fetches Highscores", async () => {
    makeServer({ environment: "test" })

    act(() => {
      render( 
        <Provider store={configureStore({
          reducer: {
            game: gameReducer,
            cpuShips: cpuShipsReducer,
            playerShips: playerShipsReducer
          }
        })}>
          <App />
        </Provider>, container
      )
    })

    await act(async () => {
      fireEvent.click(container.querySelector("#highscores-btn"))
      await new Promise(resolve => setTimeout(resolve, 1100))
    })
    expect(container.textContent).toMatch(/Kelly38Eoghan44Fiona45Ed48Dan49Jorge54/g);
    expect(container.textContent).toMatchSnapshot();
    
  })

  it("handles end of game without error", async() => {
    let store = configureStore({
      reducer: {
        game: gameReducer,
        cpuShips: cpuShipsReducer,
        playerShips: playerShipsReducer
      }
    })
    act(() => {
      render( 
        <Provider store={store}>
          <App />
        </Provider>, container
      )
    })

    act(() => {
      fireEvent.click(getByText(container, "Start"))
    })

    expect(store.getState().game.inGame).toBe("playing")

    await act(async() => {
      store.dispatch(resetCPUBoard())
      await new Promise(resolve => setTimeout(resolve, 1200))
    })

    expect(container.textContent).toMatch(/Kelly38Eoghan44Fiona45Ed48Dan49Jorge54/g);
    expect(container.textContent).toMatch(/Your name:Submit/g);
    expect(container.textContent).toMatch(/Ships Remaining: 0/g);

  })

  it("submits highscore", async () => {
    
    let store = configureStore({
      reducer: {
        game: gameReducer,
        cpuShips: cpuShipsReducer,
        playerShips: playerShipsReducer
      }
    })
    act(() => {
      render( 
        <Provider store={store}>
          <App />
        </Provider>, container
      )
    })

    act(() => {
      fireEvent.click(getByText(container, "Start"))
    })

    expect(store.getState().game.inGame).toBe("playing")

    await act(async() => {
      store.dispatch(resetCPUBoard())
      await new Promise(resolve => setTimeout(resolve, 1200))
    })

    expect(container.textContent).toMatch(/Kelly38Eoghan44Fiona45Ed48Dan49Jorge54Your name:Submit/g)

    await act(async () => {
      store.dispatch(addPlayerData({name: "Jest", moves: 100}))
      await new Promise(resolve => setTimeout(resolve, 1200))
    })
    expect(container.textContent).toMatch(/Jorge54Jest100/g)
  })

})