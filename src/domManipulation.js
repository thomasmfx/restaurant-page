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

export function paintBtn(btn) {
    btn.className = 'current-tab';
};

export function removeBtnsPaint(){
    const btns = document.querySelectorAll('button');
    btns.forEach(btn => {
        btn.className = '';
    });
};

export function removeCurrentTab() {
    const contentDiv = document.querySelector('#content');
    if(contentDiv.firstElementChild) {
        contentDiv.firstElementChild.remove()
    };
};