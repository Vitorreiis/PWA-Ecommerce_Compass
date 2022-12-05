import { Link } from "react-router-dom";
import styled from "styled-components"
import ProdutoCart from "./Produto/Produto";

const Container = styled.div`
width: 710px;
`;

export const TituloPage = styled.div`
    font-weight: 600;
    font-size: 34px;
    color: #1B4B66;
    margin-bottom: 35px;
`;

const Titulo = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
border-bottom: 1px solid rgba(0, 0, 0, 0.12); ;
padding-bottom: 8px;
    h1{
        font-weight: 500;
        font-size: 16px;
    }
`;

const Precos = styled.div`
    display: flex;
    h1{
        margin-right: 65px;
    }
`;

const Lista = styled.ul`
`;

const Card = styled.li`
    margin-top: 26px;
`;

const InnerCard = styled.li`
    display: flex;
    justify-content: space-between;
`;


const PrecoProduto = styled.li`
    display: flex;
    
    h2{
        font-weight: 400;
        font-size: 14px;
        margin-right: 80px;
    }
`;

const ButtonsCard = styled.div`
    display: flex;
    width: 100%;
    justify-content: end;

    button{
        border: none;
        background-color: transparent;
        text-decoration: underline;
        :hover{
            cursor: pointer;
        }
    }
`;


export const ButtonMove = styled.button`
    color: #1B4B66;
`;

const ButtonRemove = styled.button`
    color: red;
    margin-left: 56px;
    padding-right: 100px;
`;


function ListaCartContainer() {
    return (
        <div>
            <TituloPage>My Cart</TituloPage>
            <Container>
                <Titulo>
                    <h1>Product Name</h1>
                    <Precos>
                        <h1>Price</h1>
                        <h1>Qty</h1>
                        <h1>Subtotal</h1>
                    </Precos>
                </Titulo>

                <Lista>
                    <Card>
                        <InnerCard>
                            <ProdutoCart />
                            <PrecoProduto>
                                <h2>$54.69</h2>
                                <h2>1</h2>
                                <h2>$54.69</h2>
                            </PrecoProduto>
                        </InnerCard>
                        <ButtonsCard>
                            <ButtonMove>Move to Wishlist</ButtonMove>
                            <ButtonRemove>Remove</ButtonRemove>
                        </ButtonsCard>
                    </Card>
                </Lista>
            </Container>
        </div>
    )
}

export default ListaCartContainer;
