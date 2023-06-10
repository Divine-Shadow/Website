class FAQItem extends HTMLElement {
    constructor() {
        super();
        this.classList.add('faq-item');
        this.innerHTML = `
      <div class="question"></div>
      <div class="answer expandable"></div>
    `;
    }

    connectedCallback() {
        const question = this.getAttribute('question');
        const answer = this.getAttribute('answer');

        this.querySelector('.question').textContent = question;
        this.querySelector('.answer').textContent = answer;

        this.querySelector('.question').addEventListener('click', () => {
            const answerElement = this.querySelector('.answer');
            answerElement.classList.toggle('expandable');
            answerElement.classList.toggle('expanded');
        });
    }
}

customElements.define('faq-item', FAQItem);
