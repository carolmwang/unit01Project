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

// create cells in gameboard and add event listeners to the cell
let gameBoard = document.querySelector('.game-board');
for (let i = 0; i < 84; i += 1) {
    let gameCell = document.createElement('div');
    gameBoard.appendChild(gameCell);
    gameCell.dataset.name = i;
    gameCell.style.background = '#E2F2FF';
    gameCell.className = 'cell';
    let imgEl = document.createElement('img'); // adding image elements within div
    gameCell.appendChild(imgEl);
    imgEl.dataset.clicked = 'no';
    imgEl.dataset.img = '0';
    imgEl.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
    gameCell.addEventListener('click', (e)=> {
            if (e.target && e.target.dataset.img === '1') {
                e.target.style.opacity = 1;
                imgWinner += 1;
                const imgEl = document.querySelectorAll('.images-search');
                for (let i = 0; i < imgEl.length; i += 1)
                    if (imgEl[i].src === e.target.src) {
                    imgEl[i].style.opacity = '0.3';
                    }
            } else {
                e.target.style.background = '#A1B2BF';
            }
            if (e.target.dataset.clicked === 'no') {
                score -= 1;
                scoreEl.innerHTML = score;
                e.target.dataset.clicked = 'yes';
            } else {
                scoreEl.innerHTML = score;
            } 
            winner();
        })
}

//create a random array of 5 indices and add images to them
let array = [];
while(array.length < 5) {
    let randomNumber = Math.floor(Math.random() * 84);
    array[array.length] = randomNumber;
}

// add 5 hidden images to the img element
const img = document.querySelectorAll('img');
for(let i = 0; i < array.length; i += 1) {
    const imgEl = img[array[i]]
    imgEl.src = gameImages[i]; 
    imgEl.dataset.img = 1;
    imgEl.style.opacity = 0;    
};


let scoreEl = document.querySelector('.score');
let score = 30;
let imgWinner = 0;
// add winner or loser class to event listener
const winner = function() {
    if (score === 0) {
        document.body.classList.add('game-over');
    } else if (imgWinner === 5 && score > 0) {
        document.body.classList.add('winner');
    }}

// add images to the hidden images div (sidebar - images to find)

const hiddenImages = document.querySelector('.images');
for (let i = 0; i < 5; i += 1) {
    const imgEl = document.createElement('img');
    hiddenImages.appendChild(imgEl);
    imgEl.className = 'images-search';
    imgEl.src = gameImages[i];
}


// hint button

let hintArray = [];
const hint = document.querySelector('.hint-button');
hint.addEventListener('click', (e)=> {
    hintArray.shift();
    hintArray.shift();
    let hintNone = document.querySelectorAll("[data-img = '0']");
    for(i = 0; i < hintNone.length; i += 1){
    let randomArrayNumber = Math.floor(Math.random() * hintNone.length);
    if (hintNone[randomArrayNumber].dataset.clicked === 'no') {
        hintArray.push(randomArrayNumber);
        break;
    } 
    }
    let hintImages = document.querySelectorAll("[data-img = '1']");
    for(i = 0; i < hintImages.length; i += 1) {
    if (hintImages[i].dataset.clicked === 'no') {
        hintArray.push(parseInt(hintImages[i].parentNode.dataset.name));
        break;
    } 
    }   
    const cellHint = document.querySelector(`[data-name = '${hintArray[0]}']`);
    const cellHintTwo = document.querySelector(`[data-name = '${hintArray[1]}']`);
    cellHint.style.background = 'rgb(245, 245, 140)';
    cellHintTwo.style.background = 'rgb(245, 245, 140)';
})
