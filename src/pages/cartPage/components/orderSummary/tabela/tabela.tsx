import { Link } from "react-router-dom";
import styled from "styled-components"
import { SubTitulo } from "../../../../categoryPage/components/listaPageCategories/styles";

const ContainerLines = styled.div`
    margin-top: 30px;
`;

const Line = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

const Valor = styled.div`
    font-weight: 500;
font-size: 16px;
`;

const ValorTotal = styled.div`
    font-weight: 600;
font-size: 16px;
`;

const Total = styled.h2`
    font-weight: 500;
    font-size: 16px;
`;

function TabelaValor() {
    return (
        <ContainerLines>
                <Line>
                    <SubTitulo>Sub Total</SubTitulo>
                    <Valor>$119.69</Valor>
                </Line>
                <Line>
                    <SubTitulo>Discount</SubTitulo>
                    <Valor>-$13.40</Valor>
                </Line>
                <Line>
                    <SubTitulo>Delivery Fee</SubTitulo>
                    <Valor>-$0.00</Valor>
                </Line>
                <Line>
                    <Total>Grand Total</Total>
                    <ValorTotal>$106.29</ValorTotal>
                </Line>
            </ContainerLines>
    )
}

export default TabelaValor