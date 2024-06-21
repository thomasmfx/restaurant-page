import {
    createElement,
    createElementWithId,
    createElementWithClass,
    removeCurrentTab
} from '../domManipulation.js';

const container = document.querySelector('#container');
const wrapper = createElementWithId('div', 'about-wrapper');

wrapper.append(
    createElement('h2', 'Our Story'),
    createElement('p', 'Welcome to Soul Coffee, where every cup tells a story and every meal is a soulful journey. Our story began in the heart of the city, where a small group of coffee enthusiasts and food lovers came together with a dream to create a unique space where people could enjoy not just great coffee, but also a warm and welcoming atmosphere.'),
    createElement('h2', 'Our Beggining'),
    createElement('p', 'It all started in 2010, when our founder, Anna Mitchell, decided to turn her lifelong passion for coffee and culinary arts into a reality. Inspired by the vibrant coffee culture she experienced during her travels around the world, Anna envisioned a place that combined the rich, aromatic flavors of freshly brewed coffee with a menu of delicious, homemade dishes.'),
    createElement('h2', 'Our Mission'),
    createElement('p', 'At Soul Coffee, our mission is to create a sanctuary for coffee lovers and foodies alike. We believe that a good cup of coffee can bring people together, spark conversations, and create lasting memories. Our team is dedicated to sourcing the finest coffee beans from sustainable farms and roasting them to perfection, ensuring that every sip is a delight to the senses.')
);

export default function showAboutTab() {
    const content = createElementWithClass('div', 'content');
    if(content.id !== 'about-tab') {
        removeCurrentTab();
        content.appendChild(createElementWithId('h1', 'heading', 'Soul Coffee'));
        content.id = 'about-tab';

        content.appendChild(wrapper);
        container.appendChild(content);
    };
};

