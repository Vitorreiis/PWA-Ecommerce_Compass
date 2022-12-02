import styled from "styled-components";

export const ListaCardsCont = styled.div`
    width: 100%;

    h1{
        font-weight: 600;
        font-size: 34px;
        margin-bottom: 24px;
        margin-top: 67px;
    }

    @media (max-width: 1100px){
        h1{
            font-weight: 600;
            font-size: 14px;
        }
}
    
`;

export const InnerList = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;

    @media (max-width: 1100px){
        flex-wrap: wrap;
}
`;