import { motion } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";
import Card from "../listaCards/cards/cards";
import { UlCards } from "../listaCards/styles";
import CardTop from "./card/card";

const Container = styled.div`
margin-top: 18px;
display: none;
    h1{
        font-weight: 600;
        font-size: 14px;
        margin-bottom: 8px;
    }

    @media (max-width: 1100px){
        display: block;
    }
`;

export function TopCategories() {

    const carousel = useRef(null);

    let Cards = [
        {
            nome: 'Skincare',
            img: 'src/assets/Top0.png'
        },
        {
            nome: 'Jewellery',
            img: 'src/assets/Top1.png'
        },
        {
            nome: 'Handbags',
            img: 'src/assets/Top2.png'
        },
        {
            nome: 'Watches',
            img: 'src/assets/Top3.png'
        },
        {
            nome: 'Eyewear',
            img: 'src/assets/Top4.png'
        }
    ]

    return (
        <Container as={motion.div} ref= {carousel}>
            <h1>Top Categories</h1>
            <UlCards as={motion.div} drag="x" dragConstraints={{right: 0, left: -300}}>
            {Cards.map((produto, index) => (
                <CardTop 
                {...produto}
                />
            ))}
            </UlCards>
        </Container>
    )
}

export default TopCategories;