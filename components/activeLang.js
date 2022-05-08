function activeLang() {
    if(localStorage.getItem('lang')) {
        const language = localStorage.getItem('lang');
        if (language == 'ru') {
            let itemsRu = document.querySelectorAll('.rus');
            itemsRu.forEach((item) => {
                item.classList.remove('none');
            });
            let itemsEn = document.querySelectorAll('.eng');
            itemsEn.forEach((item) => {
                item.classList.add('none');
            });
        } if (language == 'en') {
            let itemsEn = document.querySelectorAll('.eng');
            itemsEn.forEach((item) => {
                item.classList.remove('none');
            });
            let itemsRu = document.querySelectorAll('.rus');
            itemsRu.forEach((item) => {
                item.classList.add('none');
            });
        }
    }

}

export default activeLang;