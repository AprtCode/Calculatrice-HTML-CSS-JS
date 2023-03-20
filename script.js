function addToResult(value) {
    var result = document.getElementById("result");
    result.value += value;
}

function calculate() {
    var result = document.getElementById("result");
    result.value = eval(result.value);
}
function reset() {
  result.value = "";
}
