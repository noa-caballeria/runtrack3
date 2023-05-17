function showhide() {
    var article = document.getElementById("article");

    if (article.innerHTML === "") {
        article.innerHTML = "<p>L'important n'est pas la chute, mais l'atterrissage.</p>";
    } else {
        article.innerHTML = "";
    }
}
showhide();