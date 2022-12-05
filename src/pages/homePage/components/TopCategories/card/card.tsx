import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 60px;
    height: 60px;
    align-items: center;
    margin-right: 16px;
    img{
        width: 60px;
        height: 60px;
    }

    h1{
        font-weight: 500;
        font-size: 12px;
    }
`;

export function CardTop({ nome, img}: { nome: string, img: string}) {
    return (
        <Container>
            <img src={img} alt="" />
            <h1>{nome}</h1>
        </Container>
    )
}

export default CardTop;
