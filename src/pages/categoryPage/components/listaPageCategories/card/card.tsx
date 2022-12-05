import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import StarContainer from "../../../../../components/star/star";


const CardCont = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 286px;
    height: 371px;
    margin-right: 40px;
    h2{
        font-weight: 400;
        font-size: 14px;
        color: #626262;
    }

    h3{
        font-weight: 500;
        font-size: 16px;
        margin-top: 8px;
    }
    @media (max-width: 1100px){}
`;


const TituloIconCont = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 8px 0;
    h1{
        font-weight: 500;
        font-size: 16px;
    }
    @media (max-width: 1100px){}
`;


const ButtonLike = styled.button`
    background-color: transparent;
    border: none;
    :hover{
        cursor: pointer;
    }
`;

const Descricao = styled.div`
    display: flex;
    align-items: center;

    h2{
        font-weight: 500;
        font-size: 14px;
        color: #1B4B66;
        margin-left: 16px;
    }
`;

const DescricaoProduto = styled.div`
        font-weight: 500;
        font-size: 14px;
        color: #1B4B66;

`;

const Preco = styled.div`
    display: flex;

    h4{
        font-weight: 500;
        font-size: 16px;
    }
    span{
        font-weight: 400;
        font-size: 14px;
        color: #626262;
        text-decoration-line: line-through;
        margin: 0 6px;
    }
    h5{
        font-weight: 400;
        font-size: 16px;
        color: #E21D1D;
    }
`;

export function CardCategory({ nomeProduto, imgProduto, descricaoProduto, valorProduto, valorSemDesc }: { nomeProduto: string, imgProduto: string, descricaoProduto: string, valorProduto: String, valorSemDesc: String }) {

    const [isChecked, setChecked] = React.useState(false);

    console.log('is checked ', isChecked)

    const handleCheck = () => {
        setChecked((preventState) => !preventState)
    }

    return (
        <Link to='/productPage'>
            <CardCont>
                <img src={imgProduto} alt="" />
                <TituloIconCont>
                    <h1>{nomeProduto}</h1>
                    <ButtonLike onClick={handleCheck}><img src={isChecked ? '/src/assets/coracao-checked.svg' : '/src/assets/like-card.svg'} alt="" /></ButtonLike>
                </TituloIconCont>
                <DescricaoProduto>{descricaoProduto}</DescricaoProduto>
                <Descricao>
                    <StarContainer />
                    <h2>43 Ratings</h2>
                </Descricao>
                <Preco>
                    <h4>{valorProduto} <span>{valorSemDesc}</span></h4>
                    <h5>50% OFF</h5>
                </Preco>
            </CardCont>
        </Link>
    )
}

export default CardCategory;