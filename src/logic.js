
export function checkPosition(board) {

    for(let i = 0; i < 6; i++) {
        
        for(let j = 0; j < 6; j++) {
            if( 
                ((i === 5) && !(board[i][j].value)) 
                ||
                ((i !== 5) && (board[i + 1][j].value) && !(board[i][j].value))
            ) {
                board[i][j].position = true;
            } else {
                board[i][j].position = false;
            }
        }
    
    }

    return board;

}

export function checkWinner(board) {

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length - 3; j++) {

            if (board[i][j].value !== null &&
                board[i][j].value === board[i][j + 1].value &&
                board[i][j].value === board[i][j + 2].value &&
                board[i][j].value === board[i][j + 3].value) {
                return true;
            }
        }
    }
        
    for (let i = 0; i < board.length - 3; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j].value !== null &&
                board[i][j].value === board[i + 1][j].value &&
                board[i][j].value === board[i + 2][j].value &&
                board[i][j].value === board[i + 3][j].value) {
                return true;
            }
        }
    }

    for (let i = 0; i < board.length - 3; i++) {
        for (let j = 0; j < board[i].length - 3; j++) {
            if (board[i][j].value !== null &&
                board[i][j].value === board[i + 1][j + 1].value &&
                board[i][j].value === board[i + 2][j + 2].value &&
                board[i][j].value === board[i + 3][j + 3].value) {
                return true;
            }
        }
    }

    for (let i = 3; i < board.length; i++) {
        for (let j = 0; j < board[i].length - 3; j++) {
            if (board[i][j].value !== null &&
                board[i][j].value === board[i - 1][j + 1].value &&
                board[i][j].value === board[i - 2][j + 2].value &&
                board[i][j].value === board[i - 3][j + 3].value) {
                return true;
            }
        }
    }

    return false;
}

export function endGame(board) {
    const newBoard = board.map(row => {
        return row.map( square => {
            square.position = false;
            return square;
        } )
    });

    return newBoard;
}

export function checkEndGame(board) {
    let newBoard = [];

    board.forEach(row => {
        newBoard = newBoard.concat(row);
    });


    return newBoard.every( square => !square.position );
}