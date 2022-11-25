import styled from "styled-components";

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
`;

export function Card({ nomeProduto, imgProduto, descricaoProduto, valorProduto}: { nomeProduto: string, imgProduto: string, descricaoProduto: string, valorProduto: String}) {
    return (
        <CardCont>
            <img src={imgProduto} alt="" />
            <TituloIconCont>
                <h1>{nomeProduto}</h1>
                <ButtonLike><img src='/src/assets/like-card.svg' alt="" /></ButtonLike>
            </TituloIconCont>
            <h2>{descricaoProduto}</h2>
            <h4>{valorProduto}</h4>
        </CardCont>
    )
}

export default Card;