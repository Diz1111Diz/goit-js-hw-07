const controlFontSize = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

function changeFontSize() {
 text.style.fontSize = controlFontSize.value + 'px'
};

controlFontSize.addEventListener('input', changeFontSize);