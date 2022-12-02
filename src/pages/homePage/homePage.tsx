import styled from "styled-components"
import Banner from "../../components/banner/banner";
import Header from "../../components/header/header";
import { GlobalStyle } from "../../components/GlobalStyle";
import ListaCards from "../../components/listaCards/listaCards";
import CardCollections from "../../components/collections/collections";
import ListaBrands from "../../components/listaBrands/listaBrands";
import BannerTypes from "../../components/bannerTypes/bannerTypes";
import Footer from "../../components/footer/footer";
  
const BodyCont = styled.div`
  margin: 0 20px;
`;

function HomePage() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <BodyCont>
                <Banner />
                <ListaCards />
            </BodyCont>
            <CardCollections />
            <BodyCont>
                <ListaBrands />
                <BannerTypes />
            </BodyCont>
            <Footer />
        </>
    )
}

export default HomePage;
