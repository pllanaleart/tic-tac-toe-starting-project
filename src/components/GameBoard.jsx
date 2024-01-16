import { useState } from "react";

function GameBoard({ selectActivePlayer, board }) {
  // let gameBoard = initialGameBoard;
  // for (const turn of turns) {
  //   const { square, player } = turn;
  //   const { row, col } = square;
  //   gameBoard[row][col] = player;
  // }
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleSelectSquare(row, column) {
  //   setGameBoard((lastGameBoard) => {
  //     const updatedBoard = [
  //       ...lastGameBoard.map((innerArray) => [...innerArray]),
  //     ];
  //     updatedBoard[row][column] = activePlayerSymbol;
  //     return updatedBoard;
  //   });
  //   selectActivePlayer();
  // }
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((userSymbol, userSymbolIndex) => (
              <li key={userSymbolIndex}>
                <button
                  onClick={() => selectActivePlayer(rowIndex, userSymbolIndex)}
                  disabled={userSymbol !== null}
                >
                  {userSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default GameBoard;
