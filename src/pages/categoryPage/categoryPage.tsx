import styled from "styled-components"
import Banner from "../../components/banner/banner";
import Header from "../../components/header/header";
import ListaCategories from "./components/listaPageCategories/lista";

const BodyCont = styled.div`
  margin: 0 20px;
`;

function CategoryPage() {
  return (
    <>
    <Header />
    <Banner />
    <ListaCategories />
    </>
  )
}

export default CategoryPage
