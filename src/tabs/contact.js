import {
    createElement,
    createElementWithId,
    createElementWithClass,
    createImgWithSrc,
    removeCurrentTab
} from '../domManipulation.js';

const container = document.querySelector('#container');

export default function showContactTab() {
    const content = createElementWithClass('div', 'content');
    const meansOfContat = createElementWithId('div', 'means-of-contact');
    if(content.id !== 'contact-tab') {
        removeCurrentTab();
        content.appendChild(createElementWithId('h1', 'heading', 'Soul Coffee'));
        content.id = 'contact-tab';

        meansOfContat.append(
            meanTemplate('../assets/contact/map-pin.svg', 'Address', '771 Flavor Street, Culinary City'),
            meanTemplateTwo('Phone', '../assets/contact/phone.svg', '(515) 263-4847'),
            meanTemplate('../assets/contact/instagram.svg', 'Instagram', '@soulcoffee'),
            meanTemplateTwo('E-mail', '../assets/contact/mail.svg', 'soul.coffee@gmail.com')
        );
        content.appendChild(meansOfContat);
        container.appendChild(content);
    };
};

// Icon b4 heading
function meanTemplate(iconSrc, heading, text) {
    const mean = createElementWithClass('div', 'mean');
    mean.append(
        createImgWithSrc(`${iconSrc}`),
        createElement('h2', `${heading}`),
        createElement('p', `${text}`)
    );

    return mean;
};

// Heading b4 icon
function meanTemplateTwo(heading, iconSrc, text) {
    const mean = createElementWithClass('div', 'mean');
    mean.append(
        createElement('h2', `${heading}`),
        createImgWithSrc(`${iconSrc}`),
        createElement('p', `${text}`)
    );

    return mean;
};