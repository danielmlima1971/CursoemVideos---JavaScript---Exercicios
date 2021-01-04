var agora = new Date() // pega data completa do sistema
var idade = agora.getMinutes() //extrai somente uma parte da data
console.log(`Sua idade é de ${idade} anos`)
if (idade < 16){
    console.log(`Não pode votar`)
}else if (idade < 18 || idade >= 65){
    console.log(`Voto Opcional`)
}else{
    console.log(`Voto obrigatório!`)
}