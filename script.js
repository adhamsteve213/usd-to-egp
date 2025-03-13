let dollar = document.getElementById('usd');
let geneh = document.getElementById('egp');
let convertButton = document.getElementById('convert');

convertButton.onclick = function() {
    if (dollar.value) {
        geneh.value = parseFloat(dollar.value) * 50.65;
    } else if (geneh.value) {
        dollar.value = parseFloat(geneh.value) / 50.65;
    }
};