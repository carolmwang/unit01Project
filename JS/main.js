// 900px board, 3px wide, 30 cells

let gameBoard = document.querySelector('.game-board');
gameBoard.addEventListener('click', (e)=> console.log(e.target, e.currentTarget))
for (let i = 0; i < 91; i += 1) {
    let gameCell = document.createElement('div');
    gameCell.className = 'cell';
    gameBoard.appendChild(gameCell);
    gameCell.dataset.row = i;
    }


