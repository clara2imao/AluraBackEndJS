const alunos=["João","Juliana", "Ana", "Caio"];
const medias= [10, 9, 7.5,9];

const listaDeAlunosEMedias =[alunos,medias];
console.log(listaDeAlunosEMedias);
console.log(listaDeAlunosEMedias[0][1]);//Juliana
console.log(listaDeAlunosEMedias[1][1]);//9

//Outra exemplo
const nomes = ["Ana", "Juliana", "Leonardo"];
const idades = [30, 35, 28];
const faculdade = [false, true, true];

const funcionarios = [nomes, idades, faculdade];

// Primeiro colchetes-> qual dos 3 arrays (0-> nome, 1-> idade, 2->faculdade)
//Segundo colchetes -> acessar qual informação dentro do array
console.log(funcionarios[0][2]);//Leonardo