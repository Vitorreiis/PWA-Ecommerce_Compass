import styled from "styled-components";

export const ListaCategoriesCont = styled.div`
    padding: 0 20px;
    margin-top: 68px;
    width: 100%;
    h2{
        font-weight: 500;
        font-size: 16px;
        color: black;

    }
    a{
        color: #1B4B66;

    }
`;

export const SubTitulo = styled.h2`
    font-weight: 600;
    font-weight: 500;
    font-size: 16px;
    a{
        color: #1B4B66;
    }
`;

export const Titulo = styled.h1`
    font-weight: 600;
    font-size: 34px;
    color: #1B4B66;

`;

export const InnerLista = styled.div`
    display: flex;
    width: 100%;
`;

export const MenuLista = styled.div`
    position: relative;
    top: 40px;
    width: 286px;
    margin-right: 40px;

`;

export const OptMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: solid 1px rgba(0, 0, 0, 0.12);
    margin-bottom: 14px;
    h1{
        font-weight: 500;
        font-size: 16px;
        padding-bottom: 14px;
    }
    button{
        background-color: transparent;
        border: none;
    }
`;


export const ContainerLista = styled.div`
width: 100%;
    
`;

export const InnerContLista = styled.ul`
    display: flex;
`;

export const ImageTitulo = styled.img`
    width: 10px;
    height: 10px;
    margin: 0 20px;
`;

export const InnerMenuLista = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-around;
    margin-bottom: 26px;
    h4{
        font-weight: 500;
        font-size: 16px;
    }

    label{
        font-weight: 500;
        font-size: 16px;
    }
`;

export const ToShow = styled.div`
    input{
        width: 56px;
height: 52px;
background: #F1F1F1;
border: none;
    }
`;

export const SelectCont = styled.div`
    select{
        width: 206px;
        height: 56px;
        background: #F1F1F1;
        border-radius: 4px;
        border: none;
    }
`;

export const ConteudoMenu = styled.div`
    display: flex;
`;