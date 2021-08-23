import * as React from 'react';
import './App.css';
import { CPUShips } from './features/cpuBoard/CPUShips';
import { Header } from './features/Game/Header'
import { PlayerShips } from './features/playerBoard/PlayerShips';

function App() {
  return (
    <div 
    className="flex flex-col justify-center items-center text-center"
    >
      <Header />
      <div className="flex flex-col sm:flex-row">
      <CPUShips />
      <PlayerShips />
      </div>
    </div>
  );
}

export default App;
