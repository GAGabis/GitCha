window.addEventListener("DOMContentLoaded", function(event) {
    var message = document.getElementById("message");
    var messages = ["O cadastro foi um sucesso!", "Aguarde seu nome para a triagem"];
    var currentIndex = 0;
  
    function updateMessage() {
      message.textContent = messages[currentIndex];
      currentIndex = (currentIndex + 1) % messages.length;
    }
  
    setTimeout(function() {
      updateMessage();
      message.classList.add("fade-in");
  
      setTimeout(function() {
        message.classList.remove("fade-in");
        setTimeout(function() {
          updateMessage();
          message.classList.add("fade-in");
          
        }, 500); 
      }, 100); 
    }, 3000); 
    setTimeout(function() {
        window.location.href = "IndexStarting.html";
      }, 6000);
  });
    