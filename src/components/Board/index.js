import React, { useRef, useState } from "react";
import Squares from "../Squares";
import gameOver from "../../helpers/gameOver";
import "./index.css";

function Board() {
    const [board, setBoard] = useState({
        squares: Array(9).fill(""),
        turn: false,
    });
    const [isGameOver, setIsGameOver] = useState(false);
    const boardContainer = useRef(null);

    function handleClick(e) {
        const squares = board.squares.map((square) => square);
        const activeSquare = e.target.dataset.square;

        if (squares[activeSquare]) return;
        squares[activeSquare] = board.turn ? "X" : "O";

        if (gameOver(squares)) {
            setIsGameOver(true);
            boardContainer.current.style.pointerEvents = "none";
        }

        setBoard({
            squares: squares,
            turn: !board.turn,
        });
    }

    function reset() {
        setBoard({
            squares: board.squares.map((element) => (element = "")),
            turn: false,
        });
        setIsGameOver(false);
        boardContainer.current.style.pointerEvents = "auto";
    }

    return (
        <main>
            <div className="wrapper">
                <h1>Tic Tac Toe</h1>
                {isGameOver ? (
                    <h3>Player {board.turn ? "O" : "X"} Won</h3>
                ) : !isGameOver && board.squares.every((e) => e !== "") ? (
                    <h3>Its a draw</h3>
                ) : (
                    <h3>{!board.turn ? "O" : "X"} Turn</h3>
                )}
                <div className="container" ref={boardContainer}>
                    {board.squares.map((e, i) => (
                        <Squares
                            value={board.squares[i]}
                            square={i}
                            key={i}
                            handleClick={handleClick}
                        />
                    ))}
                </div>
                <button className="reset" onClick={reset}>
                    reset
                </button>
            </div>
        </main>
    );
}

export default Board;
