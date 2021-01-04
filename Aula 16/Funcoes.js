
function parOuImpar(n){
    n1 = n % 2;
    
    switch (n1){
        case 1:
        console.log(`O número ${n} é um número IMPAR`);
        return "Impar";
        break;
        case 0: 
        console.log(`O número ${n} é um número PAR`)
        return "Par";
        break;
    }
}
res = parOuImpar(1520);
console.log(`O resultado da função retornou ${res}`)
