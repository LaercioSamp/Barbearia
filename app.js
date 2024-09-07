function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // Se i campoPesquisa for uma string vazia
    if (campoPesquisa == ""){
      section.innerHTML = "<p>Digite o serviço que deseja.</p>"
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
  
    // Cria uma string vazia para construir o HTML dos resultados dinamicamente
    let resultados = "";
    let titulo ="";
    let descricao ="";
    let tags ="";
  
    // Itera sobre cada objeto `dado` na lista de resultados da pesquisa
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()

    // Se titulo includes campoPesquisa
    if (dado.titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa) || dado.tags.includes(campoPesquisa))
      {

      resultados += `
      <div class="item-resultado">
        <h2>
          <a href="#" target="_blank">${titulo}</a>
        </h2>
        <p class="discricao-meta">${descricao}</p>
        <a href=${dado.link} target="_blank">Mais informações.</a>
      </div>
    `;
   }
  }

  if (!resultados){
    resultados = "<p>Digite o nome do serviço que deseja!</p>"

  }
    section.innerHTML = resultados;
}
