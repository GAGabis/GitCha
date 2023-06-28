function redirecionarParaIndex() {
    window.location.href = "screen1.html";
  }
  
  window.addEventListener("DOMContentLoaded", function() {
    document.documentElement.addEventListener("click", redirecionarParaIndex);
  });
  