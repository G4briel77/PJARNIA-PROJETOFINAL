//função que busca os livros na API
const getProdutos = async () => {
  const dados = await fetch('https://api-projeto-arnia-g5ed.onrender.com/produtos')
  const produtos = await dados.json()

  return produtos
}

//função que renderiza os livros na página HTML, usando os registros armazenados na variavel "listaLivros"
const mostrarProdutos = (listaprodutos) => {
  const divProdutos = document.querySelector(".listaProdutos");

  // Limpar o conteúdo existente
  divProdutos.innerHTML = "";

  // Passar por cada elemento da lista de produtos e adicionar à divProdutos
  listaprodutos.forEach(produto => {
    const produtoContainer = document.createElement("div");
    produtoContainer.classList.add("produto-container");
    
    produtoContainer.innerHTML = `
      
      <div><img src="${produto.imagem}"</div>
      <div><b>${produto.titulo}</b></div>
      <div id="joias">${produto.joias} jóias</div>
      <div class = "btn-produtos">
                <button onclick="resgatar(${produto.id})" id="btn">Resgatar</button>
            </div>
    `;

    divProdutos.appendChild(produtoContainer);

  });
  
}
const resgatar = (id) =>{
  window.location = `../html/resgate.html?id=${id}`
 }

//FUNÇÃO QUE CARREGA OS DADOS NA TELA
const carregarDados = async () => {
  //chamada à função que busca os dados na API e salva o retorno na variavel listaLivros
  const listaProdutos = await getProdutos()
  console.log(listaProdutos)

  //chamada à função que renderiza os livros na página HTML passando a lista de livros como parâmetro
  mostrarProdutos(listaProdutos)
}


carregarDados()