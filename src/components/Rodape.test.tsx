import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Rodape from "./Rodape";
import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes";

jest.mock('../state/hook/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    }
});

const mockNavigete = jest.fn();
const mockSorteio = jest.fn();

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavigete
    }
});

jest.mock('../state/hook/useSorteador', () => {
    return {
        useSorteador: () => mockSorteio
    }
});

describe('Onde não existem participantes suficientes', () => {
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue([]);
    });
    test('A brincadeira não pode ser iniciada', () => {
        render(<RecoilRoot>
            <Rodape />
        </RecoilRoot>)
        const botao = screen.getByRole('button');
        expect(botao).toBeDisabled();
    });
});

describe('Quando existem participantes suficientes', () => {
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(['Ana', 'Samuel', 'Maria']);
    });
    test('A brincadeira poder iniciada', () => {
        render(<RecoilRoot>
            <Rodape />
        </RecoilRoot>)
        const botao = screen.getByRole('button');
        expect(botao).not.toBeDisabled()
    });
    test('A brincadeira foi iniciada', () => {
        render(<RecoilRoot>
            <Rodape />
        </RecoilRoot>)
        const botao = screen.getByRole('button');
        fireEvent.click(botao);

        expect(mockNavigete).toHaveBeenCalledTimes(1);
        expect(mockNavigete).toHaveBeenCalledWith('/sorteio');
        expect(mockNavigete).toHaveBeenCalledTimes(1);
    });
});

