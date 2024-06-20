import {
    createElement,
    createElementWithId,
    createElementWithClass,
    createImgWithSrc
} from './domManipulation.js';

const contentDiv = document.querySelector('#content');
const card = createElementWithId('div', 'card');
card.appendChild(createElementWithId('h1', 'home-heading', 'Soul Coffee'));

function showHomeTab() {
    // if(!contentDiv.firstElementChild) {
        if(contentDiv.className !== 'homeTab') {
            contentDiv.className = 'homeTab';
            firstSection();
            secondSection();
        };
    // };
};

function firstSection() {
    const textOne = "At Soul Coffee, we pride ourselves on offering an unparalleled coffee experience. Our beans are meticulously selected from the finest growers around the world, ensuring that each sip is a testament to excellence. We believe that true luxury lies in the details, and our commitment to quality is unwavering.";
    
    const row = createElementWithClass('div', 'row');
    const sideTextDiv = createElementWithClass('div', 'text');
    const sideTextPara = createElement('p', textOne);
    const sideTextHeading = createElement('h2', 'Pure Elegance in Every Sip');
    const img = createImgWithSrc('../assets/coffee_beans.jpg');

    sideTextDiv.appendChild(sideTextHeading);
    sideTextDiv.appendChild(sideTextPara);
    
    row.appendChild(sideTextDiv);
    row.appendChild(img);
    
    card.appendChild(row);
    contentDiv.append(card);
};

function secondSection() {
    const textTwo = "We believe that coffee is best enjoyed with good company. Whether you're catching up with friends, having a heart-to-heart conversation, or simply sharing a moment of laughter, our cozy environment is the perfect backdrop for creating lasting memories.";

    const row = createElementWithClass('div', 'row');
    const sideTextDiv = createElementWithClass('div', 'text');
    const sideTextPara = createElement('p', textTwo);
    const sideTextHeading = createElement('h2', 'More Enjoyable with Friends');
    const img = createImgWithSrc('../assets/three_coffees.jpg');

    sideTextDiv.appendChild(sideTextHeading);
    sideTextDiv.appendChild(sideTextPara);
    
    row.appendChild(img);
    row.appendChild(sideTextDiv);
    
    card.appendChild(row);
    contentDiv.append(card);
};

export default showHomeTab;