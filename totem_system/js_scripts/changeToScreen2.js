const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');


button1.addEventListener('click', () => {
  window.location.href = './screen2.html?btn=clinico';  
});

button2.addEventListener('click', () => {
  window.location.href = './screen2.html?btn=generic';
});

button3.addEventListener('click', () => {
  window.location.href = './screen2.html?btn=agendado';
});
