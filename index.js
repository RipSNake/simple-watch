// Simple watch

var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60); // El resto de los segundos dividido 60. Ejemplo: 1 % 60 = 1; 2 % 60 = 2; etc. Siempre que el numero no sea divisible por 60 va a devolver la diferencia para que sea divisible.
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}