let iconCart = document.querySelector('.icon button');
let closeCart = document.querySelector('.close');
let body  = document.querySelector('body');
let cartTab = document.getElementsByClassName("cartTab");

body.classList.toggle('showCart');

iconCart.addEventListener('click', ()=>{

    body.classList.toggle('showCart');
});




closeCart.addEventListener('click', ()=>{

    body.classList.toggle('showCart');
})