import styled from "styled-components";
import InnerCardCollections from "./card/card";

const CardCollectionsCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: #1B4B66;
    padding: 0 20px;
    margin-top: 36px;
    padding-bottom: 42px;
    h1{
        font-weight: 600;
        font-size: 34px;
        color: white;
        margin: 32px 0;
    }
    @media (max-width: 1100px){}
`;

const ListaCards = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    @media (max-width: 1100px){}
`;





export function CardCollections() {

    let arrayCollections = [
        {
            nomeCollection: 'Personal Care',
            imgCollection: 'src/assets/image-personal.svg'
        },
        {
            nomeCollection: 'Handbags',
            imgCollection: 'src/assets/image-handbags.svg'
        },
        {
            nomeCollection: 'Wrist Watches',
            imgCollection: 'src/assets/image-wrist.svg'
        },
        {
            nomeCollection: 'Sun Glasses',
            imgCollection: 'src/assets/image-sun.svg'
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