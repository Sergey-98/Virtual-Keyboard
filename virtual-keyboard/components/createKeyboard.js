import Letter from './createLetter.js';
function Keyboard() {
    
    const rusLine_1 = ['ё','1','2','3','4','5','6','7','8','9','0','-','=','Backspace'];
    const rusLine_2 = ['Tab','й','ц','у','к','е','н','г','ш','щ','з','х','ъ','&#92;','Del'];
    const rusLine_3 = ['CapsLock','ф','ы','в','а','п','р','о','л','д','ж','э','Enter'];
    const rusLine_4 = ['Shift','я','ч','с','м','и','т','ь','б','ю','.','&#9650;','Shift'];
    const rusLine_5 = ['Ctrl','Win','Alt',' ','Alt','&#9668;','&#9660;','&#9658;', 'Ctrl'];
    const enLine_1 = ['`','1','2','3','4','5','6','7','8','9','0','-','=','Backspace'];
    const enLine_2 = ['Tab','q','w','e','r','t','y','u','i','o','p','[',']','&#92;','Del'];
    const enLine_3 = ['CapsLock','a','s','d','f','g','h','j','k','l',';','\'','Enter'];
    const enLine_4 = ['Shift','z','x','c','v','b','n','m',',','.','/','&#9650;','Shift'];
    const enLine_5 = ['Ctrl','Win','Alt',' ','Alt','&#9668;','&#9660;','&#9658;','Ctrl'];

    const special = ['Backspace', 'CapsLock', 'Enter', 'Shift'];
    const arrows = ['&#9650;', '&#9668;','&#9660;','&#9658;'];

    const code_1 = ['Backquote','Digit1','Digit2','Digit3','Digit4','Digit5','Digit6','Digit7','Digit8','Digit9','Digit0','Minus','Equal','Backspace'];
    const code_2 = ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'];
    const code_3 = ['CapsLock','KeyA','KeyS','KeyD','KeyF','KeyG','KeyH','KeyJ','KeyK','KeyL','Semicolon','Quote','Enter'];
    const code_4 = ['ShiftLeft','KeyZ','KeyX','KeyC','KeyV','KeyB','KeyN','KeyM','Comma','Period','Slash','ArrowUp','ShiftRight'];
    const code_5 = ['ControlLeft','MetaLeft', 'AltLeft', 'Space','AltRight','ArrowLeft','ArrowDown','ArrowRight','ControlRight'];


    let body = document.querySelector('body');
    let win = document.createElement('div');
    win.classList.add('window');
    win.innerHTML = `
        <textarea class = "screen" rows="5" cols="50" disabled></textarea>
        <div class = "keyboard">
            <div class = "line line-1"></div>
            <div class = "line line-2"></div>
            <div class = "line line-3"></div>
            <div class = "line line-4"></div>
            <div class = "line line-5"></div>
        </div>
        <div class = "desc"></div>
        <div class = "change-language"></div>
    `;
    body.append(win);

    let line_1 = document.querySelector('.line-1');
    let line_2 = document.querySelector('.line-2');
    let line_3 = document.querySelector('.line-3');
    let line_4 = document.querySelector('.line-4');
    let line_5 = document.querySelector('.line-5');

    for (let i = 0; i < rusLine_1.length; i++) {
        if (special.includes(rusLine_1[i])) {
            new Letter(rusLine_1[i], enLine_1[i], code_1[i], '100px', line_1).renderLetter();
        } else {
            new Letter(rusLine_1[i], enLine_1[i], code_1[i], '40px', line_1).renderLetter();
        } 
    }
    for (let i = 0; i < rusLine_2.length; i++) {
        if (special.includes(rusLine_2[i])) {
            new Letter(rusLine_2[i], enLine_2[i], code_2[i], '100px', line_2).renderLetter();
        } else {
            new Letter(rusLine_2[i], enLine_2[i], code_2[i], '40px', line_2).renderLetter();
        } 
    }
    for (let i = 0; i < rusLine_3.length; i++) {
        if (special.includes(rusLine_3[i])) {
            new Letter(rusLine_3[i], enLine_3[i], code_3[i], '100px', line_3).renderLetter();
        } else {
            new Letter(rusLine_3[i], enLine_3[i], code_3[i], '40px', line_3).renderLetter();
        } 
    }
    for (let i = 0; i < rusLine_4.length; i++) {
        if (special.includes(rusLine_4[i])) {
            new Letter(rusLine_4[i], enLine_4[i], code_4[i], '100px', line_4).renderLetter();
        } else if (arrows.includes(rusLine_4[i])) {
            new Letter(rusLine_4[i], enLine_4[i], code_4[i], '40px', line_4).renderLetter();
        } else {
            new Letter(rusLine_4[i], enLine_4[i], code_4[i], '40px', line_4).renderLetter();
        } 
    }
    for (let i = 0; i < rusLine_5.length; i++) {
        if (arrows.includes(rusLine_5[i])) {
            new Letter(rusLine_5[i], enLine_5[i], code_5[i], '40px', line_5).renderLetter();
        } else if (rusLine_5[i] == ' ') {
            new Letter(rusLine_5[i], enLine_5[i], code_5[i],'385px', line_5).renderLetter();
        } else {
            new Letter(rusLine_5[i], enLine_5[i], code_5[i], '40px', line_5).renderLetter();
        }
    }
}

export default Keyboard;