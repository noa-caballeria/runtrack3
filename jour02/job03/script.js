var button = document.getElementById("button");
var compteur = document.getElementById("compteur");
var count = 0;

button.addEventListener("click", addone);

function addone() {
    count++;
    compteur.innerHTML = count.toString();
}
addone();