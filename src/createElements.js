export function createElement(el, text) {
    let element = document.createElement(`${el}`);
    element.textContent = text;
    return element;
};

export function createElementWithId(el, id, text) {
    let element = document.createElement(`${el}`);
    element.id = id;
    element.textContent = text;
    return element;
};

export function createElementWithClass(el, cl, text) {
    let element = document.createElement(`${el}`);
    element.classList.add(`${cl}`)
    element.textContent = text;
    return element;
};

export function createImgWithSrc(src) {
    let img = document.createElement('img');
    img.src = src;
    return img;
};