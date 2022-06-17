// Hamburger Menu

const btnHamburger = document.querySelector('#btnHamburger');
const overlay = document.querySelector('#overlay');
const nav_menu = document.querySelector('#nav_menu');
btnHamburger.addEventListener('click',function(){
    console.log('click hamburger');

    if (btnHamburger.classList.contains('open')){
        btnHamburger.classList.remove('open');
        overlay.classList.remove('overlay');
       
    }
    else{
        btnHamburger.classList.add('open');
        overlay.classList.add('overlay',);
    }

    if (nav_menu.classList.contains('header__nav-b')){
        nav_menu.classList.remove('header__nav-b');
        nav_menu.classList.add('header__nav-a');
    }
    else{
        nav_menu.classList.remove('header__nav-a');
        nav_menu.classList.add('header__nav-b');
    }


})
