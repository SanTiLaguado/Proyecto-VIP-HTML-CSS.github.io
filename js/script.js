let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.menu');

menu.onclick = () =>{
    menu.classList.toggle('bars');

    navbar.classList.toggle('menu');
}

window.onscroll = () =>{
    menu.classList.remove('bars');
    navbar.classList.remove('active');
};
