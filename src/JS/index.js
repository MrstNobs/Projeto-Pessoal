const listagemSelecao = document.querySelectorAll('.imagem');

listagemSelecao.forEach(imagem => {
    imagem.addEventListener('click', () =>{
        const cartaoAmostra = document.querySelector('.amostra');
        cartaoAmostra.classList.remove('amostra');

        const IdImagemSelecionado = imagem.dataset.id;
        const IdCartaoImagemPraAbrir = 'cartao-' + IdImagemSelecionado;
        const CartaoImagemPraAbrir = document.getElementById(IdCartaoImagemPraAbrir);
        CartaoImagemPraAbrir.classList.add('amostra');

        const imagemSelecionadaNaListagem = document.querySelector('.selecionado');
        imagemSelecionadaNaListagem.classList.remove('selecionado');

        const ImagemSelecionadoNaListagem = document.getElementById(IdImagemSelecionado);
        ImagemSelecionadoNaListagem.classList.add('selecionado');
    });
});