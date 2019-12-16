function compra() {
    var compra = document.getElementById("opc").value;
    var total = 0
    if (compra == "Lampada") {
        total += 5.0
    } else if (compra == "Cabos") {
        total += 30.00
    } else if (compra == "Tomada") {
        total += 6.99
    } else if (compra == "Disjuntor") {
        total += 7.90
    } else if (compra == "Fusivel") {
        total += 8.40
    } else if (compra == "Cimento") {
        total += 45.00
    }
    document.getElementById("prev").value = tota
}
function desconto() {
    var desc = document.getElementById("opc1").value
    var prod = Number.parseFloat(document.getElementById("prev").value)
    if (desc == "5") {
        prod -= prod*0.05
    } else if (desc == "7") {
        prod -= prod*0.07
    } else if (desc == "10") {
        prod -= prod*0.10
    } else if (desc == "12") {
        prod -= prod*0.12
    } else if (desc == "15") {
        prod -= prod*0.15
    } else if (desc == "20") {
        prod -= prod*0.20
    }
    document.getElementById("resultado").value = prod
}