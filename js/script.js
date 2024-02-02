let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.menu');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');

    navbar.classList.toggle('menu');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

