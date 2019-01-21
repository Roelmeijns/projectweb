/* wanneer de gebruiker klikt op de knop komt class bij */
function filter() {
  document.getElementById("fieldset-small").classList.toggle("fieldset-big");
}

// haalt id model op
var modal = document.getElementById('myModal');

// haalt het id dat de model opent
var btn = document.getElementById("myBtn");

// haalt de class op die de model sluit
var span = document.getElementsByClassName("close")[0];

// wanneer de gebruiker klikt opent de model
btn.onclick = function() {
  modal.style.display = "block";
}

// wanneer de gebuiker op de (x) klikt sluit de model
span.onclick = function() {
  modal.style.display = "none";
}
// haalt id model op
var modal = document.getElementById('fieldset-small');

// haalt het id dat de model opent
var btn = document.getElementById("zoekOpen");

// haalt de class op die de model sluit
var span = document.getElementsByClassName("close")[0];

// wanneer de gebruiker klikt opent de model
h2.onclick = function() {
  modal.style.display = "block";
}

// wanneer de gebuiker op de (x) klikt sluit de model
h2.onclick = function() {
  modal.style.display = "none";
}

