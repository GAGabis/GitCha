function SubmitEvent(event) {
    event.preventDefault(); 
  

    var nome = document.getElementById('nome').value;
    var cpf = document.getElementById('cpf').value;
    var dataNascimento = document.getElementById('data_nascimento').value;
    var numConvenio = document.getElementById('num_convenio').value;
    //restante
    console.log(nome);
    if (nome == 'gabriel'){
      window.location.href = 'index.html';

    }



  }
  