// zad 1
function zmienTekst() {
    document.getElementById("tekst").innerHTML = "Witaj na mojej stronie!";
    alert("No hej");

}

// zad 2
for(var i = 0; i <= 100; i++) {
    if(i % 2 == 0) {
        console.log(i);
    }
}

// zad 3
var result = parseFloat(prompt("Podaj pierwszą liczbę")) + parseFloat(prompt("Podaj drugą liczbę"));
document.getElementById("additionResult").innerHTML = result;

// zad 4
function pageTimer() {
    var date = new Date();
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hour = date.getHours();

    if(minutes < 10) {
        minutes = "0" + minutes;
    }
    if(seconds < 10) {
        seconds = "0" + seconds;
    }

    document.getElementById("timer").innerHTML = hour + ":" + minutes + ":" + seconds;
    setTimeout("pageTimer()",1000);
}
pageTimer()

// zad 5
var winningGuess = Math.floor(Math.random() * 101);
var guesses = 0;
function check() {
    guesses++;
    var guess = document.getElementById("guess").value;
    if(guess == winningGuess) {
        alert("Wygrałeś! Miałeś " + guesses + " prób!");
        location.reload();
    } else {
        if(guess > winningGuess) {
            alert("Strzał zbyt wysoki!");
        } else {
            alert("Strzał zbyt niski!");
        }
    }
}