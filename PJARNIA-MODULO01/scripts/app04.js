const meusResgates = () => {
    window.location = "../html/meusresgates.html";
  };
  
  
  
  const sair = () => {
    window.location = "../index.html";
  };
  
  const mostrarDados = (resposta) => {
    document.querySelector("#nome").value = resposta[0].nome;
    document.querySelector("#email").value = resposta[0].email;
  };
  
  const carregarDados = async () => {
    const dados = await fetch("https://api-projeto-arnia-g5ed.onrender.com/usuarios");
    console.log(dados);
    const resposta = await dados.json();
    console.log(resposta);
  
    mostrarDados(resposta);
  };
  carregarDados();