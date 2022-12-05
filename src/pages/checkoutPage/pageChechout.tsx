import styled from "styled-components"
import Header from "../../components/header/header";
import { GlobalStyle } from "../../components/GlobalStyle";
import CaminhoPagesCheckout from "./components/caminhoPages/caminhoPages";
import Cadastro from "./components/cadastroCont/cadastro";
import ContainerRight from "./components/ContainerRightLista/container";
import Footer from "../../components/footer/footer";

const BodyCont = styled.div`
  margin: 0 20px;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;



function PageCheckout() {
  return (
    <>
      <Header />
      <BodyCont>
        <CaminhoPagesCheckout />
        <Container>
          <Cadastro />
          <ContainerRight />
        </Container>
      </BodyCont>
      <Footer />
    </>
  )
}

export default PageCheckout;
