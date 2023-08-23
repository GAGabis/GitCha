
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
        const phraseSpeak = input.getAttribute('alt');
        let phraseInstance= new SpeechSynthesisUtterance(phraseSpeak);
        window.speechSynthesis.speak(phraseInstance); 
      }
      input.addEventListener("click", functionTTS);
    })
  }