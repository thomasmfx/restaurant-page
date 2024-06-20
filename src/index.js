import './style.css';
import showHomeTab from './home.js';
import { 
    paintBtn,
    removeBtnsPaint
} from './domManipulation.js';

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

menuBtn.addEventListener('click', () => {
    removeBtnsPaint();
    paintBtn(menuBtn);
    showHomeTab();
});

contactBtn.addEventListener('click', () => {
    removeBtnsPaint();
    paintBtn(contactBtn);
    // showContactTab();
});

aboutBtn.addEventListener('click', () => {
    removeBtnsPaint();
    paintBtn(aboutBtn);
    // showAboutTab();
});

