function verificar(){
    var data = new Date()
    var ano = data.getUTCFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert("[ERRO] Verifique os dados digitados")
    }else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (fsex[0].checked){
            genero = "Homem"
            if (idade >= 0 && idade <13){
                // Criança
                img.setAttribute("src", "bebemasc.jpg")
            }else if (idade <22){
                // Jovem
                img.setAttribute("src", "teenboy.jpg")
            }else if (idade < 60){
                // Adulto
                img.setAttribute("src", "adultmale.jpg")
            }else if (idade > 60){
                // Idoso
                img.setAttribute("src", "oldmale.jpg")
            }

        }
        }if (fsex[1].checked){
            genero = "Mulher"
            if (idade >= 0 && idade <13){
                // Criança
                img.setAttribute("src", "bebefemin.jpg")
            }else if (idade <22){
                // Jovem
                img.setAttribute("src", "teengirl.jpg")
            }else if (idade < 60){
                // Adulto
                img.setAttribute("src", "adultfemale.jpg")
            }else if (idade > 60){
                // Idoso
                img.setAttribute("src", "oldfemale.jpg")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
        
}
