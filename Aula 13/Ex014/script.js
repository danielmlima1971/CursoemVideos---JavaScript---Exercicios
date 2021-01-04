function carregar(){
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    
    if (hora < 12){
        msg.innerHTML = `Bom dia!! Agora são ${hora} horas e ${minuto} minutos`
        document.body.style.background = "#e2cd9f"
    }else if (hora < 19){
        msg.innerHTML = `Boa tarde!! Agora são ${hora} horas e ${minuto} minutos`
        img.src = "tarde.jpg"
        document.body.style.background = `#b9846f`
    }else {
        msg.innerHTML = `Boa noite!! Agora são ${hora} horas e ${minuto} minutos`
        img.src = "noite.jpg"
        document.body.style.background = `#515154`
    }
}