const alunos =[
    "clARA",
    "Carol",
    "VINI",
    "MARCUS",
    "INGRID",
    "GESS",
    "MARLON",
    "JOAO",
    "Ana",
    "Caio",
    "Maria",
    "fefe",
    "lucas",
    "luan",
    "regina"
];

const sala1 = alunos.slice(0,alunos.length/2);
const sala2 = alunos.slice(alunos.length/2,13);
console.log(sala1);
console.log(sala2);

// atualizando lista
// Caio e Ana mudaram de escola -> tirar da lista
            //o indice que eu quero remover e quantos eu quero remover e coloca o ultimo termo no lugar
alunos.splice(8,2, "Rodrigo");
console.log(alunos);
// o splice diferente do slice ALTERA o código