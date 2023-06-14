class GameCard extends HTMLElement {
    constructor() {
        super();

        // Access attributes
        const title = this.getAttribute('title');
        const imagePath = '../' + this.getAttribute('imageSrc');


        this.innerHTML = `
            <div class="post-slide">
                <div class="post-img">
                    <img src="${imagePath}" alt="">
                    <a href="javascript:void(0)" class="over-layer"><i class="fa fa-link"></i></a>
                </div>
                <div class="post-content">
                    <h3 class="post-title">
                        <a href="javascript:void(0)">${title}</a>
                    </h3>
                </div>
            </div>`;
    }
}

customElements.define('game-card', GameCard);
