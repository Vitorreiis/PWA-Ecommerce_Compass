import styled from "styled-components";
import InputCupom from "../../../../components/inputCupom/inputCupom";
import StarContainer from "../../../../components/star/star";
import CaminhoPages from "../caminhoPages/caminhoPage";

const DescricaoCont = styled.div`
    display: flex;
    padding: 0 20px;
`;

const Carousel = styled.div`
    display: flex;
    flex-direction: column;
`;


const Descricao = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 24px;
`;

const Titulo = styled.h1`
    font-weight: 600;
    font-size: 34px;
    color: #13101E;
`;

const SubTitulo = styled.h3`
    font-weight: 600;
    font-size: 20px;
    color: #626262;
    margin-bottom: 32px;
`;

const TextValor = styled.h2`
    font-weight: 700;
    font-size: 40px;
    margin: 24px 0;
`;

const TextValorTotal = styled.span`
    font-weight: 600;
    font-size: 34px;
    color: #B6B6B6;
`;

const TextDesconto = styled.span`
    font-weight: 600;
font-size: 20px;
color: #FF404B;
`;

const ContainerDelivery = styled.div`
    display: flex;
    border-top: 1px solid rgba(0, 0, 0, 0.12);
    padding-top: 24px;
    margin-bottom: 40px;
`;

const TextoDelivery = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 16px;

    h4{
        font-weight: 600;
        font-size: 20px;
        margin-bottom: 8px;
    }

    h5{
        font-weight: 500;
        font-size: 16px;
        color: #626262;
    }
`;

const CounterContainer = styled.h4`
    display: flex;
    align-items: center;

`;

const Counter = styled.h4`
    display: flex;
    border: 1px solid #1B4B66;
    border-radius: 4px;
    align-items: center;
    background-color: transparent;
    margin-left: 16px;
    margin-bottom: 50px;
    
    button{
        border: none;
        background-color: transparent;
        :hover{
            cursor: pointer;
        }
    }

    h3{
        font-weight: 400;
        font-size: 16px;
        padding: 0 9px;
    }
`;

const CardCarouselCupom = styled.h4`
    display: flex;
    width: 391px;
    height: 96px;
    border: 1px solid #1B4B66;
    border-radius: 8px;
    padding: 15px 16px;
    margin-bottom: 40px;
`;

const DescricaoCupom = styled.h4`
    display: flex;
    flex-direction: column;
    justify-content: center;

    p{
        font-weight: 500;
        font-size: 16px;
    }

    h4{
        font-weight: 500;
        font-size: 14px;
        color: #1B4B66;
        margin-top: 8px;
    }
`;

const Cupom = styled.h4`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #F1F1F1;
    border-radius: 4px;
    padding: 14px 13px;
    gap: 8px;
    width: 109px;
    height: 66px;


    h3{
        font-weight: 500;
        font-size: 14px;
        color: #626262;
    }
    h2{
        font-weight: 500;
        font-size: 16px;
    }
`;

const ContainerButtons = styled.h4`
    display: flex;
    button{
        :hover{
            cursor: pointer;
        }
    }
`;

export const ButtonAddBag = styled.button`
    border: none;
    display: flex;
    width: 240px;
    height: 44px;
    gap: 8px;
    background: #1B4B66;
    border-radius: 8px;
    font-weight: 600;
    font-size: 14px;
    color: white;
    align-items: center;
    justify-content: center;
    :hover{
        cursor: pointer;
    }

    img{
        width: 24px;
        height: 24px;
    }
`;


export const ButtonAddTo = styled.button`
    display: flex;
    width: 150px;
    height: 44px;
    border: 2px solid #1B4B66;
    border-radius: 8px;
    gap: 8px;
    margin-left: 24px;
    align-items: center;
    justify-content: center;
    color: #1B4B66;
    font-weight: 600;
    font-size: 14px;
    :hover{
        cursor: pointer;
    }
    img{
        width: 24px;
        height: 24px;
    }
`;


export function DescricaoProduto() {
    return (
        <DescricaoCont>
            <Carousel>
                <div>
                    <img src="src/assets/carousel-img1.png" alt="" />
                </div>
                <div>
                    <h1>carousel</h1>
                </div>
            </Carousel>
            <Descricao>
                <Titulo>Nome Produto</Titulo>
                <SubTitulo>descricao</SubTitulo>
                <StarContainer />
                <TextValor>$54.69 <TextValorTotal>$78.66</TextValorTotal> <TextDesconto>50%OFF</TextDesconto></TextValor>

                <ContainerDelivery>
                    <TextoDelivery>
                        <h4>Delivery Details</h4>
                        <h5>Check estimated delivery date/pickup option.</h5>
                    </TextoDelivery>
                    <InputCupom />
                </ContainerDelivery>

                <CounterContainer>
                    <h4>Quantity:</h4>
                    <Counter>
                        <button><img src="/src/assets/icon-mais.svg" alt="" /></button>
                        <h3>1</h3>
                        <button><img src="/src/assets/icon-menos.svg" alt="" /></button>
                    </Counter>
                </CounterContainer>
                <CardCarouselCupom>
                    <DescricaoCupom>
                        <p>Get upto 30% Off on order value above $100</p>
                        <h4>Terms & Conditions</h4>
                    </DescricaoCupom>
                    <Cupom>
                        <h3>Use Code</h3>
                        <h2>ORDER100</h2>
                    </Cupom>
                </CardCarouselCupom>

                <ContainerButtons>
                    <ButtonAddBag><img src="src/assets/bag-white.svg" alt="" /> Add to bag</ButtonAddBag>
                    <ButtonAddTo><img src="src/assets/coracao.svg" alt="" /> Add To Wishlist</ButtonAddTo>
                </ContainerButtons>
            </Descricao>
        </DescricaoCont>
    )
}

export default DescricaoProduto;