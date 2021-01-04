let num = [5,8,2,9,3,6,79,254]
function ordenar(a, b){
    return (a - b); //faz com que o array seja ordenado numericamente em ordem crescente.
  }
    num.sort(ordenar); // Ordena o array chamando a função ordenar
for (var i in num){ //For que só funciona em arrays e objetos
    console.log(num[i]);
}

/*for (var i = 0 ; i < num.length ; i++){
    console.log(num[i])
}
*/
/*
let num = []
num[3] = 6
num.push(7) // coloca o numero na ultima posicao
num.length // devolve o numero de elementos do aaray
num.sort() // coloca todos os elementos em ordem crescente
num.indexOf(7) // pesquisa o array, vê se tem o número passado (7) e retorna 
o index dele, se nao tiver retorna (-1)

*/