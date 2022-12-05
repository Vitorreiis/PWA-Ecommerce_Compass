import styled from "styled-components"
import Header from "../../components/header/header";
import { GlobalStyle } from "../../components/GlobalStyle";
import Footer from "../../components/footer/footer";
import DescricaoProduto from "./components/descricaoProduto/descrecaoProduto";
import DescricaoSeletor from "./components/DescricaoProductPage";
import CaminhoPages from "./components/caminhoPages/caminhoPage";
  
const BodyCont = styled.div`
  margin: 0 20px;
`;

function ProductPage() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <CaminhoPages />
            <DescricaoProduto />
            <DescricaoSeletor />
            <Footer />
        </>
    )
}

export default ProductPage;
