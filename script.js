var secretCode = document.getElementById("secretCode");
var codice = document.getElementById("codice");

function mostraCodice() {
    if (codice.value == "3597") {
        secretCode.style.display = "block";
    }
    else {
        alert("Per l'amor del pres, riprova!");
        codice.value = "";
        codice.focus();
    }
}