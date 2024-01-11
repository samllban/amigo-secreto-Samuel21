import { render } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Configuracao from "./Configuracao";

const mockNavegate = jest.fn();

jest.mock('react-router-dom', () => {
    return {
        useNavigate : () => mockNavegate
    }
});

describe('A pagina de configuração', () => {
    test('Deve ser rendenrizada corretamente', () => {
        const { container } = render(<RecoilRoot>
            <Configuracao />
        </RecoilRoot>)
        
        expect(container).toMatchSnapshot();

    });
});