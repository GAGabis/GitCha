
const urlParams = new URLSearchParams(window.location.search);
const buttonClicked = urlParams.get('btn');
let btnClickedString  = ''

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
