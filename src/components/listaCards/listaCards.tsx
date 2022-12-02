import styled from "styled-components";
import Card from "../cards/cards";
import {motion} from 'framer-motion';
import { useState, useEffect} from "react";
import { useRef } from "react";
import React from "react";
import { ListaCardsCont, TituloCont, LinkViewAll, UlCards } from "./styles";




export function ListaCards() {

    const carousel = useRef(null);
    const [width, setWidth] = useState(0);


    let arrayCards = [
        {
            nomeProduto: 'Grande',
            imgProduto: '/src/assets/card-image1.png',
            descricaoProduto: 'Blossom Pouch',
            valorProduto: '$39.49',
        },
        {
            nomeProduto: 'Coach',
            imgProduto: '/src/assets/card-image2.png',
            descricaoProduto: 'Leather Coach Bag',
            valorProduto: '$54.69',
        },
        {
            nomeProduto: 'Remus',
            imgProduto: '/src/assets/card-image3.png',
            descricaoProduto: 'Brown Strap Bag',
            valorProduto: '$57.00',
        },
        {
            nomeProduto: 'Boujee',
            imgProduto: '/src/assets/card-image4.png',
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
            <UlCards as={motion.div} drag="x" dragConstraints={{right: 0, left: -300}}>
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


