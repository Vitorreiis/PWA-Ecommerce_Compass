import styled from "styled-components"
import Header from "../../components/header/header";
import { GlobalStyle } from "../../components/GlobalStyle";
import Footer from "../../components/footer/footer";
import CaminhoPagesCart from "../cartPage/components/caminhoPages/caminhoPages";
import ContainerCartao from "./components/containerCartao/containerCartao";
import ContainerRight from "../checkoutPage/components/ContainerRightLista/container";

const BodyCont = styled.div`
  margin: 0 20px;
`;


const Container = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
`;


function PaymentPage() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <CaminhoPagesCart />
            <BodyCont>
                <Container>
                    <ContainerCartao />
                    <ContainerRight />
                </Container>
            </BodyCont>
            <Footer />
        </>
    )
}

export default PaymentPage;
