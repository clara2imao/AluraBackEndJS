const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const SalaJava = [6, 5, 8, 9, 5, 6]
const SalaPython = [7, 3.5, 8, 9.5]

function calculaMedia(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acumulador, nota) => {
        return acumulador + nota;
        // valor inicial da primeira ação
    }, 0);
    console.log(somaDasNotas);
    const media = somaDasNotas / notasDaSala.length
    return media
}

console.log(`A media da sala de JS é ${calculaMedia(salaJS)}`)
console.log(`A media da sala de Java é ${calculaMedia(SalaJava)}`)
console.log(`A media da sala de Python é ${calculaMedia(SalaPython)}`)