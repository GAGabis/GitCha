const cpfInput = document.getElementById('cpf');

cpfInput.addEventListener('input', function() {
  let cpf = cpfInput.value;

  // Remove todos os caracteres não numéricos
  cpf = cpf.replace(/\D/g, '');

  // Formata o CPF no formato XXX.XXX.XXX-XX
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

  // Atualiza o valor do campo
  cpfInput.value = cpf;
});

const dataNascimentoInput = document.getElementById('data_nascimento');

dataNascimentoInput.addEventListener('input', function() {
  let dataNascimento = dataNascimentoInput.value;

  // Remove todos os caracteres não numéricos
  dataNascimento = dataNascimento.replace(/\D/g, '');

  // Formata a data no formato DD/MM/AAAA
  if (dataNascimento.length > 2) {
    const dia = dataNascimento.substring(0, 2);
    const mes = dataNascimento.substring(2, 4);
    const ano = dataNascimento.substring(4, 8);

    dataNascimento = `${dia}/${mes}/${ano}`;
  }

  // Atualiza o valor do campo
  dataNascimentoInput.value = dataNascimento;
});




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
  