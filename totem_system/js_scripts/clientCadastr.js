const cpfInput = document.getElementById('cpf');
let currentURL = localStorage.getItem('currentUrl');

if (currentURL) {
  let url = new URL(currentURL);
  let searchParams = new URLSearchParams(url.search);

  if (searchParams.has('btn')) {
    let btnValue = searchParams.get('btn');
    console.log(btnValue);
  }
}

cpfInput.addEventListener('input', function () {
  let cpf = cpfInput.value;

  cpf = cpf.replace(/\D/g, '');

  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

  cpfInput.value = cpf;
});

const dataNascimentoInput = document.getElementById('data_nascimento');

dataNascimentoInput.addEventListener('input', function () {
  let dataNascimento = dataNascimentoInput.value;

  dataNascimento = dataNascimento.replace(/\D/g, '');

  if (dataNascimento.length > 2) {
    const dia = dataNascimento.substring(0, 2);
    const mes = dataNascimento.substring(2, 4);
    const ano = dataNascimento.substring(4, 8);

    dataNascimento = `${dia}/${mes}/${ano}`;
  }

  dataNascimentoInput.value = dataNascimento;
});




function SubmitEvent(event) {
  event.preventDefault();


  var nome = document.getElementById('nome').value;
  var cpf = document.getElementById('cpf').value;
  var dataNascimento = document.getElementById('data_nascimento').value;
  var numConvenio = document.getElementById('num_convenio').value;
  if (nome !== '' && cpf.length === 14 && dataNascimento.length === 10 && numConvenio !== '') {
    window.location.href = 'screenCompleteTotem.html';
  } else {
    
    alert('Preencha todos os campos corretamente.');
  }
  console.log(nome);
  console.log(cpf);
  console.log(dataNascimento);
  console.log(numConvenio);
  


}
