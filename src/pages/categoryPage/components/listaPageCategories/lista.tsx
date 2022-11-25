import styled from "styled-components";
import Card from "../../../../components/cards/cards";
import { motion } from 'framer-motion';
import { useState, useEffect } from "react";
import { useRef } from "react";
import React from "react";
import CardCategory from "./card/card";

const ListaCategoriesCont = styled.div`
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

const SubTitulo = styled.h2`
    font-weight: 600;
    font-size: 34px;
    color: #1B4B66;
`;

const Titulo = styled.h1`
    font-weight: 600;
    font-size: 34px;
    color: #1B4B66;

`;

const InnerLista = styled.div`
    display: flex;
    width: 100%;
`;

const MenuLista = styled.div`
    position: relative;
    top: 40px;
    width: 286px;
    margin-right: 40px;

`;

const OptMenu = styled.div`
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


const ContainerLista = styled.div`
width: 100%;
    
`;

const InnerContLista = styled.ul`
    display: flex;
`;

const ImageTitulo = styled.img`
    width: 10px;
    height: 10px;
`;

const InnerMenuLista = styled.div`
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

const ToShow = styled.div`
    input{
        width: 56px;
height: 52px;
background: #F1F1F1;
border: none;
    }
`;

const SelectCont = styled.div`
    select{
        width: 206px;
        height: 56px;
        background: #F1F1F1;
        border-radius: 4px;
        border: none;
    }
`;

const ConteudoMenu = styled.div`
    display: flex;
`;

export function ListaCategories() {

    let arrayCardsCategory = [
        {
            nomeProduto: 'Grande',
            imgProduto: '/src/assets/image-card1.svg',
            descricaoProduto: 'Blossom Pouch',
            valorProduto: '$39.49',
            valorSemDesc: '78.66'
        },
        {
            nomeProduto: 'Coach',
            imgProduto: '/src/assets/image-card2.svg',
            descricaoProduto: 'Leather Coach Bag',
            valorProduto: '$54.69',
            valorSemDesc: '78.66'
        },
        {
            nomeProduto: 'Remus',
            imgProduto: '/src/assets/image-card3.svg',
            descricaoProduto: 'Brown Strap Bag',
            valorProduto: '$57.00',
            valorSemDesc: '78.66'
        },
    ]

    
    return (
        <ListaCategoriesCont>
            <SubTitulo><a href="">Home</a> <ImageTitulo src="/src/assets/arrow-black.svg" alt="" /> HandBag</SubTitulo>
            <Titulo>Handbags</Titulo>
            <InnerLista>
                <MenuLista>
                    <OptMenu>
                        <h1>Size</h1>
                        <button><img src="/src/assets/icon-opt-categ.svg" alt="" /></button>
                    </OptMenu>
                    <OptMenu>
                        <h1>Color</h1>
                        <button><img src="/src/assets/icon-opt-categ.svg" alt="" /></button>
                    </OptMenu>
                    <OptMenu>
                        <h1>Brand</h1>
                        <button><img src="/src/assets/icon-opt-categ.svg" alt="" /></button>
                    </OptMenu>
                    <OptMenu>
                        <h1>Price Range</h1>
                        <button><img src="/src/assets/icon-opt-categ.svg" alt="" /></button>
                    </OptMenu>
                    <OptMenu>
                        <h1>Discount</h1>
                        <button><img src="/src/assets/icon-opt-categ.svg" alt="" /></button>
                    </OptMenu>
                    <OptMenu>
                        <h1>Availability</h1>
                        <button><img src="/src/assets/icon-opt-categ.svg" alt="" /></button>
                    </OptMenu>
                </MenuLista>
                <ContainerLista>
                    <InnerMenuLista>
                        <ConteudoMenu>
                            <img src="/src/assets/icon-MenuCategory2.svg" alt="" />
                            <img src="/src/assets/icon-MenuCategory1.svg" alt="" />
                            <h4>Showing 1 - 40 of 145 items</h4>
                        </ConteudoMenu>
                        <ToShow>
                            <label htmlFor="ToShow">To Show: </label>
                            <input type="text" />
                        </ToShow>
                        <SelectCont>
                            <label htmlFor="">Sort By: </label>
                            <select name="SortBy" id="">
                                <option value="">Position</option>
                            </select>
                        </SelectCont>
                    </InnerMenuLista>
                    <InnerContLista>
                        {arrayCardsCategory.map((produto, index) => (
                            <CardCategory key={index}
                                {...produto}
                            />
                        ))}

                    </InnerContLista>
                </ContainerLista>
            </InnerLista>
        </ListaCategoriesCont>
    )
}

export default ListaCategories;


