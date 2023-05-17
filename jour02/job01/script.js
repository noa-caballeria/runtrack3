const buttonElement = document.getElementById("button");
buttonElement.addEventListener("Click", citation);

function citation() {
    const citationElement = document.getElementById("citation");
    const citationText = citationElement.textContent;
    console.log(citationText);
}
citation();