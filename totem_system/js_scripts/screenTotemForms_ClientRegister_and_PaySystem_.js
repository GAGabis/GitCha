let currentURL = localStorage.getItem('currentUrl');

if (currentURL) {
  let url = new URL(currentURL);
  let searchParams = new URLSearchParams(url.search);

  if (searchParams.has('btn')) {
    var btnValue = searchParams.get('btn');
    console.log(btnValue);
  }
}


const cpfInput = document.getElementById('cpf');
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


  // SIMULAÇÃO TABELA DE PREÇO:
  //CASE 1: PLANOS (ST/MD/PL) - VALORES A DEFINIR

  let stCoberturaClinico = 60; 
  let stCoberturaGeneric = 250;
  let stCoberturaAgendado = 0;

  let mdCoberturaClinico = 85;
  let mdCoberturaGeneric = 300;
  let mdCoberturaAgendado = 0;

  let plCoberturaClinico = 115;
  let plCoberturaGeneric = 460;
  let plCoberturaAgendado = 0;
  
  let clinicoGeralCase1 = 100;
  let genericoGeralCase1 = 300;
  
  if (nome !== '' && cpf.length === 14 && dataNascimento.length === 10 && numConvenio !== '') {
    let convenioPlano = numConvenio.slice(0,2);
    
    switch (btnValue) {
      case 'clinico':
        if(convenioPlano === 'ST'){
          if(clinicoGeralCase1 <= stCoberturaClinico){
            console.log("Seu convenio cobre a consulta inteira.");
            window.location.href = "screenCompleteTotem.html";


          }else{
          let valorSubstancialST = clinicoGeralCase1 - stCoberturaClinico;
          console.log(valorSubstancialST);
          //gerar boleto para pagar a diferença - conexão com o APP ou NÚMERO
        }
        }
        if(convenioPlano === 'MD'){
          if(clinicoGeralCase1 <= stCoberturaClinico){
            console.log("Seu convenio cobre a consulta inteira.");
            window.location.href = "screenCompleteTotem.html";

          }else{
          let valorSubstancialMD = clinicoGeralCase1 - mdCoberturaClinico;
          console.log(valorSubstancialMD*1);
          //gerar boleto para pagar a diferença - conexão com o APP ou NÚMERO
          }
        }
        if(convenioPlano === 'PL'){
          if(clinicoGeralCase1 <= plCoberturaClinico){
            console.log("Seu convenio cobre a consulta inteira.");
            window.location.href = "screenCompleteTotem.html";


          }else{
          let valorSubstancialPL = clinicoGeralCase1 - plCoberturaClinico;
          console.log(valorSubstancialPL*1);
          //gerar boleto para pagar a diferença - conexão com o APP ou NÚMERO
          }
        }
      case 'generic':
        if(convenioPlano === 'ST'){
          if(genericoGeralCase1 <= stCoberturaGeneric){
            console.log("Seu convenio cobre a consulta inteira.");
            window.location.href = "screenCompleteTotem.html";


          }else{
            let valorSubstancialSTg = genericoGeralCase1 - stCoberturaGeneric;
            console.log(valorSubstancialSTg);
          }
        }
        if(convenioPlano === 'MD'){
          if(genericoGeralCase1 <= mdCoberturaGeneric){
            console.log("Seu convenio cobre a consulta inteira.");
            window.location.href = "screenCompleteTotem.html";


          }else{
            let valorSubstancialMDg = genericoGeralCase1 - mdCoberturaGeneric;
            console.log(valorSubstancialMDg)
          }
        }
        if(convenioPlano === 'PL'){
          if(genericoGeralCase1 <= plCoberturaGeneric){
            console.log("Seu convenio cobre a consulta inteira.");
            window.location.href = "screenCompleteTotem.html";


          }else{
            let valorSubstancialPLg = genericoGeralCase1 - plCoberturaGeneric;
          }
        }
      

    }
  } else {

    alert('Preencha todos os campos corretamente.');
  }
  console.log(nome);
  console.log(cpf);
  console.log(dataNascimento);
  console.log(numConvenio);
}
