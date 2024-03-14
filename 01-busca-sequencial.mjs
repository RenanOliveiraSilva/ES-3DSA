//Exemplo de busca sequencial

function buscaSequencial(vetor, valorBusca) {

    for(let i = 0; i < vetor.length; i++) {
        if (vetor[i] === valorBusca) return i; 

    }
    
    return -1;

}

// 1 - Exemplo de busca

// const frutas = ['laranja', 'maçã', 'uva', 'pera', 'jabuticaba', 'limão', 'mamão'];

// console.log("A posição da pera é: " + buscaSequencial(frutas, 'pera'));
// console.log("A posição da uva é: " + buscaSequencial(frutas, 'uva'));
// console.log("A posição da limão é: " + buscaSequencial(frutas, 'limão'));
// console.log("A posição da abacate é: " + buscaSequencial(frutas, 'abacate'));

// 2 - Exemplo de busca

//Importação dos dados
import { nomes } from "./data/vetor-nomes.mjs";

console.log(buscaSequencial(nomes, "LYVIA"));