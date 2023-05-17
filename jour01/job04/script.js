function bisextile(annee) {
    if (annee % 4 === 0 && annee % 100 !==0) {
        return true;
    } else {
    return false
    }
}

var annee = prompt("Veuillez saisir une une année :");
annee = parseInt(annee);

if(bisextile(annee)) {
    console.log(annee + " est bisextile.");
} else {
    console.log(annee + " n'est pas bisextile.");
}