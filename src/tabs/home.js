import {
    createElement,
    createElementWithId,
    createElementWithClass,
    createImgWithSrc,
    removeCurrentTab
} from '../domManipulation.js';

const container = document.querySelector('#container');

export default function showHomeTab() {
    const content = createElementWithClass('div', 'content');
    if(content.id !== 'home-tab') {
        removeCurrentTab();
        content.appendChild(createElementWithId('h1', 'heading', 'Soul Coffee'));
        content.id = 'home-tab';

        content.append(firstSection(), secondSection());
        container.appendChild(content);
    };
};

function firstSection() {
    const textOne = "At Soul Coffee, we pride ourselves on offering an unparalleled coffee experience. Our beans are meticulously selected from the finest growers around the world, ensuring that each sip is a testament to excellence. We believe that true luxury lies in the details, and our commitment to quality is unwavering.";
    
    const row = createElementWithClass('div', 'row');
    const sideTextDiv = createElementWithClass('div', 'text');
    const sideTextPara = createElement('p', textOne);
    const sideTextHeading = createElement('h2', 'Pure Elegance in Every Sip');
    const img = createImgWithSrc('../assets/home/first_image.jpg');

    sideTextDiv.appendChild(sideTextHeading);
    sideTextDiv.appendChild(sideTextPara);
    
    row.appendChild(sideTextDiv);
    row.appendChild(img);

    return row;
};

function secondSection() {
    const textTwo = "We believe that coffee is best enjoyed with good company. Whether you're catching up with friends, having a heart-to-heart conversation, or simply sharing a moment of laughter, our cozy environment is the perfect backdrop for creating lasting memories.";

    const row = createElementWithClass('div', 'row');
    const sideTextDiv = createElementWithClass('div', 'text');
    const sideTextPara = createElement('p', textTwo);
    const sideTextHeading = createElement('h2', 'More Enjoyable with Friends');
    const img = createImgWithSrc('../assets/home/second_image.jpg');

    sideTextDiv.appendChild(sideTextHeading);
    sideTextDiv.appendChild(sideTextPara);
    
    row.appendChild(img);
    row.appendChild(sideTextDiv);

    return row;
};