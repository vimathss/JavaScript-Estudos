/* Exercício 3.1: O Conversor de Frequência Cardíaca (Fórmula de Karvonen)

- Enunciado: Crie uma função chamada calcularZonaAlvo que ajude um atleta a saber sua zona de treinamento.
- A função deve receber três parâmetros: idade, frequenciaRepouso e intensidade (um percentual de 0.1 a 1.0).
- A fórmula é: FCM = 220 - idade.
- A Frequência de Reserva é: FR = FCM - frequenciaRepouso.
- O resultado final (Zona Alvo) é: (FR * intensidade) + frequenciaRepouso.
- A função deve retornar uma string formatada: "Sua frequência alvo para X% de intensidade é Y bpm".

*/

function calcularZonaAlvo(idadeAtleta, frequenciaRepouso, intensidade){
    if (isNaN(idadeAtleta) || isNaN(frequenciaRepouso) || isNaN(intensidade)) return `ERRO: As entradas tem que ser números`
    if(intensidade < 0.1 || intensidade > 1) return `ERRO: A intentisdade deve estar entre 0.1 e 1.0`
    var FCM = 220 - idadeAtleta
    var FR = FCM - frequenciaRepouso
    var zonaAlvo = (FR*intensidade) + frequenciaRepouso
    return `Sua frequência alvo para ${intensidade*100}% é ${zonaAlvo} bpm`

}

console.log(calcularZonaAlvo(30, 70, 0.7)) // Sua frequência alvo para 70% é 154 bpm

console.log(calcularZonaAlvo(23, 70, 1.3)) // ERRO: A intentisdade deve estar entre 0.1 e 1.

console.log(calcularZonaAlvo("Abacate", 60, 0.5)) // ERRO: As entradas tem que ser números


 