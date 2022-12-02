import { motion } from 'framer-motion';
import { useState, useEffect } from "react";
import { useRef } from "react";
import CardBrands from "./cardBrands/card";
import { ListaCardsCont, InnerList } from "./styles";

export function ListaBrands() {

    const carousel = useRef(null);
    const [width, setWidth] = useState(0);


    let arrayCardsBrands = [
        {
            imgBrands: '/src/assets/block.png',
        },
        {
            imgBrands: '/src/assets/block-1.png',
        },
        {
            imgBrands: '/src/assets/block-2.png',
        },
        {
            imgBrands: '/src/assets/block-3.png',
        },
        {
            imgBrands: '/src/assets/block-4.png',
        },
        {
            imgBrands: '/src/assets/block-5.png',
        },
    ]


    return (
        <ListaCardsCont as={motion.div} ref={carousel}>
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


