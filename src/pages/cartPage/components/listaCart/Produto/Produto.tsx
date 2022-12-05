import { Link } from "react-router-dom";
import styled from "styled-components"

export const Produto = styled.li`
    display: flex;
    width: 100%;

    img{
        width: 75px;
        height: 80px;
        border-radius: 8px;
        margin-right: 16px;
    }
`;


export const DescricaoProduto = styled.li`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;

    h1{
        font-weight: 500;
        font-size: 16px;
    }

    h2{
        font-weight: 400;
        font-size: 16px;
        color: #626262;
    }
`;

function ProdutoCart() {
    return (
        <Produto>
            <img src="/src/assets/card-image1.png" alt="" />
            <DescricaoProduto>
                <h1>Name</h1>
                <h2>descricao</h2>
                <h2>Qty- 1</h2>
            </DescricaoProduto>
        </Produto>
    )
}

export default ProdutoCart;
