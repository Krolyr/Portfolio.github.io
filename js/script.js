window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    //Menu

    let hamburger = document.querySelector('.promo__hamburger'),
        menu = document.querySelector('.promo__nav'),
        menuItem = document.querySelectorAll('.promo__menu-item');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('promo__hamburger-active');
        menu.classList.toggle('promo__nav-active');
    });

    //Modal

    let modalBtn = document.querySelectorAll('.button'),
        overlay = document.querySelector('.overlay'),
        modalClose = document.querySelector('.modal__close'),
        contactMenuLink = document.querySelector('.contactLink');


    for (let i = 0; i < modalBtn.length; i++) {
        modalBtn[i].addEventListener('click', function() {
            overlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    }

    contactMenuLink.addEventListener('click', function() {
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
        hamburger.classList.toggle('promo__hamburger-active');
        menu.classList.toggle('promo__nav-active');
    });

    modalClose.addEventListener('click', function() {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
    });
});