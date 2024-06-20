import './style.css';
import showHomeTab from './home.js';

const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const contactBtn = document.querySelector('#contact');
const aboutBtn = document.querySelector('#about');

window.onload = paintBtn(homeBtn), showHomeTab();

homeBtn.addEventListener('click', () =>{
    removeBtnsPaint();
    paintBtn(homeBtn);
    showHomeTab();
});



function paintBtn(btn) {
    btn.className = 'current-tab';
};

function removeBtnsPaint(){
    const btns = document.querySelectorAll('button');
    btns.forEach(btn => {
        btn.className = '';
    });
};
