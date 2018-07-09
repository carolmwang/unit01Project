// hidden instructions function

// const instructionsEl = document.querySelector('.instructions');
// instructionsEl.addEventListener('click', (e) => {
//     document.body.classList.add('instruction-show');
// })

const modal = document.querySelector('#myModal');
const button = document.querySelector('.instructions');
const close = document.querySelector('.close');

button.addEventListener('click', function() {
    modal.style.display = 'block';
})

close.addEventListener('click', function() {
    modal.style.display = 'none';
})

window.addEventListener('click', function(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
 })