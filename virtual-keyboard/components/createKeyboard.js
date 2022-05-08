import Letter from './createLetter.js';
import activeLang from './activeLang.js';
import runOnKeys from './changeLang.js';

function Keyboard() {
    
    const rusLine_1 = ['ё','1','2','3','4','5','6','7','8','9','0','-','=','Backspace'];
    const rusLine_2 = ['Tab','й','ц','у','к','е','н','г','ш','щ','з','х','ъ','&#92;','Del'];
    const rusLine_3 = ['CapsLock','ф','ы','в','а','п','р','о','л','д','ж','э','Enter'];
    const rusLine_4 = ['Shift','я','ч','с','м','и','т','ь','б','ю','.','&#9650;','Shift'];
    const rusLine_5 = ['Ctrl','Win','Alt',' ','Alt','&#9668;','&#9660;','&#9658;', 'Ctrl'];
    
    const rusLineShift_1 = ['Ё','!','"','№',';','%',':','?','*','(',')','_','+','Backspace'];
    const rusLineShift_2 = ['Tab','Й','Ц','У','К','Е','Н','Г','Ш','Щ','З','Х','Ъ','&#8260;','Del'];
    const rusLineShift_3 = ['CapsLock','Ф','Ы','В','А','П','Р','О','Л','Д','Ж','Э','Enter'];
    const rusLineShift_4 = ['Shift','Я','Ч','С','М','И','Т','Ь','Б','Ю',',','&#9650;','Shift'];
    const rusLineShift_5 = ['Ctrl','Win','Alt',' ','Alt','&#9668;','&#9660;','&#9658;', 'Ctrl'];


    const enLine_1 = ['`','1','2','3','4','5','6','7','8','9','0','-','=','Backspace'];
    const enLine_2 = ['Tab','q','w','e','r','t','y','u','i','o','p','[',']','&#92;','Del'];
    const enLine_3 = ['CapsLock','a','s','d','f','g','h','j','k','l',';','\'','Enter'];
    const enLine_4 = ['Shift','z','x','c','v','b','n','m',',','.','/','&#9650;','Shift'];
    const enLine_5 = ['Ctrl','Win','Alt',' ','Alt','&#9668;','&#9660;','&#9658;','Ctrl'];

    const enLineShift_1 = ['~','!','@','#','$','%','^','&','*','(',')','_','+','Backspace'];
    const enLineShift_2 = ['Tab','Q','W','E','R','T','Y','U','I','O','P','{','}','&#124;','Del'];
    const enLineShift_3 = ['CapsLock','A','S','D','F','G','H','J','K','L',':','"','Enter'];
    const enLineShift_4 = ['Shift','Z','X','C','V','B','N','M','<','>','?','&#9650;','Shift'];
    const enLineShift_5 = ['Ctrl','Win','Alt',' ','Alt','&#9668;','&#9660;','&#9658;','Ctrl'];

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
    
    function setLocalStorage(key, value) {
        localStorage.setItem(key, value);
    }
    function backspace(text) {
      let arr = text.toString().split('');
      arr.pop();
      return arr.join('');
    } 
    function createKeyboard(lineRu, lineEn, code, line) {
        for (let i = 0; i < lineRu.length; i++) {
            if (special.includes(lineRu[i])) {
                new Letter(lineRu[i], lineEn[i], code[i], '100px', line).renderLetter();
            } else if (arrows.includes(lineRu[i])) {
                new Letter(lineRu[i], lineEn[i], code[i], '40px', line).renderLetter();
            } else if (lineRu[i] == ' ') {
                new Letter(lineRu[i], lineEn[i], code[i],'385px', line).renderLetter();
            } else {
                new Letter(lineRu[i], lineEn[i], code[i], '40px', line).renderLetter();
            }
        }
    }

    createKeyboard(rusLine_1, enLine_1, code_1, line_1);
    createKeyboard(rusLine_2, enLine_2, code_2, line_2);
    createKeyboard(rusLine_3, enLine_3, code_3, line_3);
    createKeyboard(rusLine_4, enLine_4, code_4, line_4);
    createKeyboard(rusLine_5, enLine_5, code_5, line_5);

    document.addEventListener('keydown', (event) => {
        if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
            [line_1,line_2,line_3,line_4,line_5].forEach((elem) => {
                elem.innerHTML = "";
            });
            createKeyboard(rusLineShift_1, enLineShift_1, code_1, line_1);
            createKeyboard(rusLineShift_2, enLineShift_2, code_2, line_2);
            createKeyboard(rusLineShift_3, enLineShift_3, code_3, line_3);
            createKeyboard(rusLineShift_4, enLineShift_4, code_4, line_4);
            createKeyboard(rusLineShift_5, enLineShift_5, code_5, line_5); 
            activeLang();
            let rus = document.querySelectorAll('.rus');
            let eng = document.querySelectorAll('.eng');
            runOnKeys(
                () => {
                    rus.forEach(elem => {
                      if (elem.classList.contains('none')) {
                        elem.classList.remove('none');  
                        setLocalStorage('lang', 'ru');
                      } else {
                        elem.classList.add('none');  
                        setLocalStorage('lang', 'en');
                      }
                    });
                    eng.forEach(elem => {
                      if (elem.classList.contains('none')) {
                        elem.classList.remove('none');  
                        setLocalStorage('lang', 'en');
                      } else {
                        elem.classList.add('none');  
                        setLocalStorage('lang', 'ru');
                      }
                    }); 
                },
                "ControlLeft",
                "AltLeft"
              );
              let key = document.querySelectorAll('.key');
              let textarea = document.querySelector('.screen');
              key.forEach((elem) => {
                elem.addEventListener('click', () => {
                  if (elem.textContent == 'Enter') {
                  textarea.textContent += `\n`;
                  } else if (elem.textContent == 'Tab') {
                  textarea.textContent += '    ';
                  } else if (elem.textContent == 'Alt' || elem.textContent == 'Del' || elem.textContent == 'Ctrl' || elem.textContent == 'Win' || elem.textContent == 'Shift') {
                  textarea.textContent = textarea.textContent;
                  } else if (elem.textContent == 'Backspace') {
                    textarea.textContent = backspace(textarea.textContent);
                  } else {
                  textarea.textContent += elem.textContent;
                  }
                });
              });
        }
    });
    document.addEventListener('mousedown', (event) => {
      if (event.target.textContent == 'Shift') {
          [line_1,line_2,line_3,line_4,line_5].forEach((elem) => {
              elem.innerHTML = "";
          });
          createKeyboard(rusLineShift_1, enLineShift_1, code_1, line_1);
          createKeyboard(rusLineShift_2, enLineShift_2, code_2, line_2);
          createKeyboard(rusLineShift_3, enLineShift_3, code_3, line_3);
          createKeyboard(rusLineShift_4, enLineShift_4, code_4, line_4);
          createKeyboard(rusLineShift_5, enLineShift_5, code_5, line_5); 
          activeLang();
          setTimeout(()=> {
            let parent = event.target.parentElement;
            parent.classList.add('key-active');
            event.target.classList.add('key-active');
          }, 50);
          let rus = document.querySelectorAll('.rus');
          let eng = document.querySelectorAll('.eng');
          runOnKeys(
              () => {
                  rus.forEach(elem => {
                    if (elem.classList.contains('none')) {
                      elem.classList.remove('none');  
                      setLocalStorage('lang', 'ru');
                    } else {
                      elem.classList.add('none');  
                      setLocalStorage('lang', 'en');
                    }
                  });
                  eng.forEach(elem => {
                    if (elem.classList.contains('none')) {
                      elem.classList.remove('none');  
                      setLocalStorage('lang', 'en');
                    } else {
                      elem.classList.add('none');  
                      setLocalStorage('lang', 'ru');
                    }
                  }); 
              },
              "ControlLeft",
              "AltLeft"
            );
            let key = document.querySelectorAll('.key');
              let textarea = document.querySelector('.screen');
              key.forEach((elem) => {
                elem.addEventListener('click', () => {
                  if (elem.textContent == 'Enter') {
                  textarea.textContent += `\n`;
                  } else if (elem.textContent == 'Tab') {
                  textarea.textContent += '    ';
                  } else if (elem.textContent == 'Alt' || elem.textContent == 'Del' || elem.textContent == 'Ctrl' || elem.textContent == 'Win' || elem.textContent == 'Shift') {
                  textarea.textContent = textarea.textContent;
                  } else if (elem.textContent == 'Backspace') {
                    textarea.textContent = backspace(textarea.textContent);
                  } else {
                  textarea.textContent += elem.textContent;
                  }
                });
              });
      }
  });
    document.addEventListener('keyup', (event) => {
        if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
            [line_1,line_2,line_3,line_4,line_5].forEach((elem) => {
                elem.innerHTML = "";
            });
            createKeyboard(rusLine_1, enLine_1, code_1, line_1);
            createKeyboard(rusLine_2, enLine_2, code_2, line_2);
            createKeyboard(rusLine_3, enLine_3, code_3, line_3);
            createKeyboard(rusLine_4, enLine_4, code_4, line_4);
            createKeyboard(rusLine_5, enLine_5, code_5, line_5);
            activeLang();
            let rus = document.querySelectorAll('.rus');
            let eng = document.querySelectorAll('.eng');
            runOnKeys(
                () => {
                    rus.forEach(elem => {
                      if (elem.classList.contains('none')) {
                        elem.classList.remove('none');  
                        setLocalStorage('lang', 'ru');
                      } else {
                        elem.classList.add('none');  
                        setLocalStorage('lang', 'en');
                      }
                    });
                    eng.forEach(elem => {
                      if (elem.classList.contains('none')) {
                        elem.classList.remove('none');  
                        setLocalStorage('lang', 'en');
                      } else {
                        elem.classList.add('none');  
                        setLocalStorage('lang', 'ru');
                      }
                    }); 
                },
                "ControlLeft",
                "AltLeft"
              );
              let key = document.querySelectorAll('.key');
              let textarea = document.querySelector('.screen');
              key.forEach((elem) => {
                elem.addEventListener('click', () => {
                  if (elem.textContent == 'Enter') {
                  textarea.textContent += `\n`;
                  } else if (elem.textContent == 'Tab') {
                  textarea.textContent += '    ';
                  } else if (elem.textContent == 'Alt' || elem.textContent == 'Del' || elem.textContent == 'Ctrl' || elem.textContent == 'Win' || elem.textContent == 'Shift') {
                  textarea.textContent = textarea.textContent;
                  } else if (elem.textContent == 'Backspace') {
                    textarea.textContent = backspace(textarea.textContent);
                  } else {
                  textarea.textContent += elem.textContent;
                  }
                });
              });
        }  
    });
    document.addEventListener('mouseup', (event) => {
      if (event.target.textContent == 'Shift') {
          [line_1,line_2,line_3,line_4,line_5].forEach((elem) => {
              elem.innerHTML = "";
          });
          createKeyboard(rusLine_1, enLine_1, code_1, line_1);
          createKeyboard(rusLine_2, enLine_2, code_2, line_2);
          createKeyboard(rusLine_3, enLine_3, code_3, line_3);
          createKeyboard(rusLine_4, enLine_4, code_4, line_4);
          createKeyboard(rusLine_5, enLine_5, code_5, line_5);
          activeLang();
          let rus = document.querySelectorAll('.rus');
          let eng = document.querySelectorAll('.eng');
          let parent = event.target.parentElement;
          parent.classList.remove('key-active');
          event.target.classList.remove('key-active');
          runOnKeys(
              () => {
                  rus.forEach(elem => {
                    if (elem.classList.contains('none')) {
                      elem.classList.remove('none');  
                      setLocalStorage('lang', 'ru');
                    } else {
                      elem.classList.add('none');  
                      setLocalStorage('lang', 'en');
                    }
                  });
                  eng.forEach(elem => {
                    if (elem.classList.contains('none')) {
                      elem.classList.remove('none');  
                      setLocalStorage('lang', 'en');
                    } else {
                      elem.classList.add('none');  
                      setLocalStorage('lang', 'ru');
                    }
                  }); 
              },
              "ControlLeft",
              "AltLeft"
            );
            let key = document.querySelectorAll('.key');
            let textarea = document.querySelector('.screen');
            key.forEach((elem) => {
              elem.addEventListener('click', () => {
                if (elem.textContent == 'Enter') {
                textarea.textContent += `\n`;
                } else if (elem.textContent == 'Tab') {
                textarea.textContent += '    ';
                } else if (elem.textContent == 'Alt' || elem.textContent == 'Del' || elem.textContent == 'Ctrl' || elem.textContent == 'Win' || elem.textContent == 'Shift') {
                textarea.textContent = textarea.textContent;
                } else if (elem.textContent == 'Backspace') {
                  textarea.textContent = backspace(textarea.textContent);
                } else {
                textarea.textContent += elem.textContent;
                }
              });
            });
      }
    });
}



export default Keyboard;