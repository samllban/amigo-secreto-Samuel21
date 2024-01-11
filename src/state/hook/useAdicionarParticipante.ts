import { erroState, listaParticipantesState } from "../atom"
import { useRecoilValue, useSetRecoilState} from "recoil";

export const useAdicionarParticipante = () => {
    const setLita = useSetRecoilState(listaParticipantesState)
    const lista = useRecoilValue(listaParticipantesState)
    const setErro = useSetRecoilState(erroState) 
    return (nomeDoParticipante: string) => {
        if (lista.includes(nomeDoParticipante)) {
            setErro('Nomes duplicados não são permitidos!')
            setTimeout(() => {
                setErro("")
            }, 5000)
            return
        }
        return setLita(listaAtual => [...listaAtual, nomeDoParticipante])
    }
}