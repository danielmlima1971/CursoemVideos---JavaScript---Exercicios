
function tabuada(){
    var num = document.getElementById("txtn") // Seleciona o input do numero
    var tab = document.getElementById("seltab") //Seleciona o Select do HTML
    var warn = document.getElementById("warning") // Seleciona um campo para avisos futuros

    if (num.value.length == 0) { // Se o campo estiver vazio emite um aviso
        warn.innerHTML = "Digite um valor"
        tab.innerHTML = ""
    }else{
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = "" // Limpa a lista antes de outra tabuada
        warn.innerHTML = "" // Limpa o aviso
        while(c <= 10){
            let item = document.createElement("option") //cria o elemento no select.
            item.text = `${n} x ${c} = ${n*c}` // text do elemento.
            item.value = `tab${c}` //preicisa sempre ter um "value" nos itens select, mesmo q nao seja usado.
            tab.appendChild(item) // coloca na lista o item criado.
            c++
        }
    }
}
