// 900px board, 3px wide, 30 cells

let gameBoard = document.querySelector('.game-board');
gameBoard.addEventListener('click', (e)=> (e.target, e.currentTarget));
for (let i = 0; i < 91; i += 1) {
    let gameCell = document.createElement('div');
    gameCell.className = 'cell';
    gameBoard.appendChild(gameCell);
    gameCell.dataset.row = i;
    }


const cell = document.querySelectorAll('.cell');
for (let i = 0; i < 91; i += 1) {
    cell[i].addEventListener('click', function(e) {
    cell[i].style.backgroundColor = '#838383';
})}