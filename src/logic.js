
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