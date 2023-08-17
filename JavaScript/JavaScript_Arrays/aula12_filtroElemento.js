const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5]

//retorna um booleando, se for vdd ele é adicionado na constante

const reprovados = alunos.filter((aluno, indice) => {
    return medias[indice] < 7;
})

console.log(reprovados);