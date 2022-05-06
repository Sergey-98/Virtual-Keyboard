`use strict`;
import Keyboard from './components/createKeyboard.js';
import runOnKeys from './components/changeLang.js';
import activeLang from './components/activeLang.js';

Keyboard();
let rus = document.querySelectorAll('.rus');
let eng = document.querySelectorAll('.eng');

function setLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

activeLang();

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
  "ShiftLeft",
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
    } else if (elem.textContent == 'Alt' || elem.textContent == 'Del' || elem.textContent == 'Ctrl' || elem.textContent == 'Win') {
      textarea.textContent = textarea.textContent;
    } else {
      textarea.textContent += elem.textContent;
    }
  });
});

document.addEventListener('keydown', (event) => { 
  console.log(event.code);
  if (event.code == 'Enter') {
    document.getElementById(`${event.code}`).classList.add('active');
    textarea.textContent += `\n`;
  } else if (event.code == 'Tab') {
    document.getElementById(`${event.code}`).classList.add('active');
    textarea.textContent += '    ';
  } else if (event.code == 'AltLeft' || event.code == 'AltRight' || event.code == 'ControlLeft' || event.code == 'ControlRight' || event.code == 'Delete' || event.code == 'MetaLeft') {
    document.getElementById(`${event.code}`).classList.add('active');
    textarea.textContent = textarea.textContent;
    event.preventDefault();
  } else {
    document.getElementById(`${event.code}`).classList.add('active');
    textarea.textContent += event.key;
  }
});
document.addEventListener('keyup', (event) => { 
  if (event.code) {
    document.getElementById(`${event.code}`).classList.remove('active');
  }
});