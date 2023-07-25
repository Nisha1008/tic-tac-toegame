import './App.css';
import MyButton from './components/MyButton';
import { useState } from 'react';

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function App() {
  const [xisNext, setXisNext] = useState(true);
  const [square, setSquare] = useState(Array(9).fill(null));
  function handleClick(i) {
    if (calculateWinner(square) || square[i]) {
      return;
    }
    const nextSquare = square.slice();

    if (xisNext) {
      nextSquare[i] = 'X';
    }
    else {
      nextSquare[i] = '0';
    }
    setSquare(nextSquare);
    setXisNext(!xisNext);
  }
  const winner = calculateWinner(square);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xisNext ? 'X' : 'O');
  }
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <MyButton value={square[0]} onSqureClick={() => handleClick(0)} />
        <MyButton value={square[1]} onSqureClick={() => handleClick(1)} />
        <MyButton value={square[2]} onSqureClick={() => handleClick(2)} />

      </div>
      <div className="board-row">
        <MyButton value={square[3]} onSqureClick={() => handleClick(3)} />
        <MyButton value={square[4]} onSqureClick={() => handleClick(4)} />
        <MyButton value={square[5]} onSqureClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <MyButton value={square[6]} onSqureClick={() => handleClick(6)} />
        <MyButton value={square[7]} onSqureClick={() => handleClick(7)} />
        <MyButton value={square[8]} onSqureClick={() => handleClick(8)} />
      </div>
    </>
  )
}

export default App;