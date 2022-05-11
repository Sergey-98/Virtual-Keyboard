function activeLang() {
  if (localStorage.getItem('lang')) {
    const language = localStorage.getItem('lang');
    if (language === 'ru') {
      const itemsRu = document.querySelectorAll('.rus');
      itemsRu.forEach((item) => {
        item.classList.remove('none');
      });
      const itemsEn = document.querySelectorAll('.eng');
      itemsEn.forEach((item) => {
        item.classList.add('none');
      });
    } if (language === 'en') {
      const itemsEn = document.querySelectorAll('.eng');
      itemsEn.forEach((item) => {
        item.classList.remove('none');
      });
      const itemsRu = document.querySelectorAll('.rus');
      itemsRu.forEach((item) => {
        item.classList.add('none');
      });
    }
  }
}
export default activeLang;
