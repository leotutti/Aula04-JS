// sorteando 10 nums
let numeroFor = 0;
for(let i = 0; i <= 9; i++){
   numeroFor = parseInt(Math.random()*101);
   console.log(numeroFor); 
}

console.log('-------------');
console.log('-------------');

// fazer uma contagem entre 0 e 20
for(let i = 0;i <= 20; i++){
    console.log(i);
}

console.log('-------------');
console.log('-------------');

// fazer uma contagem entre 0 e 100 pulando de 5 em 5
for(let i = 0;i <= 100; i+=5){
    console.log(i);
}

// fazer uma contagem regressiva entre 20 e 0
for(let i = 20;i >= 0; i--){
    console.log(i);
}

// sortear um num entre 0 a 10
//  exibir na tela: tabuada desse num no formato:
//  numeroSorteado*10

let numeroTabuada = parseInt(Math.random()*11)
for(let i = 0; i <= 10; i++){
   console.log(`${numeroTabuada} X ${i} = ${numeroTabuada*i}`); 
}