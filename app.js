let Sign_btn = document.querySelector('#Sign-btn');
let block = document.querySelector('.block');
let About = document.querySelector('#About');
Sign_btn.addEventListener('click',function(){
block.classList.remove('block')
About.style.display = 'none'
});