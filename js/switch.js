// sorteando um num de 0 a 5 com o Switch
const numero = parseInt(Math.random()*6);
console.log(numero);

switch (numero) {
case 0:
    console.log('o número sorteado é o ZERO');
    break;
case 1:
    console.log('o número sorteado é o UM');
    break;
case 2:
    console.log('o número sorteado é o DOIS');
    break;
case 3:
    console.log('o número sorteado é o TRÊS');
    break;
case 4:
    console.log('o número sorteado é o QUATRO');
    break;
default:
    console.log('o número sorteado é o CINCO');
}

// sorteando um num de 0 a 5 com o IF
if(numero === 0){
    console.log('o número sorteado é ZERO');
}
else if (numero === 1){
    console.log('o número sorteado é ZERO');
}
else if (numero === 2){
    console.log('o número sorteado é UM');
}else if (numero === 3){
    console.log('o número sorteado é DOIS');
}else if (numero === 4){
    console.log('o número sorteado é TRÊS');
}else if    (numero === 5){
    console.log('o número sorteado é QUATRO');
}

const novoNumero = parseInt(Math.random()*101);
console.log(`Novo Número sorteado = ${novoNumero}`);

if (novoNumero <= 20){
    console.log('O número está entre 0 e 20');
}
else {
    console.log('O número não está entre 0 e 20');
}
