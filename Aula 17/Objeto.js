let amigo = {   nome: 'josé', 
                sexo: 'M', 
                peso: 85.4,
                engordar(p=0){
                    console.log('engordou')
                    this.peso += p
                }
}
amigo.engordar(100)
console.log (`${amigo.nome} engordou ${amigo.peso} Kg.`)