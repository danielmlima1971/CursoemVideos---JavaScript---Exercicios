var numerosIncl = []; // Declaração aqui por causa do escopo global
var libCalculo = 0 // Variavel de controle para nao apertar 2x seguidas o botao calcular
txtn.focus();

function incluirNumero(){ // vai incluir o numero no select e no array
    var warn = document.getElementById("warning");
    var txtn = document.getElementById("txtn");
    var res = document.getElementById("resultados")
    var qdeDeNumeros = document.getElementById("qdeDeNumeros");
    var somaDosNumeros = document.getElementById("somaDosNumeros");
    var media = document.getElementById("mediaDosNumeros");
    var maiorNumero = document.getElementById("numeroMaior");
    var menorNumero = document.getElementById("numeroMenor");
    var tab = document.getElementById("selNumIncl");
    txtn.focus();
    

        if (txtn.value.length == 0) {
            warn.innerHTML = `Digite um número, você deixou o campo vazio`;
        }else{

            if (numerosIncl.length == 0){ //Verifica se a funcao calcular() já foi chamada para limpar o select
                tab.innerHTML = ``;// Limpa o select
            }

                let item = document.createElement("option") //cria o elemento no select.
                //txtn = Number(txtn.value); // Passa a varável txtn a ser um  number
                item.text = `Número ${txtn.value} adicionado` // text do elemento.
                item.value = `tab${numerosIncl}` //preicisa sempre ter um "value" nos itens select, mesmo q nao seja usado.
                tab.appendChild(item) // coloca na lista o item criado.
                
                //warn.innerHTML = ``;
                qdeDeNumeros.innerHTML = ``;   // Limpa os <resultados>
                somaDosNumeros.innerHTML = ``;  // Limpa os <resultados>
                media.innerHTML = ``;           // Limpa os <resultados>
                maiorNumero.innerHTML = ``;     // Limpa os <resultados>
                menorNumero.innerHTML = ``;     // Limpa os <resultados>
                numerosIncl.push(Number(txtn.value)); // Inclui no array novo número
                warn.innerHTML = `Os números já incluidos são ${numerosIncl}.`; // Atualiza o warn
                libCalculo = 1; // Deixa a liberacao para novas inclusoes


        
    }
    txtn.value = "";
    txtn.focus();
}

function calcular(){

    if (libCalculo == 1){

    var warn = document.getElementById("warning");
    var soma = document.getElementById("resultados");
    var qdeDeNumeros = document.getElementById("qdeDeNumeros");
    var somaDosNumeros = document.getElementById("somaDosNumeros");
    var maiorNumero = document.getElementById("numeroMaior")
    var menorNumero = document.getElementById("numeroMenor")
    var tab = document.getElementById("selNumIncl")
    var qde = numerosIncl.length;
    var soma = 0
    for (var i = 0 ; i < qde ; i++){ // Faz a soma de todos números digitados
        soma = soma + numerosIncl[i];
        var soma1 = Number(soma);
        somaDosNumeros.innerHTML = `A soma dos números incluídos é ${soma1}`; // Exibe o resultado
    }
    qdeDeNumeros.innerHTML = `A quantidade de números na lista é ${numerosIncl.length}`; // Faz a média
    var media = document.getElementById("mediaDosNumeros")
    med = Number(soma1 / numerosIncl.length);
    media.innerHTML = `A média dos números é ${med.toFixed(2)}`; // Exibe a média

    //Ordenar o Array
    function ordenar(a, b){
        return (a - b); //faz com que o array seja ordenado numericamente em ordem crescente.
      }
        numerosIncl.sort(ordenar); // Ordena o array chamando a função ordenar
        
        maior = numerosIncl[numerosIncl.length - 1]; // Verifica o maior e o menor número
        menor = numerosIncl[0];
        maiorNumero.innerHTML = `O maior número é ${maior}`; //Exibe o maior
        menorNumero.innerHTML = `O menor número é ${menor}`; // Exibe o menor

    
    //=================================================================================
    
    numerosIncl = [];   // Zera o array para o próximo cálculo
    libCalculo = 0      /* Bloqueia o botao calcular até serem inseridos novos numeros
                        porque quando o botao calcular era pressionado mais de uma vez seguida
                        ele já tinha zerado o array e acabava mostrando resultados incompatíveis
                        com os números inseridos, mesmo que ainda não os tivesse apagado da tela
                        */
    txtn.value = '';
    txtn.focus();
    
    }else{

    }
    
}
