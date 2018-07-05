// 5 images need to be randomized around the board
// try to get the board cell to flip back to white if the image is not there
// add remaining moves to html, css
// decrease the remaining moves by 1 
// work on hints 

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


const allImages = ['../img/img1.jpeg','../img/img2.jpeg', '../img/img3.jpeg', '../img/img4.jpeg', '../img/img5.jpeg', '../img/img6.jpeg', '../img/img7.jpeg', '../img/img8.jpeg', '../img/img9.jpeg', '../img/img10.jpeg', '../img/img11.jpeg', '../img/img12.jpeg', '../img/img13.jpeg', '../img/img14.jpeg', '../img/img15.jpeg']


let gameImages = [];
for (let i = 0; i < 5; i += 1) {
    gameImages.push(allImages[Math.floor(Math.random()*allImages.length)]);
}
// need to remove from allImages so there are no repeats

