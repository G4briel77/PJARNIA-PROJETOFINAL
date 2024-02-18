const meusDados = () => {
    window.location = "../html/meuperfil.html";
  };
  
  const meusResgates = () => {
    window.location = "../html/meusresgates.html";
  };
  
  const sair = () => {
    window.location = "../index.html";
  };
  
  const mostrarResgates = (dadosApi) => {
    const resgate = document.querySelector(".resgates");
  
    dadosApi.forEach((resgatados) => {
      const data = resgatados.horario;
      const imagem = resgatados.imagem;
      const nome = resgatados.titulo;
      const preco = resgatados.joias;
  
      resgate.innerHTML += `
       <div class="card">
            <div id="data">${data}</div>
            <div class='informacoes'>
                <img src='${imagem}'>
                <h3 id= "titulo-resgate">${nome}</h3>
                <span id = "joias">${preco} jóias</span>
            </div>
       </div>
       `;
    });
  };
  
  const carregarResgates = async () => {
    const resposta = await fetch("https://api-projeto-arnia-g5ed.onrender.com/resgates");
    console.log(resposta);
    const dados = await resposta.json();
    console.log(dados);
  
    mostrarResgates(dados);
  };
  carregarResgates();