
const h1Text = document.querySelector('#title');
const pText = document.querySelector('#container p');

// Change text here
const titleLetter = ('Xin chào,').split("");
const pLetter = ('mình là Tuấn.').split("");

console.log(titleLetter.length + pLetter.length)

const n = titleLetter.length;
const m = pLetter.length

const className = ['rubber_band', 'display'];

function createSpan(data, className) {
    const spanNode = document.createElement('span');
    const textNode = document.createTextNode(data);
    spanNode.append(textNode);
    spanNode.classList.add(...className);
    return spanNode;
}

window.onload = () => {

    const spanTitleArray = titleLetter.map((value, index) => {
        const spanTitleComplete = createSpan(titleLetter[index], ['display', `_${index + 1}`, 'rubber_band']);
        // spanTitleComplete.style.animationDelay = index / n + 's';
        setTimeout(() => {
            spanTitleComplete.classList.remove('display');
        }, 2600)
        return spanTitleComplete;
    });

    const spanPArray = pLetter.map((value, index) => {
        const spanPComplete = createSpan(pLetter[index],  ['display', `_${index + 10}`, 'rubber_band']);
        // spanPComplete.style.animationDelay = index / n + 's';
        setTimeout(() => {
            spanPComplete.classList.remove(['display']);
        }, 2600)
        return spanPComplete;
    });

    h1Text.append(...spanTitleArray);
    pText.append(...spanPArray);
}