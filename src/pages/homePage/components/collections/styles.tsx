import styled from 'styled-components';


export const CardCollectionsCont = styled.div`
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
    @media (max-width: 1100px){
        padding: 0;
        margin: 0;
        margin-top: 24px;
        padding-bottom: 16px;
        justify-content: row;
        h1{
            font-weight: 600;
            font-size: 14px;
        }
    }
`;

export const ListaCards = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 1100px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        margin: 0 auto;
        }
`;