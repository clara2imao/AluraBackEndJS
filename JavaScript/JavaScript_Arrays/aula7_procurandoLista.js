const aluno=["João","Juliana", "Ana", "Caio"];
const medias= [10, 9, 7.5,9];

const listaDeAlunosEMedias =[aluno,medias];

function exibeNomeNota (aluno){
    if (listaDeAlunosEMedias[0].includes(aluno)){
        console.log(`${aluno} está cadastrado!`)

        const indice =listaDeAlunosEMedias[0].indexOf(aluno);
        console.log(indice);

        const mediaDoAluno =listaDeAlunosEMedias[1][indice];
        console.log(mediaDoAluno);
    }else{
        console.log(" Aluno não castrado");
    }

}

exibeNomeNota("João");