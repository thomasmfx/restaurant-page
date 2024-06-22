import {
    createElement,
    createElementWithId,
    createElementWithClass,
    createImgWithSrc,
    removeCurrentTab
} from '../domManipulation.js';
import expressoImg from '../../assets/menu/expresso_coffee.jpg';
import latteImg from '../../assets/menu/latte_coffee.jpg';
import chocoImg from '../../assets/menu/special_hot_chocolate.jpg';
import takeawayImg from '../../assets/menu/takeaway_coffee.jpg';

const container = document.querySelector('#container');

export default function showMenuTab() {
    const content = createElementWithClass('div', 'content');
    if(content.id !== 'menu-tab') {
        removeCurrentTab();
        content.appendChild(createElementWithId('h1', 'heading', 'Soul Coffee'));
        content.id = 'menu-tab';
        content.append(
            createItem('Expresso', '$3', expressoImg),
            createItem('Latte', '$7', latteImg),
            createItem('Special Hot Chocolate', '$10', chocoImg),
            createItem('Takeaway Coffee', '$5', takeawayImg)
        );
        container.appendChild(content);
    }
};

function createItem(name, price, imgSrc) {
    const itemPlaceholder = createElementWithClass('div', 'menu-item');
    const labelDiv = createElementWithClass('div', 'label');
    const img = createImgWithSrc(`${imgSrc}`);
    const coffeeName = createElement('p');
    coffeeName.textContent = name;
    const coffeePrice = createElement('span');
    coffeePrice.textContent = price;

    labelDiv.append(coffeeName, coffeePrice);
    itemPlaceholder.append(img, labelDiv);

    return itemPlaceholder;
};



