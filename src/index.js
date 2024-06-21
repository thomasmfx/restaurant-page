import './style.css';
import { paintBtn, removeBtnsPaint } from './domManipulation.js';
import showHomeTab from './tabs/home.js';
import showMenuTab from './tabs/menu.js';
import showContactTab from './tabs/contact.js';
import showAboutTab from './tabs/about';

const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const contactBtn = document.querySelector('#contact');
const aboutBtn = document.querySelector('#about');

window.onload = paintBtn(homeBtn), showHomeTab();

homeBtn.addEventListener('click', () =>{
    showHomeTab();
    removeBtnsPaint();
    paintBtn(homeBtn);
});

menuBtn.addEventListener('click', () => {
    showMenuTab();
    removeBtnsPaint();
    paintBtn(menuBtn);
});

contactBtn.addEventListener('click', () => {
    removeBtnsPaint();
    paintBtn(contactBtn);
    showContactTab();
});

aboutBtn.addEventListener('click', () => {
    removeBtnsPaint();
    paintBtn(aboutBtn);
    showAboutTab();
});

