import { Link } from "react-router-dom";
import styled from "styled-components"
import { SubTitulo, ImageTitulo } from "../../../categoryPage/components/listaPageCategories/styles";

const Container = styled.div`
    padding: 0 20px;
    margin-top: 27px;
    margin-bottom: 19px ;
`;

function CaminhoPagesCart() {
    return (
        <Container>
            <SubTitulo>
                <Link to='/'>
                    <a href="">Home</a> 
                </Link>
                <ImageTitulo src="/src/assets/arrow-black.svg" alt="" /> 
                My Cart
                </SubTitulo>
        </Container>
    )
}

export default CaminhoPagesCart;
