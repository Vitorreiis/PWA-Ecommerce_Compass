import styled from "styled-components";
import InnerCardCollections from "./card/card";
import { CardCollectionsCont, ListaCards } from "./styles";




export function CardCollections() {

    let arrayCollections = [
        {
            nomeCollection: 'Personal Care',
            imgCollection: 'src/assets/image-collec4.png'
        },
        {
            nomeCollection: 'Handbags',
            imgCollection: 'src/assets/image-collec3.png'
        },
        {
            nomeCollection: 'Wrist Watches',
            imgCollection: 'src/assets/image-collec2.png'
        },
        {
            nomeCollection: 'Sun Glasses',
            imgCollection: 'src/assets/image-collec1.png'
        },
    ]

    return (
        <CardCollectionsCont>
            <h1>Handpicked Collections </h1>
                <ListaCards>
                    {arrayCollections.map((item, index) => (
                        <InnerCardCollections 
                        {...item}
                        />
                    ))}
                </ListaCards>
        </CardCollectionsCont>
    )
}

export default CardCollections;