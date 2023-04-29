function limpa_formulário_cep() {
  //Limpa valores do formulário de cep.
  document.getElementById("rua").value = "";
  document.getElementById("bairro").value = "";
  document.getElementById("cidade").value = "";
  document.getElementById("uf").value = "";
}

function meu_callback(conteudo) {
  if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById("rua").value = conteudo.logradouro;
    document.getElementById("bairro").value = conteudo.bairro;
    document.getElementById("cidade").value = conteudo.localidade;
    document.getElementById("uf").value = conteudo.uf;
  } //end if.
  else {
    //CEP não Encontrado.
    limpa_formulário_cep();
    alert("CEP não encontrado.");
  }
}

function pesquisacep(valor) {
  //Nova variável "cep" somente com dígitos.
  const cep = valor.replace(/\D/g, "");

  //Verifica se campo cep possui valor informado.
  if (cep != "") {
    //Expressão regular para validar o CEP.
    const validacep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if (validacep.test(cep)) {
      //Preenche os campos com "..." enquanto consulta webservice.
      document.getElementById("rua").value = "...";
      document.getElementById("bairro").value = "...";
      document.getElementById("cidade").value = "...";
      document.getElementById("uf").value = "...";
      //Cria um elemento javascript.
      const script = document.createElement("script");

      //Sincroniza com o callback.
      script.src =
        "https://viacep.com.br/ws/" + cep + "/json/?callback=meu_callback";

      //Insere script no documento e carrega o conteúdo.
      document.body.appendChild(script);
    } //end if.
    else {
      //cep é inválido.
      limpa_formulário_cep();
      alert("Formato de CEP inválido.");
    }
  } //end if.
  else {
    //cep sem valor, limpa formulário.
    limpa_formulário_cep();
  }
}

$(document).ready(function () {
  $("#createUserForm").submit(function (event) {
    event.preventDefault();

    // Obtém os valores dos campos de login e senha
    var firstName = $("#nome").val();
    var lastName = $("#sobrenome").val();
    var email = $("#email").val();
    var cep = $("#cep").val();
    var numero = $("#numero").val();

    // Cria um objeto JSON com os valores de login e senha
    var data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      cep: cep,
      numero: numero,
    };

    // Envia os dados como JSON para a URL externa usando o método POST
    $.ajax({
      url: "http://localhost:3000/user",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(data),
      success: function (response) {
        alert("Cadastro bem sucedido!");
        window.location.href = "./home.html";
      },
      error: function (error) {
        alert("Erro ao cadastrar, verifique a conexão com a API...");
      },
    });
  });
});
