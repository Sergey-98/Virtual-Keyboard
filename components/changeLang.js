function runOnKeys(func, ...codes) {
  let press = new Set();

  document.addEventListener('keydown', function(event) {
    press.add(event.code);

    for (let code of codes) {
      if (!press.has(code)) {
        return;
      }
    }
    press.clear();

    func();
  });

  document.addEventListener('keyup', function(event) {
    press.delete(event.code);
  });

}

export default runOnKeys;