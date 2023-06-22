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

  console.log(nome);
  console.log(cpf);
  console.log(dataNascimento);
  console.log(numConvenio);
  if (nome == 'gabriel') {
    window.location.href = 'index.html';

  }

}

function toggleClickedState(event) {
  event.preventDefault();
  var whatsappButton = document.querySelector('.whatsapp-button');
  whatsappButton.classList.toggle('clicked');
}

function handleButtonClick(option) {
  if (option === "Sim") {
    console.log("Você clicou em 'Sim'");

    if ('speechSynthesis' in window) {
      var utterance = new SpeechSynthesisUtterance("O assistente foi ativado.");

      // Inicia a síntese de voz
      window.speechSynthesis.speak(utterance);
      eventSpeak();
    } else {
      console.log("A síntese de voz não é suportada neste navegador.");
    }
  } else if (option === "Não") {
    console.log("Você clicou em 'Não'");
  }
}


function eventSpeak() {
  const listInputs = document.querySelectorAll('input');
  
  listInputs.forEach(input => {
    const functionTTS = () => {
      const phraseSpeak = input.getAttribute('name');
      let phraseInstance= new SpeechSynthesisUtterance(phraseSpeak);
      window.speechSynthesis.speak(phraseInstance); 
    }
    input.addEventListener("click", functionTTS);
  })
}