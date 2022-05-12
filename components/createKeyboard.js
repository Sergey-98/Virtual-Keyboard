import Letter from './createLetter.js';
import activeLang from './activeLang.js';
import runOnKeys from './changeLang.js';

function Keyboard() {
  const rusLine1 = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
  const rusLine2 = ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '&#92;', 'Del'];
  const rusLine3 = ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'];
  const rusLine4 = ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#9650;', 'Shift'];
  const rusLine5 = ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl'];
  const rusLineShift1 = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'];
  const rusLineShift2 = ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '&#8260;', 'Del'];
  const rusLineShift3 = ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'];
  const rusLineShift4 = ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '&#9650;', 'Shift'];
  const rusLineShift5 = ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl'];
  const enLine1 = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
  const enLine2 = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '&#92;', 'Del'];
  const enLine3 = ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'];
  const enLine4 = ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#9650;', 'Shift'];
  const enLine5 = ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl'];
  const enLineShift1 = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'];
  const enLineShift2 = ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '&#124;', 'Del'];
  const enLineShift3 = ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'];
  const enLineShift4 = ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&#9650;', 'Shift'];
  const enLineShift5 = ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#9668;', '&#9660;', '&#9658;', 'Ctrl'];
  const special = ['Backspace', 'CapsLock', 'Enter', 'Shift'];
  const arrows = ['&#9650;', '&#9668;', '&#9660;', '&#9658;'];
  const code1 = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'];
  const code2 = ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'];
  const code3 = ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'];
  const code4 = ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'];
  const code5 = ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];
  let caps = false;
  const body = document.querySelector('body');
  const win = document.createElement('div');
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
    <div class = "change-language">Для переключения языка используйте комбинацию: <b><i>LCTRL + ALT</i></b></div>
    `;
  body.append(win);
  const modalWrapper = document.createElement('div');
  modalWrapper.classList.add('modal-wrapper');
  modalWrapper.innerHTML = `
    <div class = "modal-close">&#215;</div>
      <div class = "modal">
        <div class = modal-info>
          <div class = "modal-desc">Клавиатура создана в операционной системе Windows.</div>
          <div class = "change-language">Для переключения языка используйте комбинацию: <br> <b><i>LCTRL + ALT</i></b></div>
        </div>
      </div>
    `;
  body.append(modalWrapper);
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal-close') || event.target.classList.contains('modal-wrapper')) {
      document.querySelector('.modal-wrapper').classList.add('none');
    }
  });
  const line1 = document.querySelector('.line-1');
  const line2 = document.querySelector('.line-2');
  const line3 = document.querySelector('.line-3');
  const line4 = document.querySelector('.line-4');
  const line5 = document.querySelector('.line-5');
  function setLocalStorage(key, value) {
    localStorage.setItem(key, value);
  }
  function backspace(text) {
    const arr = text.toString().split('');
    arr.pop();
    return arr.join('');
  }
  function findKeys(elem) {
    const contentRu = ['ё', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю'];
    const contentRu1 = ['Ё', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю'];
    const contentEn = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
    const contentEn1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
    if (contentRu.includes(elem) || contentRu1.includes(elem) || contentEn.includes(elem)
    || contentEn1.includes(elem)) {
      return true;
    }
    return false;
  }
  function createKeyboard(lineRu, lineEn, code, line) {
    for (let i = 0; i < lineRu.length; i) {
      if (special.includes(lineRu[i])) {
        new Letter(lineRu[i], lineEn[i], code[i], '100px', line).renderLetter();
      } else if (arrows.includes(lineRu[i])) {
        new Letter(lineRu[i], lineEn[i], code[i], '40px', line).renderLetter();
      } else if (lineRu[i] === ' ') {
        new Letter(lineRu[i], lineEn[i], code[i], '385px', line).renderLetter();
      } else {
        new Letter(lineRu[i], lineEn[i], code[i], '40px', line).renderLetter();
      }
      i += 1;
    }
  }
  createKeyboard(rusLine1, enLine1, code1, line1);
  createKeyboard(rusLine2, enLine2, code2, line2);
  createKeyboard(rusLine3, enLine3, code3, line3);
  createKeyboard(rusLine4, enLine4, code4, line4);
  createKeyboard(rusLine5, enLine5, code5, line5);
  if (!localStorage.getItem('lang')) {
    setLocalStorage('lang', 'ru');
    activeLang();
  }
  document.addEventListener('keydown', (event) => {
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      [line1, line2, line3, line4, line5].forEach((elem) => {
        const el = elem;
        el.innerHTML = '';
      });
      createKeyboard(rusLineShift1, enLineShift1, code1, line1);
      createKeyboard(rusLineShift2, enLineShift2, code2, line2);
      createKeyboard(rusLineShift3, enLineShift3, code3, line3);
      createKeyboard(rusLineShift4, enLineShift4, code4, line4);
      createKeyboard(rusLineShift5, enLineShift5, code5, line5);
      activeLang();
      const rus = document.querySelectorAll('.rus');
      const eng = document.querySelectorAll('.eng');
      runOnKeys(
        () => {
          rus.forEach((elem) => {
            const el = elem;
            if (el.classList.contains('none')) {
              el.classList.remove('none');
              setLocalStorage('lang', 'ru');
            } else {
              el.classList.add('none');
              setLocalStorage('lang', 'en');
            }
          });
          eng.forEach((elem) => {
            const el = elem;
            if (el.classList.contains('none')) {
              el.classList.remove('none');
              setLocalStorage('lang', 'en');
            } else {
              el.classList.add('none');
              setLocalStorage('lang', 'ru');
            }
          });
        },
        'ControlLeft',
        'AltLeft'
      );
      runOnKeys(
        () => {
          rus.forEach((elem) => {
            if (elem.classList.contains('none')) {
              elem.classList.remove('none');
              setLocalStorage('lang', 'ru');
            } else {
              elem.classList.add('none');
              setLocalStorage('lang', 'en');
            }
          });
          eng.forEach((elem) => {
            if (elem.classList.contains('none')) {
              elem.classList.remove('none');
              setLocalStorage('lang', 'en');
            } else {
              elem.classList.add('none');
              setLocalStorage('lang', 'ru');
            }
          });
        },
        'ControlLeft',
        'AltRight'
      );
      if (caps) {
        document.getElementById('CapsLock').classList.add('active');
      } else {
        document.getElementById('CapsLock').classList.remove('active');
      }
      rus.forEach((elem) => {
        const el = elem;
        if (caps) {
          if (findKeys(elem.textContent)) {
            el.textContent = elem.textContent.toLowerCase();
          }
        } else if (!caps) {
          if (findKeys(elem.textContent)) {
            el.textContent = elem.textContent.toUpperCase();
          }
        }
      });
      eng.forEach((elem) => {
        const el = elem;
        if (caps) {
          if (findKeys(elem.textContent)) {
            el.textContent = elem.textContent.toLowerCase();
          }
        } else if (!caps) {
          if (findKeys(elem.textContent)) {
            el.textContent = elem.textContent.toUpperCase();
          }
        }
      });
      const key = document.querySelectorAll('.key');
      const textarea = document.querySelector('.screen');
      key.forEach((elem) => {
        elem.addEventListener('click', () => {
          if (elem.textContent === 'Enter') {
            textarea.textContent += '\n';
          } else if (elem.textContent === 'Tab') {
            textarea.textContent += '    ';
          } else if (elem.textContent === 'Alt' || elem.textContent === 'Del' || elem.textContent === 'Ctrl' || elem.textContent === 'Win' || elem.textContent === 'Shift') {
            const text = textarea.textContent;
            textarea.textContent = text;
          } else if (elem.textContent === 'Backspace') {
            textarea.textContent = backspace(textarea.textContent);
          } else {
            textarea.textContent += elem.textContent;
          }
        });
      });
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.code === 'CapsLock') {
      event.preventDefault();
      const textarea = document.querySelector('.screen');
      const text = textarea.textContent;
      textarea.textContent = text;
      if (caps) {
        caps = false;
        document.getElementById(`${event.code}`).classList.remove('active');
      } else {
        caps = true;
        document.getElementById(`${event.code}`).classList.add('active');
      }
      const rus = document.querySelectorAll('.rus');
      const eng = document.querySelectorAll('.eng');
      rus.forEach((elem) => {
        const el = elem;
        if (caps) {
          if (findKeys(elem.textContent)) {
            el.textContent = elem.textContent.toUpperCase();
          }
        } else if (!caps) {
          if (findKeys(elem.textContent)) {
            el.textContent = elem.textContent.toLowerCase();
          }
        }
      });
      eng.forEach((elem) => {
        const el = elem;
        if (caps) {
          if (findKeys(elem.textContent)) {
            el.textContent = elem.textContent.toUpperCase();
          }
        } else if (!caps) {
          if (findKeys(elem.textContent)) {
            el.textContent = elem.textContent.toLowerCase();
          }
        }
      });
    }
  });
  document.addEventListener('click', (event) => {
    if (event.target.textContent === 'CapsLock') {
      const textarea = document.querySelector('.screen');
      const text = textarea.textContent;
      textarea.textContent = text;
      if (caps) {
        caps = false;
        document.getElementById('CapsLock').classList.remove('active');
      } else if (!caps) {
        caps = true;
        document.getElementById('CapsLock').classList.add('active');
      }
      const rus = document.querySelectorAll('.rus');
      const eng = document.querySelectorAll('.eng');
      rus.forEach((elem) => {
        const el = elem;
        if (caps) {
          if (findKeys(elem.textContent)) {
            el.textContent = elem.textContent.toUpperCase();
          }
        } else if (!caps) {
          if (findKeys(elem.textContent)) {
            el.textContent = elem.textContent.toLowerCase();
          }
        }
      });
      eng.forEach((elem) => {
        const el = elem;
        if (caps) {
          if (findKeys(elem.textContent)) {
            el.textContent = elem.textContent.toUpperCase();
          }
        } else if (!caps) {
          if (findKeys(elem.textContent)) {
            el.textContent = elem.textContent.toLowerCase();
          }
        }
      });
    }
  });
  document.addEventListener('mousedown', (event) => {
    if (event.target.textContent === 'Shift') {
      [line1, line2, line3, line4, line5].forEach((elem) => {
        const el = elem;
        el.innerHTML = '';
      });
      createKeyboard(rusLineShift1, enLineShift1, code1, line1);
      createKeyboard(rusLineShift2, enLineShift2, code2, line2);
      createKeyboard(rusLineShift3, enLineShift3, code3, line3);
      createKeyboard(rusLineShift4, enLineShift4, code4, line4);
      createKeyboard(rusLineShift5, enLineShift5, code5, line5);
      activeLang();
      setTimeout(() => {
        const parent = event.target.parentElement;
        parent.classList.add('key-active');
        event.target.classList.add('key-active');
      }, 50);
      const rus = document.querySelectorAll('.rus');
      const eng = document.querySelectorAll('.eng');
      runOnKeys(
        () => {
          rus.forEach((elem) => {
            if (elem.classList.contains('none')) {
              elem.classList.remove('none');
              setLocalStorage('lang', 'ru');
            } else {
              elem.classList.add('none');
              setLocalStorage('lang', 'en');
            }
          });
          eng.forEach((elem) => {
            if (elem.classList.contains('none')) {
              elem.classList.remove('none');
              setLocalStorage('lang', 'en');
            } else {
              elem.classList.add('none');
              setLocalStorage('lang', 'ru');
            }
          });
        },
        'ControlLeft',
        'AltLeft'
      );
      runOnKeys(
        () => {
          rus.forEach((elem) => {
            if (elem.classList.contains('none')) {
              elem.classList.remove('none');
              setLocalStorage('lang', 'ru');
            } else {
              elem.classList.add('none');
              setLocalStorage('lang', 'en');
            }
          });
          eng.forEach((elem) => {
            if (elem.classList.contains('none')) {
              elem.classList.remove('none');
              setLocalStorage('lang', 'en');
            } else {
              elem.classList.add('none');
              setLocalStorage('lang', 'ru');
            }
          });
        },
        'ControlLeft',
        'AltRight'
      );
      if (caps) {
        document.getElementById('CapsLock').classList.add('active');
      } else {
        document.getElementById('CapsLock').classList.remove('active');
      }
      rus.forEach((elem) => {
        const el = elem;
        if (caps) {
          if (findKeys(elem.textContent)) {
            el.textContent = elem.textContent.toLowerCase();
          }
        } else if (!caps) {
          if (findKeys(elem.textContent)) {
            el.textContent = elem.textContent.toUpperCase();
          }
        }
      });
      eng.forEach((elem) => {
        const el = elem;
        if (caps) {
          if (findKeys(elem.textContent)) {
            el.textContent = elem.textContent.toLowerCase();
          }
        } else if (!caps) {
          if (findKeys(elem.textContent)) {
            el.textContent = elem.textContent.toUpperCase();
          }
        }
      });
      const key = document.querySelectorAll('.key');
      const textarea = document.querySelector('.screen');
      key.forEach((elem) => {
        const el = elem;
        el.addEventListener('click', () => {
          if (elem.textContent === 'Enter') {
            textarea.textContent += '\n';
          } else if (elem.textContent === 'Tab') {
            textarea.textContent += '    ';
          } else if (elem.textContent === 'Alt' || el.textContent === 'Del' || el.textContent === 'Ctrl' || el.textContent === 'Win'
          || el.textContent === 'Shift') {
            const text = textarea.textContent;
            textarea.textContent = text;
          } else if (elem.textContent === 'Backspace') {
            textarea.textContent = backspace(textarea.textContent);
          } else {
            textarea.textContent += elem.textContent;
          }
        });
      });
    }
  });
  document.addEventListener('keyup', (event) => {
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      [line1, line2, line3, line4, line5].forEach((elem) => {
        const el = elem;
        el.innerHTML = '';
      });
      createKeyboard(rusLine1, enLine1, code1, line1);
      createKeyboard(rusLine2, enLine2, code2, line2);
      createKeyboard(rusLine3, enLine3, code3, line3);
      createKeyboard(rusLine4, enLine4, code4, line4);
      createKeyboard(rusLine5, enLine5, code5, line5);
      activeLang();
      const rus = document.querySelectorAll('.rus');
      const eng = document.querySelectorAll('.eng');
      runOnKeys(
        () => {
          rus.forEach((elem) => {
            if (elem.classList.contains('none')) {
              elem.classList.remove('none');
              setLocalStorage('lang', 'ru');
            } else {
              elem.classList.add('none');
              setLocalStorage('lang', 'en');
            }
          });
          eng.forEach((elem) => {
            if (elem.classList.contains('none')) {
              elem.classList.remove('none');
              setLocalStorage('lang', 'en');
            } else {
              elem.classList.add('none');
              setLocalStorage('lang', 'ru');
            }
          });
        },
        'ControlLeft',
        'AltLeft'
      );
      runOnKeys(
        () => {
          rus.forEach((elem) => {
            if (elem.classList.contains('none')) {
              elem.classList.remove('none');
              setLocalStorage('lang', 'ru');
            } else {
              elem.classList.add('none');
              setLocalStorage('lang', 'en');
            }
          });
          eng.forEach((elem) => {
            if (elem.classList.contains('none')) {
              elem.classList.remove('none');
              setLocalStorage('lang', 'en');
            } else {
              elem.classList.add('none');
              setLocalStorage('lang', 'ru');
            }
          });
        },
        'ControlLef',
        'AltRight'
      );
      if (caps) {
        document.getElementById('CapsLock').classList.add('active');
      } else {
        document.getElementById('CapsLock').classList.remove('active');
      }
      rus.forEach((elem) => {
        const el = elem;
        if (caps) {
          if (findKeys(elem.textContent)) {
            el.textContent = elem.textContent.toUpperCase();
          }
        } else if (!caps) {
          if (findKeys(elem.textContent)) {
            el.textContent = elem.textContent.toLowerCase();
          }
        }
      });
      eng.forEach((elem) => {
        const el = elem;
        if (caps) {
          if (findKeys(elem.textContent)) {
            el.textContent = elem.textContent.toUpperCase();
          }
        } else if (!caps) {
          if (findKeys(elem.textContent)) {
            el.textContent = elem.textContent.toLowerCase();
          }
        }
      });
      const key = document.querySelectorAll('.key');
      const textarea = document.querySelector('.screen');
      key.forEach((elem) => {
        const el = elem;
        el.addEventListener('click', () => {
          if (elem.textContent === 'Enter') {
            textarea.textContent += '\n';
          } else if (elem.textContent === 'Tab') {
            textarea.textContent += '    ';
          } else if (elem.textContent === 'Alt' || elem.textContent === 'Del' || elem.textContent === 'Ctrl' || elem.textContent === 'Win'
          || el.textContent === 'Shift' || el.textContent === 'CapsLock') {
            const text = textarea.textContent;
            textarea.textContent = text;
          } else if (elem.textContent === 'Backspace') {
            textarea.textContent = backspace(textarea.textContent);
          } else {
            textarea.textContent += elem.textContent;
          }
        });
      });
    }
  });
  document.addEventListener('mouseup', (event) => {
    if (event.target.textContent === 'Shift') {
      [line1, line2, line3, line4, line5].forEach((elem) => {
        const el = elem;
        el.innerHTML = '';
      });
      createKeyboard(rusLine1, enLine1, code1, line1);
      createKeyboard(rusLine2, enLine2, code2, line2);
      createKeyboard(rusLine3, enLine3, code3, line3);
      createKeyboard(rusLine4, enLine4, code4, line4);
      createKeyboard(rusLine5, enLine5, code5, line5);
      activeLang();
      const rus = document.querySelectorAll('.rus');
      const eng = document.querySelectorAll('.eng');
      const parent = event.target.parentElement;
      parent.classList.remove('key-active');
      event.target.classList.remove('key-active');
      runOnKeys(
        () => {
          rus.forEach((elem) => {
            if (elem.classList.contains('none')) {
              elem.classList.remove('none');
              setLocalStorage('lang', 'ru');
            } else {
              elem.classList.add('none');
              setLocalStorage('lang', 'en');
            }
          });
          eng.forEach((elem) => {
            if (elem.classList.contains('none')) {
              elem.classList.remove('none');
              setLocalStorage('lang', 'en');
            } else {
              elem.classList.add('none');
              setLocalStorage('lang', 'ru');
            }
          });
        },
        'ControlLeft',
        'AltLeft'
      );
      runOnKeys(
        () => {
          rus.forEach((elem) => {
            if (elem.classList.contains('none')) {
              elem.classList.remove('none');
              setLocalStorage('lang', 'ru');
            } else {
              elem.classList.add('none');
              setLocalStorage('lang', 'en');
            }
          });
          eng.forEach((elem) => {
            if (elem.classList.contains('none')) {
              elem.classList.remove('none');
              setLocalStorage('lang', 'en');
            } else {
              elem.classList.add('none');
              setLocalStorage('lang', 'ru');
            }
          });
        },
        'ControlLeft',
        'AltRight'
      );
      if (caps) {
        document.getElementById('CapsLock').classList.add('active');
      } else {
        document.getElementById('CapsLock').classList.remove('active');
      }
      rus.forEach((elem) => {
        const el = elem;
        if (caps) {
          if (findKeys(elem.textContent)) {
            el.textContent = elem.textContent.toUpperCase();
          }
        } else if (!caps) {
          if (findKeys(elem.textContent)) {
            el.textContent = elem.textContent.toLowerCase();
          }
        }
      });
      eng.forEach((elem) => {
        const el = elem;
        if (caps) {
          if (findKeys(elem.textContent)) {
            el.textContent = elem.textContent.toUpperCase();
          }
        } else if (!caps) {
          if (findKeys(elem.textContent)) {
            el.textContent = elem.textContent.toLowerCase();
          }
        }
      });
      const key = document.querySelectorAll('.key');
      const textarea = document.querySelector('.screen');
      key.forEach((elem) => {
        elem.addEventListener('click', () => {
          if (elem.textContent === 'Enter') {
            textarea.textContent += '\n';
          } else if (elem.textContent === 'Tab') {
            textarea.textContent += '    ';
          } else if (elem.textContent === 'Alt' || elem.textContent === 'Del' || elem.textContent === 'Ctrl' || elem.textContent === 'Win'
                || elem.textContent === 'Shift' || elem.textContent === 'CapsLock') {
            const text = textarea.textContent;
            textarea.textContent = text;
          } else if (elem.textContent === 'Backspace') {
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
