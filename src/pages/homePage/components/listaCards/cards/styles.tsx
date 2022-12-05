import styled from "styled-components";

export const CardCont = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 286px;
    height: 371px;
    margin-right: 40px;
    color: black;
    h2{
        font-weight: 400;
        font-size: 14px;
        color: #626262;
    }

    h3{
        font-weight: 500;
        font-size: 16px;
        margin-top: 8px;
    }
    @media (max-width: 1100px){
        width: 136px;
        height: 202px;

        h2{
            font-weight: 500;
            font-size: 12px;
        }
        h3{
            font-weight: 600;
            font-size: 14px;
        }

        img{
            width: 136px;
            height: 138px;
        }
    }
`;


export const TituloIconCont = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 8px 0;
    h1{
        font-weight: 500;
        font-size: 16px;
    }
    @media (max-width: 1100px){
        h1{
            font-weight: 600;
            font-size: 12px;
        }

        img{
            width: 20px;
height: 20px;
        }
    }
`;


export const ButtonLike = styled.button`
    background-color: transparent;
    border: none;
    :hover{
        cursor: pointer;
    }
`;