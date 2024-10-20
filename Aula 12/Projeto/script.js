function mostrarLivro(livro) {
	const capaLivro = document.querySelector('.capaLivro img');
	const tituloLivro = document.querySelector('.tituloLivro h1');
	const descricaoLivro = document.querySelector('.descricao p');
	const autorLivro = document.querySelector('.descricaoAutor p');

	capaLivro.src = livro.imgCapa;
	tituloLivro.textContent = livro.titulo;
	descricaoLivro.textContent = livro.descricao;
	autorLivro.textContent = livro.autor;
}

function inicializarCatalogo() {
	const navItens = document.querySelectorAll('.listagem .itens');

	navItens.forEach((item, index) => {
		item.addEventListener('click', () => {

			navItens.forEach(navItem => navItem.classList.remove('ativo'));
			item.classList.add('ativo');

			mostrarLivro(dados.books[index]);
		});
	});

	mostrarLivro(dados.books[0]);
}

document.addEventListener('DOMContentLoaded', inicializarCatalogo);
