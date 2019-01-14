/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function filter() {
  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementById("fieldset-small").classList.toggle("fieldset-big");
}
function searchScreen() {
  document.getElementById("searchScreen").classList.toggle("search-screen");
}
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


