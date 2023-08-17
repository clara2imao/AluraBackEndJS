const notas = [7, 7, 8, 9];

// Ojs entende que a partir desse momento esses arrys estão interligados e alterar um altera o outro
//spread operator, pega todo o conteudo e coloca em novas notas sem ligar entre eles
const novasNotas = [...notas,10];


console.log(novasNotas)
console.log(notas)