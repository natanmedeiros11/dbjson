class ProdutoCard extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="card">
                <img src="${this.getAttribute('imagem')}" class="card-img-top" alt="${this.getAttribute('nome')}">
                <div class="card-body">
                    <h5 class="card-title">${this.getAttribute('nome')}</h5>
                    <p class="card-text">${this.getAttribute('descricao')}</p>
                    <p class="card-text">${this.getAttribute('preco')}</p>
                    <a href="produto.html?id=${this.getAttribute('id')}" class="btn btn-primary">Ver Detalhes</a>
                </div>
            </div>
        `;
    }
}

customElements.define('produto-card', ProdutoCard);
