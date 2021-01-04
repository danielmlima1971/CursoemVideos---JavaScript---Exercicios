
function contar(){
    var inicial = document.getElementById("txtI")
    var final = document.getElementById("txtF")
    var passo = document.getElementById("txtP")
    var res = document.getElementById("res")
    var warn = document.getElementById("warning")

    
    
    if (inicial.value.length == 0 || final.value.length == 0 || passo.value.length == 0){
        warn.innerHTML = "[ERRO] Valor vazio em algum campo"
    }else{ 
        res.innerHTML = `Contando`
        i = Number(inicial.value)
        f = Number(final.value)
        p = Number(passo.value)
        
        /*if (p <= 0 ){
            warn.innerHTML = "Impossível contar com passo zero, considerando passo 1"
            p = 1
        }
            */
         
        // Contagem Crescente
        if (i < f && p > 0){
            for (let c = i ; c <= f ; c += p){
            res.innerHTML += ` \u{1F449} ${c.toFixed(2)} `
            warn.innerHTML = ""
            }
        //Contagem Regressiva
        }else if (i > f && p > 0) {
            for (let c = i ; c >= f ; c -= p){
                res.innerHTML += ` \u{1F449} ${c.toFixed(2)} `
                warn.innerHTML = ""
            }
        //Verifica se o valor inicial é igual ao valor final e avisa erro
        }else if (i == f){
            warn.innerHTML = "[ERRO] - Impossivel calcular com valor inicial igual ao valor final"
        
        //Verifica se o valor do passo é <0 e dá erro caso for
        }else{
            warn.innerHTML = "[ERRO] - Valor do Passo não pode ser ZERO ou negativo"

        }
    }
}
