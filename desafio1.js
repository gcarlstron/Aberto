
/*
PROBLEMA:
Dado um array de números e um valor alvo, escrever um algoritmo que encontre todas as combinações de dois números que somados deem o valor alvo.

Quando uma combinação for encontrada, imprimir os números e os índices correspondentes
Não somar o número de uma posição do array com ele mesmo
Executar o algoritmo com as seguintes entradas:

Array: [1,2,3,4,5,6,7,8,9] / Valor alvo: 10
Array: [3,8,9,6,8,5] / Valor alvo: 10
Array: [4,8,6,1,3,7] / Valor alvo: 7
*/

let array;
let valorAlvo;


array = [1,2,3,4,5,6,7,8,9];
valorAlvo =  10;
comb2(array, valorAlvo)

array = [3,8,9,6,8,5];
valorAlvo = 10;
comb2(array, valorAlvo)

array = [4,8,6,1,3,7];
valorAlvo = 7;
comb2(array, valorAlvo)


function comb2(array, target)
{
    let pos1 = 0;
    let pos2 = 0;

    while (pos1 < array.length) {
        pos2 = pos1 + 1;
        while (pos2 < array.length){
            if (array[pos1] + array[pos2] === target)
                console.log(array[pos1].toString() + "[" + pos1.toString() +  "]", array[pos2].toString() + "[" + pos2.toString() +  "]");
            pos2++;
        }
        pos1++; 
    }
}
