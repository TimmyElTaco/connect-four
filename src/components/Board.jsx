import { useState } from "react";
import Square from "./Square"
import { useEffect } from "react";
import { checkPosition } from "../logic";
import { PLAYERS } from "../constants";

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

    const [ board, setBoard ] = useState(initialBoard);

    function updateBoard(i, j) {
        if(board[i][j].position) {
            setTurn( turn === PLAYERS.R ? PLAYERS.Y : PLAYERS.R );

            const newBoard = [...board];
            newBoard[i][j].value = turn;
            newBoard[i][j].position = false;
            console.log(newBoard)
            setBoard( checkPosition( newBoard ) );
        }
    }

    useEffect( () => {
        checkPosition(board);
    }, [] );
    
    return (
        <div className="grid grid-cols-6 grid-rows-6 gap-x-2 gap-y-2 w-96 h-96 mt-9 bg-slate-400 p-6 rounded-2xl">
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
    )
}