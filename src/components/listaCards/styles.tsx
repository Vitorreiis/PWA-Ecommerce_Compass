import styled from "styled-components";


export const ListaCardsCont = styled.div`
    width: 100%;
    justify-content: space-between;

    @media (max-width: 1100px){
        
}
`;

export const TituloCont = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    h1{
        font-weight: 600;
        font-size: 34px;
        margin-bottom: 24px;
        margin-top: 68px;
    }

    @media (max-width: 1100px){
        margin-top: 30px;
        margin-bottom: 8px;


        h1{
            font-weight: 600;
        font-size: 14px;
        margin: 0;
        }
}
`;


export const LinkViewAll = styled.div`
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


export const UlCards = styled.div`
    display: flex;
`;