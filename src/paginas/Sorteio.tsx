import { useState } from "react";
import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes";
import { useResultadoSorteio } from "../state/hook/useResultadoDoSorteio";
import Card from "../components/Card";
import './Sorteio.css';

const Sorteio = () => {
    const participantes = useListaDeParticipantes();

    const [participanteDaVez, setParticipanteDaVez] = useState('');
    const [amigoSecreto, setAmigoSecreto] = useState('');

    const resultado = useResultadoSorteio();

    const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        if (resultado.has(participanteDaVez)) {
            setAmigoSecreto(resultado.get(participanteDaVez)!)
        }
    }

    return (<Card>
        <section className="sorteio">
            <h2>Quem vai tirar o papelzinho?</h2>
            <form onSubmit={sortear}>
                <select
                    required name="participanteDavez"
                    id="participanteDavez"
                    placeholder="Selecione o seu nome"
                    value={participanteDaVez}
                    onChange={evento => setParticipanteDaVez(evento.target.value)}
                >
                    <option>Selecione o seu nome</option>
                    {participantes.map(participante => <option key={participante}>{participante}</option>)}
                </select>
                <p>Clique em sortear para ver quem é seu amigo secreto!</p>
                <button>Sortear</button>
            </form>
            {amigoSecreto && <p className="resultado" role="alert">{amigoSecreto}</p>}
            <footer className="sorteio">
                <img src="/imagens/aviao.png" alt="Um desenho de um avião de papel" className="aviao" />
            </footer>
        </section>
    </Card>)
}

export default Sorteio;