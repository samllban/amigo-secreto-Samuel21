import { realizarSorteio } from "./realiazarSorteio";

describe('Dado um sorteio de amigo secreto', () => {

    test('Cada participante não sorteie o próprio nome', () => {

        const participantes = [
            'Ana',
            'Catarina',
            'Juliana',
            'Samuel',
            'Vinicius',
            'Nathalia'
        ]

        const sorteio = realizarSorteio(participantes);
        participantes.forEach(participante => {
            const amigoSecreto = sorteio.get(participante)
            expect(amigoSecreto).not.toEqual(participante)
        })
    })
})