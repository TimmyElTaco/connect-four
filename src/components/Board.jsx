import { useState } from "react";
import Square from "./Square"
import Winner from  "./Winner"
import { useEffect } from "react";
import { checkPosition, checkWinner, endGame, checkEndGame } from "../logic";
import { PLAYERS } from "../constants";
import confetti from "canvas-confetti";

export default () => {

    const [ turn, setTurn ] = useState(PLAYERS.R);
    
    const initialBoard = [];

    for (let i = 0; i < 6; i++) {
        const row = [];
        
        for (let j = 0; j < 6; j++) {
            row.push({ value: null, position: false });
        }
    
        initialBoard.push(row);
    }

    const [ winner, setWinner ] = useState(null);

    const [ board, setBoard ] = useState(initialBoard);

    function updateBoard(i, j) {
        if(board[i][j].position) {
            const newTurn = turn === PLAYERS.R ? PLAYERS.Y : PLAYERS.R;
            setTurn( newTurn );

            const newBoard = [...board];
            newBoard[i][j].value = turn;
            newBoard[i][j].position = false;

            setBoard( checkPosition( newBoard ) );

            if (checkWinner( newBoard )) {
                
                setWinner( turn );
                setBoard( endGame(newBoard) );
                confetti();

            } else if( checkEndGame(newBoard) ) {

                setBoard( endGame(newBoard) );
                setWinner( false );

            }
        }
    }

    function resetGame() {
        setTurn(PLAYERS.R);
        setWinner(null);
        setBoard(checkPosition(initialBoard));
    }

    useEffect( () => {
        checkPosition(board);
    }, [] );
    
    return (
        <>
            <div className="flex items-center gap-24 my-10">
                <button className="bg-slate-200 hover:bg-slate-400 duration-300 ease my-8 py-3 px-4 rounded-lg font-semibold " onClick={ resetGame }>Reset Game</button>
                <div className="grid grid-cols-6 grid-rows-6 gap-x-2 gap-y-2 w-96 h-96  bg-slate-400 p-6 rounded-2xl">
                    {
                        board.map( (square, i) => {
                            
                            return square.map( (_, j) => {
                                const index = (i + 1) * (j + 1);
                                return ( 
                                    <Square key={index} index1={i} index2={j} updateBoard={updateBoard} >{board[i][j].value}</Square>
                                )
                            } )
                            
                        } )
                    }
                </div>
                <Winner winner={winner} resetGame={resetGame} />
                <div className="my-10 text-slate-200 text-2xl">Turn: { turn }</div>
            </div>
        </>
    )
}