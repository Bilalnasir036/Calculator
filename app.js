function getNumber(mn) {
    var result = document.getElementById("result");
    result.value += mn;
}
function clearResult() {
    var result = document.getElementById("result");
    result.value = "0" 
}
function Result() {
    var result = document.getElementById("result");
    result.value = eval(result.value) 
}