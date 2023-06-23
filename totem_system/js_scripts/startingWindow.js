function redirecionarParaIndex() {
    window.location.href = "index.html";
  }
  
  window.addEventListener("DOMContentLoaded", function() {
    document.documentElement.addEventListener("click", redirecionarParaIndex);
  });
  