const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');


button1.addEventListener('click', () => {
  window.location.href = './indexRegisterType.html?btn=clinico';  
});

button2.addEventListener('click', () => {
  window.location.href = './indexRegisterType.html?btn=generic';
});

button3.addEventListener('click', () => {
  window.location.href = './indexRegisterType.html?btn=agendado';
});
