import styled from "styled-components";
import Card from "../cards/cards";
import {motion} from 'framer-motion';
import { useState, useEffect} from "react";
import { useRef } from "react";
import React from "react";

const ListaCardsCont = styled.div`
    width: 100%;
    height: 500px;
    justify-content: space-between;
`;

const TituloCont = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    h1{
        font-weight: 600;
        font-size: 34px;
        margin-bottom: 24px;
        margin-top: 68px;
    }
`;


const LinkViewAll = styled.div`
    display: flex;
    align-items: center;
    a{
        display: flex;
        background-color: transparent;
        border: none;
        position: relative;
        bottom: -1px;
    }

    h2{
        font-weight: 600;
        font-size: 14px;
        color: #1B4B66;
        margin-right: 16px;
    }
`;


const UlCards = styled.div`
    display: flex;
`;


export function ListaCards() {

    const carousel = useRef(null);
    const [width, setWidth] = useState(0);


    let arrayCards = [
        {
            nomeProduto: 'Grande',
            imgProduto: '/src/assets/image-card1.svg',
            descricaoProduto: 'Blossom Pouch',
            valorProduto: '$39.49',
        },
        {
            nomeProduto: 'Coach',
            imgProduto: '/src/assets/image-card2.svg',
            descricaoProduto: 'Leather Coach Bag',
            valorProduto: '$54.69',
        },
        {
            nomeProduto: 'Remus',
            imgProduto: '/src/assets/image-card3.svg',
            descricaoProduto: 'Brown Strap Bag',
            valorProduto: '$57.00',
        },
        {
            nomeProduto: 'Boujee',
            imgProduto: '/src/assets/image-card4.svg',
            descricaoProduto: 'Black Bag',
            valorProduto: '$56.49',
        },
    ]

    useEffect(() => {}, [])

    return (
        <ListaCardsCont as={motion.div} ref= {carousel}>
            <TituloCont>
                <h1>New Arrivals</h1>
                <LinkViewAll>
                    <h2>View All</h2>
                    <a><img src="src/assets/arrow-black.svg" alt="" /></a>
                </LinkViewAll>
            </TituloCont>
            <UlCards as={motion.div} drag="x" dragConstraints={{right: 0, left: -600}}>
            {arrayCards.map((produto, index) => (
                <Card 
                {...produto}
                />
            ))}
            </UlCards>
        </ListaCardsCont>
    )
}

export default ListaCards;


