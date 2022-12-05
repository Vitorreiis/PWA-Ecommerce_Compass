import { Link } from "react-router-dom";
import styled from "styled-components"
import { ButtonAddBag, ButtonAddTo } from "../../../productPage/components/descricaoProduto/descrecaoProduto";
import { ButtonMove } from "../listaCart/listaCart";

const Container = styled.div`
width: 411px;
height: 100%;
justify-content: space-between;
    h1{
        width: 100%;
        font-weight: 600;
        font-size: 20px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.12);
        padding-bottom: 8px;
    }
`;

const SubTitulo = styled.h2`
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 12px;
    color: #626262;
`;

const Total = styled.h2`
    font-weight: 500;
    font-size: 16px;
`;

const ButtonsCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 40px;
`;

const Valor = styled.div`
    font-weight: 500;
font-size: 16px;
`;

const ValorTotal = styled.div`
    font-weight: 600;
font-size: 16px;
`;


const ContainerLines = styled.div`
    margin-top: 30px;
`;

const Line = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

function OrderSummary() {
    return (
        <Container>
            <ContainerLines>
                <h1>Order Summary</h1>
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

            <ButtonsCont>
                <Link to='/pageCheckout'>
                <ButtonAddBag>Place Order</ButtonAddBag>
                </Link>
                <ButtonAddTo>Continue Shopping</ButtonAddTo>
            </ButtonsCont>
        </Container>
    )
}

export default OrderSummary
