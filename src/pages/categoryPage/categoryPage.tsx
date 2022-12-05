import styled from "styled-components"
import Banner from "../homePage/components/banner/banner";
import Header from "../../components/header/header";
import BannerCategory from "./components/banner/banner";
import ListaCategories from "./components/listaPageCategories/lista";

const BodyCont = styled.div`
  margin: 0 20px;
`;

function CategoryPage() {
  return (
    <>
    <Header />
    <BannerCategory />
    <ListaCategories />
    </>
  )
}

export default CategoryPage
