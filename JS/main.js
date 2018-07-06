// try to get the board cell to flip back to white if the image is not there
// add remaining moves to html, css
// decrease the remaining moves by 1 
// work on hints 



// array of all images
const allImages = ['img/img1.jpeg','img/img2.jpeg', 'img/img3.jpeg', 'img/img4.jpeg', 'img/img5.jpeg', 'img/img6.jpeg', 'img/img7.jpeg', 'img/img8.jpeg', 'img/img9.jpeg', 'img/img10.jpeg', 'img/img11.jpeg', 'img/img12.jpeg', 'img/img13.jpeg', 'img/img14.jpeg', 'img/img15.jpeg']

// random 5 images from all images array
let gameImages = [];
for (let i = 0; i < 5; i += 1) {
    let arrayIndex = Math.floor(Math.random() * allImages.length)
    let imagePush = allImages[arrayIndex];
    allImages.splice(arrayIndex, 1);
    gameImages.push(imagePush);
}



// create cells in gameboard
let gameBoard = document.querySelector('.game-board');
for (let i = 0; i < 91; i += 1) {
    let gameCell = document.createElement('div');
    gameCell.className = 'cell';
    gameBoard.appendChild(gameCell);
    gameCell.dataset.name = i;
    let imgEl = document.createElement('img');
    gameCell.appendChild(imgEl);
    }

// add event listeners to each cell
const cell = document.querySelectorAll('.cell');
const img = document.querySelectorAll('img');


//create a random array of 5 indices and add images to them
let array = [0, 1, 2, 3, 4];
// while(array.length < 5) {
//     let randomNumber = Math.floor(Math.random() * 91) + 1;
//     if(array.indexOf(randomNumber) > -1) continue;
//     array[array.length] = randomNumber;
// }

for(let i = 0; i < array.length; i += 1) {
const imgEl = img[array[i]]
imgEl.src = gameImages[i]; 
imgEl.dataset.img = 1;
imgEl.style.width = '0px';
imgEl.style.height = '0px';
};

// gameBoard.addEventListener('click', (e)=> console.log(e.target.dataset.img))
let scoreEl = document.querySelector('.score');
let score = 25;
let imgWinner = 0;
// add winner or loser class to event listener
const winner = function() {
    if (score === 0) {
        document.body.classList.add('game-over');
    } else if (imgWinner === 5 && score > 0) {
        document.body.classList.add('winner');
}}

gameBoard.addEventListener('click', (e)=> {
    score -= 1
    scoreEl.innerHTML = score;
    const imgTarget = e.target.lastChild;
    if (imgTarget && imgTarget.dataset.img == 1) {
        imgTarget.style.width = '65px';
        imgTarget.style.height = '65px';
        imgWinner += 1;
        const imgEl = document.querySelectorAll('.images-search');
        for (let i = 0; i < imgEl.length; i += 1)
        if (imgEl[i].src === imgTarget.src) {
            imgEl[i].style.opacity = '0.3';
        }
    } else {
        e.target.style.background = '#838383';
    }
    winner();
})



// add images to the hidden images div

const hiddenImages = document.querySelector('.images');
for (let i = 0; i < 5; i += 1) {
    const imgEl = document.createElement('img');
    hiddenImages.appendChild(imgEl);
    imgEl.className = 'images-search';
    imgEl.src = gameImages[i];
}

