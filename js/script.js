// $(document).ready(function() {
//     $('.header__burger').click(function(event) {
//         $('.header__burger,.header__menu').toggleClass('active');
//     });
// });

let block = document.querySelector('.header__burger');
let block1 = document.querySelector('.header__menu');

block.addEventListener('click', ()=> {
    block.classList.toggle('active')
    block1.classList.toggle('active')
})