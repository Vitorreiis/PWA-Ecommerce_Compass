import styled from "styled-components"
import { TituloPage } from "../../../cartPage/components/listaCart/listaCart";
import ProdutoCart from "../../../cartPage/components/listaCart/Produto/Produto";
import OrderSummary, { TituloOrderSumary } from "../../../cartPage/components/orderSummary/orderSummary";
import TabelaValor from "../../../cartPage/components/orderSummary/tabela/tabela";
  
const BodyCont = styled.div`
  margin: 0 20px;
`;

const Container = styled.div`
width: 412px;
height: 545px;

 h1{
        width: 100%;
        font-weight: 600;
        font-size: 20px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.12);
        padding-bottom: 8px;
    }
`;

const LiProduto = styled.div`
margin-bottom: 24px;
`;

const Lista = styled.div`
margin-top: 35px;
`;

const ContainerDetails = styled.div`
margin-top: 75px;
`;

function ContainerRight() {
    return (
        <>
        <Container>
            <TituloOrderSumary>Order Summary</TituloOrderSumary>
            <Lista>
                <LiProduto>
                    <ProdutoCart />
                </LiProduto>
                <LiProduto>
                    <ProdutoCart />
                </LiProduto>
            </Lista>
            <ContainerDetails>
                <TituloOrderSumary>Order Details</TituloOrderSumary>
                <TabelaValor />
            </ContainerDetails>
        </Container>
        </>
    )
}

export default ContainerRight;
