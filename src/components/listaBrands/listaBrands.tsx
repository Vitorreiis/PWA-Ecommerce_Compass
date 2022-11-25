import styled from "styled-components";
import Card from "../cards/cards";
import {motion} from 'framer-motion';
import { useState, useEffect} from "react";
import { useRef } from "react";
import React from "react";
import CardBrands from "./cardBrands/card";

const ListaCardsCont = styled.div`
    width: 100%;

    h1{
        font-weight: 600;
        font-size: 34px;
        margin-bottom: 24px;
        margin-top: 67px;
    }
`;

const InnerList = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
`;

export function ListaBrands() {

    const carousel = useRef(null);
    const [width, setWidth] = useState(0);


    let arrayCardsBrands = [
        {
            imgBrands: '/src/assets/block-6.svg',
        },
        {
            imgBrands: '/src/assets/block-1.svg',
        },
        {
            imgBrands: '/src/assets/block-2.svg',
        },
        {
            imgBrands: '/src/assets/block-3.svg',
        },
        {
            imgBrands: '/src/assets/block-4.svg',
        },
        {
            imgBrands: '/src/assets/block-5.svg',
        },
    ]


    return (
        <ListaCardsCont as={motion.div} ref= {carousel}>
            <h1>Shop by Brands</h1>
            <InnerList>
            {arrayCardsBrands.map((produto, index) => (
                <CardBrands 
                {...produto}
                />
            ))}
            </InnerList>
        </ListaCardsCont>
    )
}

export default ListaBrands;


