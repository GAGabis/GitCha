
const urlParams = new URLSearchParams(window.location.search);
const buttonClicked = urlParams.get('btn');
let btnClickedString  = ''
let currentUrl = window.location.href;
localStorage.setItem("currentUrl", currentUrl); 
/*if (buttonClicked === 'clinico') {
  btnClickedString = 'clinico'
  btn = document.getElementById('button4')
  btn.innerHTML = btnClickedString
}
*/



function showPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "block";
  
}
