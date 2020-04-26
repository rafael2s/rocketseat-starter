// Operações em array
//     const arr = [1, 3, 4, 5, 8, 9];
//     const newArr = arr.map(function(item, index) {
//         return item + index;
//     });
//     console.log(newArr);
//     const soma = arr.reduce(function(total, next) { 
//         return total + next; 
//     });
//     console.log(soma); 
//     const filter = arr.filter(function(item) {
//         return item % 2 === 0;
//     });
//     console.log(filter);
//     const find = arr.find(function(item) {
//         return item === 4;
//     });
//     console.log(find);
// ARROW FUNCTIONS
// const arr = [1, 3, 4, 5, 6];
// const newArr = arr.map(item => item * 2);
// console.log(newArr);
// VALORES PADROES
// const soma = (a = 3, b =6) => a + b;
// console.log(soma(1));
// console.log(soma());
// DESESTRUTURAÇÃO DE OBJETOS
//     const usuario = {
//         nome: 'rafael2s',
//         idade: 32,
//         endereco: {
//             cidade: 'Rio de Janeiro',
//             estado: 'RJ',
//         },
//     };
//    const { nome, idade, endereco: { cidade } } = usuario;
//    console.log(nome);
//    console.log(idade);
//    console.log(cidade);
//    function mostraNome ({ nome, idade}) {
//        console.log(nome, idade);
//    }
//    console.log(usuario);
// OPERADORES REST/SPREAD
// REST - Funcao que pega resto de alguma coisa
//Exemplo 1 - objetos
// const usuario = {
//     nome: 'rafael2s',
//     idade: 32,
//     empresa: '2s'
// };
// const { nome, ...resto } = usuario;
// console.log(nome);
// console.log(resto);
// //Exemplo 2 - array/vetor
// const arr = [1, 2, 3, 4, 5];
// const [a, b, ...c] = arr;
// console.log(a);
// console.log(b);
// console.log(c);
// // FUNCOES
// function soma (a, b, ...params){
//     return params;
// }
// console.log(soma(1, 2, 3, 4, 5, 6, 7, 8, 9,));
// SPREAD - Funcao de propragar, replicar, juntar
// ARRAY
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [...arr1, ...arr2];
// console.log(arr3);
// // OBJETO
// const usuario1 = {
//     nome: 'rafael2s',
//     idade: 32,
//     empresa: '2s technologies'
// };
// const usuario2 = {...usuario1, idade: 40};
// console.log(usuario2);
// TEMPLATES LITERALS - forma de incluir varieveis dentro de string a partir do ES6
// const nome = 'Rafael2s';
// const idade = 32;
// //console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos'); // PADRAO JS
// console.log (`Meu nome é ${nome} e tenho ${idade} anos`); // PADRAO TEMPLATE LITERALS - ES6
// OBJECT SHORT SYNTAX
// const nome = 'Rafael2s';
// const idade = 32;
// const usuario = {
//     nome,
//     idade,
//     empresa: '2s technologies'
// };
// console.log(usuario);
"use strict";
