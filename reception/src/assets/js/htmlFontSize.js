const MAX_FONT_SIZE = 50;

function setHtmlFontSize(){
    const html = document.querySelector('html');
    let fontSize = window.innerWidth / 50;
    fontSize = fontSize>MAX_FONT_SIZE?MAX_FONT_SIZE:fontSize;
    html.style.fontSize = fontSize + 'px'
}

function initHtmlFontSize() {
    document.addEventListener('DOMContentLoaded',setHtmlFontSize);

    window.addEventListener('resize',setHtmlFontSize);
}

export default initHtmlFontSize;


export function realPx(px) {
    const maxWidth = window.innerWidth > 2500 ? 2500 : window.innerWidth;
    return px * (maxWidth / 1274);
}