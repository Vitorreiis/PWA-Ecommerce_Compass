import { Link } from "react-router-dom";
import styled from "styled-components"
import { ButtonAddBag, ButtonAddTo } from "../../../productPage/components/descricaoProduto/descrecaoProduto";
import { ButtonMove } from "../listaCart/listaCart";
import TabelaValor from "./tabela/tabela";

const Container = styled.div`
width: 411px;
height: 100%;
justify-content: space-between;
`;

const SubTitulo = styled.h2`
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 12px;
    color: #626262;
`;



const ButtonsCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 40px;
`;

export const TituloOrderSumary = styled.h1`
        width: 100%;
        font-weight: 600;
        font-size: 20px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.12);
        padding-bottom: 8px;
`;

function OrderSummary() {
    return (
        <Container>
            <TituloOrderSumary>Order Summary</TituloOrderSumary>
            <TabelaValor />
            <ButtonsCont>
                <Link to='/pageCheckout'>
                <ButtonAddBag>Place Order</ButtonAddBag>
                </Link>
                <Link to='/'>
                <ButtonAddTo>Continue Shopping</ButtonAddTo>
                </Link>
            </ButtonsCont>
        </Container>
    )
}

export default OrderSummary
