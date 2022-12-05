import { Link } from "react-router-dom";
import styled from "styled-components"
import { SubTitulo, ImageTitulo } from "../../../categoryPage/components/listaPageCategories/styles";

const Button = styled.div`
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;

        button{
            border: none;
            width: 136px;
            height: 44px;
            font-weight: 600;
            font-size: 14px;
            color: white;
            background: #1B4B66;
            border-radius: 8px;
            padding: 10px 8px;
            :hover{
                cursor: pointer;
            }
        }
`;

function ButtonCart() {
    return (
        <Button>
                <Link to='/cartPage'>
                <a href="">Back to Cart</a>
                </Link>
                <Link to='/payment'>
                <button type="submit">Next</button>
                </Link>
            </Button>
    )
}

export default ButtonCart;
