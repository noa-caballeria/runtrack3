function isPrime(n) {
    if (n <= 1) {
    return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
        return false;
    }
    }
    return true;
}

function sommenombrespremiers() {
    let nombre1 = parseInt(prompt("Entrez le premier nombre : "));
    let nombre2 = parseInt(prompt("Entrez le deuxième nombre : "));
    
    if (!isPrime(nombre1) || !isPrime(nombre2)) {
    console.log("Les nombres choisis ne sont pas premiers.");
    return false;
    }

    let somme = nombre1 + nombre2;
    console.log(`La somme de ${nombre1} et ${nombre2} est égale à ${somme}.`);
}

sommenombrespremiers();