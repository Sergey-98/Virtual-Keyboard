function runOnKeys(func, ...codes) {
  const press = new Set();
  document.addEventListener('keydown', (event) => {
    press.add(event.code);
    for (let i = 0; i < codes.length; i) {
      if (!press.has(codes[i])) {
        return;
      }
      i += 1;
    }
    press.clear();
    func();
  });
  document.addEventListener('keyup', (event) => {
    press.delete(event.code);
  });
}
export default runOnKeys;
