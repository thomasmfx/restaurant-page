import './style.css';
import showHomeTab from './home.js';

window.onload = showHomeTab();

const homeBtn = document.querySelector('#home');
homeBtn.addEventListener('click', () =>{
    showHomeTab();
});


