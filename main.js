// Função responsável por realizar a pesquisa com base no texto digitado pelo usuário.
function pesquisar() {

    // Seleciona o elemento HTML onde os resultados serão exibidos.
    let section = document.getElementById('resultados-pesquisa');

    // Captura o valor do campo de pesquisa, removendo espaços extras e convertendo para letras minúsculas.
    let campoPesquisa = document.getElementById('campo-pesquisa').value.trim().toLowerCase();

    // Limpa o conteúdo anterior da seção de resultados.
    section.innerHTML = ""

    // Verifica se o campo de pesquisa está vazio.
    if (!campoPesquisa){
        // Se o campo de pesquisa estiver vazio, exibe um aviso visual para o usuário.
        section.innerHTML = `
            <div class="item-resultado" id="item-resultado-aviso">
                <img src="assets/ImgAvisoSemPesquisa.png" alt="Imagem de aviso" class="imagem-avisos">
                <p>Nada digitado. Por favor insira um livro para a pesquisa.</p>
            </div>
        `
        return; // Interrompe a execução da função.
    }

    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";

    // Itera sobre cada item da coleção de dados (presumivelmente um array de objetos).
    for (let dado of dados) {
        // Captura o título e descrição de cada item, convertendo para minúsculas para comparação.
        let titulo = dado.titulo.toLowerCase();
        let descricao = dado.descricao.toLowerCase();

        // Verifica se o campo de pesquisa aparece no título ou na descrição do item.
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            // Se a correspondência for encontrada, cria um elemento HTML para exibir o resultado.
            resultados += `
            <div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <div id="item-resultado-conteudo">
                    <img src=${dado.imagem} alt="Imagem Ilustrativa do Livro" class="imagem-livros">
                    <div id="item-resultado-conteudo-livro">
                        <p class="descricao-meta">${dado.descricao}</p>
                        <p>Gênero: ${dado.genero}</p>
                        <a href=${dado.link} target="_blank">Onde comprar</a>
                        <a href=${dado.opcaoAcessivel} target="_blank">AudioBook</a>
                    </div>
                </div>
            </div>
            `;
        }
    }

    // Se nenhum resultado foi encontrado, exibe um aviso.
    if (resultados === "") {
        section.innerHTML = `
            <div class="item-resultado" id="item-resultado-aviso">
                <img src="assets/ImgAvisoNaoEncontrado.png" alt="Imagem de aviso" class="imagem-avisos">
                <p>Nenhum resultado encontrado para "${campoPesquisa}"</p>
            </div>
        `;
    } else {
        // Caso contrário, exibe os resultados encontrados na seção.
        section.innerHTML = resultados;
    }
}

// Função para alternar entre a fonte padrão e a fonte amigável para disléxicos.
function toggleDyslexiaFont() {
    const body = document.body;
    const button = document.getElementById('toggleFont');
    
    // Verifica se a classe 'dyslexia-font' está aplicada ao body.
    if (body.classList.contains('dyslexia-font')) {
        // Se estiver aplicada, remove a classe e restaura a fonte padrão.
        body.classList.remove('dyslexia-font');
        button.innerText = 'Ativar Fonte Disléxica'; // Atualiza o texto do botão.
    } else {
        // Caso contrário, aplica a classe e muda o texto do botão.
        body.classList.add('dyslexia-font');
        button.innerText = 'Desativar Fonte Disléxica';
    }
}

// Função para alternar entre a paleta de cores padrão e a paleta para daltônicos.
function toggleDaltonismo() {
    const body = document.body;
    const button = document.getElementById('toggleDaltonismo');

    // Verifica se a classe 'daltonismo' está aplicada ao body.
    if (body.classList.contains('daltonismo')) {
        // Se estiver aplicada, remove a classe e restaura o estilo padrão.
        body.classList.remove('daltonismo');
        button.innerText = 'Ativar cores para daltônicos'; // Atualiza o texto do botão.
    } else {
        // Caso contrário, aplica a classe e altera o estilo da página.
        body.classList.add('daltonismo');
        button.innerText = 'Desativar cores para daltônicos';
    }
}
