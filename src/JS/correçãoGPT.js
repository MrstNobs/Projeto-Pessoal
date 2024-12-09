document.addEventListener("DOMContentLoaded", () => {
    const listagemSelecao = document.querySelectorAll('.listagem .imagem');
    const cartoes = document.querySelectorAll('.cartoes > .cartao-tete');

    listagemSelecao.forEach(imagem => {
        imagem.addEventListener('click', () => {
            // Remove a seleção da lista
            listagemSelecao.forEach(li => li.classList.remove('selecionado'));
            imagem.classList.add('selecionado');

            // Oculta todos os cartões
            cartoes.forEach(cartao => {
                cartao.classList.remove('amostra'); // Remove a classe 'amostra'
                cartao.style.display = 'none'; // Oculta todos os cartões
            });

            // Mostra o cartão correspondente
            const idCartao = imagem.getAttribute('data-cartao');
            const cartaoSelecionado = document.getElementById(`cartao-${idCartao}`);
            cartaoSelecionado.classList.add('amostra'); // Adiciona a classe 'amostra'
            cartaoSelecionado.style.display = 'block'; // Mostra o cartão selecionado
        });
    });

    // Inicialmente, mostra apenas o cartão da seleção inicial
    const primeiroCartao = document.querySelector('.cartoes > .cartao-tete.amostra');
    if (primeiroCartao) {
        primeiroCartao.style.display = 'block'; // Mostra o cartão inicial
    }
});
