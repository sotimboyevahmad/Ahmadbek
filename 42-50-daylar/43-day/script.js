const ratings = document.querySelectorAll('.rating')
const ratingsContainer = document.querySelectorAll('.ratings-container')
const sendBtn = document.querySelectorAll('#send')
const panel = document.querySelectorAll('#panel')
let selectedRating = 'Satisfied'

ratingsContainer.addEventListener('click', () => {
    if(e.target.parentNodeclassList.contains('rating')) {
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerHtML
    }
})

sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support<p>
    `
})

function removeActive() {
    for(let i = 0; i < ratings.length; i++ ) {
        ratings[i].classList.remove('active')
    }
}