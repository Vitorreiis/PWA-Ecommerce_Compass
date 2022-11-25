import Header from "./components/header/header"
import { GlobalStyle } from "./components/GlobalStyle"
import Footer from "./components/footer/footer"
import Banner from "./components/banner/banner"
import Card from "./components/cards/cards"
import styled from "styled-components"
import ListaCards from "./components/listaCards/listaCards"
import CardCollections from "./components/collections/collections"
import ListaBrands from "./components/listaBrands/listaBrands"
import BannerTypes from "./components/bannerTypes/bannerTypes"

const BodyCont = styled.div`
  margin: 0 20px;
`;

function App() {
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

export default App
