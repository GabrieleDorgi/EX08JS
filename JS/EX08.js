var result = 1
var num = parseFloat(prompt("Informe um valor para ser fatorado:"))

for (var a = 1; a <= num; a++) {
    result = a * result
}
alert(result)
