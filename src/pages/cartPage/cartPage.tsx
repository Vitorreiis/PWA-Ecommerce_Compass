import styled from "styled-components"
import Banner from "../homePage/components/banner/banner";
import Header from "../../components/header/header";
import CaminhoPagesCart from "./components/caminhoPages/caminhoPages";
import ListaCartContainer from "./components/listaCart/listaCart";
import OrderSummary from "./components/orderSummary/orderSummary";
import ApplyCupom from "./components/applyCupom/applyCupom";
import Footer from "../../components/footer/footer";

const BodyCont = styled.div`
  margin: 0 20px;
`;

const ContainerLista = styled.div`
width: 100%;
justify-content: space-between;
  display: flex;
`;

function CartPage() {
  return (
    <>
    <Header />
    <CaminhoPagesCart />
    <BodyCont>
    <ContainerLista>
        <ListaCartContainer />
        <OrderSummary />
    </ContainerLista>
    <ApplyCupom />
    </BodyCont>
    <Footer />
    </>
  )
}

export default CartPage
