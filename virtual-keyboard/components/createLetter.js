export default class Letter {
    constructor(textRu, textEn, id, width, parent) {
        this.textRu = textRu;
        this.textEn = textEn;
        this.id = id;
        this.width = width;
        this.parent = parent;
    }
    renderLetter() {
        const letterWrap = document.createElement('button');
        letterWrap.classList.add('keys');
        letterWrap.id = `${this.id}`;
        letterWrap.innerHTML = `
            <span class = "key rus">${this.textRu}</span>
            <span class = "key eng none">${this.textEn}</span>
        `;
        letterWrap.style.cssText = `
            text-align: center;
            border: 1px solid black;
            width: ${this.width};
        `;
        this.parent.append(letterWrap);
    }
}