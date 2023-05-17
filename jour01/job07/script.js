function jourtravaille() {
    const dateStr = prompt("Entrez une date au format 'YYYY-MM-DD'");
    const date = new Date(Date.parse(dateStr));

    const joursFeries = [
    "2020-01-01",
    "2020-04-15",
    "2020-04-18",
    "2020-05-01",
    "2020-05-08",
    "2020-05-26",
    "2020-06-06",
    "2020-07-14",
    "2020-08-15",
    "2020-11-01",
    "2020-11-11",
    "2020-12-25",
    ];

    const dateString = date.getFullYear() + "-" + (date.getMonth() + 1).toString().padStart(2, "0") + "-" + date.getDate().toString().padStart(2, "0");
    if (joursFeries.includes(dateString)) {
    console.log("Le " + dateString + " est un jour férié.");
    return;
    }

    const jourSemaine = date.getDay();
    if (jourSemaine === 0 || jourSemaine === 6) {
        console.log("Non, le " + dateString + " est un week-end.");
        return;
    }

    console.log("Oui, le " + dateString + " est un jour travaillé.");
}
jourtravaille();