import Keyboard from './components/createKeyboard.js';
import runOnKeys from './components/changeLang.js';
import activeLang from './components/activeLang.js';

Keyboard();
const rus = document.querySelectorAll('.rus');
const eng = document.querySelectorAll('.eng');

function setLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

activeLang();

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
const key = document.querySelectorAll('.key');
const textarea = document.querySelector('.screen');

function backspace(text) {
  const arr = text.toString().split('');
  arr.pop();
  return arr.join('');
}

key.forEach((elem) => {
  elem.addEventListener('click', () => {
    if (elem.textContent === 'Enter') {
      textarea.textContent += '\n';
    } else if (elem.textContent === 'Tab') {
      textarea.textContent += '    ';
    } else if (elem.textContent === 'Alt' || elem.textContent === 'Del' || elem.textContent === 'Ctrl' || elem.textContent === 'Win' || elem.textContent === 'Shift' || elem.textContent === 'CapsLock') {
      const text = textarea.textContent;
      textarea.textContent = text;
    } else if (elem.textContent === 'Backspace') {
      textarea.textContent = backspace(textarea.textContent);
    } else {
      textarea.textContent += elem.textContent;
    }
  });
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Enter') {
    document.getElementById(`${event.code}`).classList.add('active');
    textarea.textContent += '\n';
  } else if (event.code === 'Tab') {
    document.getElementById(`${event.code}`).classList.add('active');
    textarea.textContent += '    ';
    event.preventDefault();
  } else if (event.code === 'AltLeft' || event.code === 'AltRight' || event.code === 'ControlLeft' || event.code === 'ControlRight' || event.code === 'Delete' || event.code === 'MetaLeft' || event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    document.getElementById(`${event.code}`).classList.add('active');
    const text = textarea.textContent;
    textarea.textContent = text;
    event.preventDefault();
  } else if (event.code === 'Backspace') {
    document.getElementById(`${event.code}`).classList.add('active');
    textarea.textContent = backspace(textarea.textContent);
  } else if (event.code === 'CapsLock') {
    const text = textarea.textContent;
    textarea.textContent = text;
  } else if (event.code !== 'F12') {
    if (localStorage.getItem('lang') === 'ru') {
      textarea.textContent += document.getElementById(`${event.code}`).childNodes[1].textContent;
    } else if (localStorage.getItem('lang') === 'en') {
      textarea.textContent += document.getElementById(`${event.code}`).childNodes[3].textContent;
    }
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code !== 'CapsLock' && event.code !== 'F12') {
    document.getElementById(`${event.code}`).classList.remove('active');
  }
});
