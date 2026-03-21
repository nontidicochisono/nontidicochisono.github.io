var secretCode = document.getElementById("secretCode");
var codice = document.getElementById("codice");

function mostraCodice() {
    if (codice.value == "2052") {
        secretCode.style.display = "block";
    }
    else {
        alert("Per l'amor di Muccio, riprova!");
        codice.value = "";
        codice.focus();
    }
}