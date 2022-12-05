import { Link } from "react-router-dom";
import CardCategory from "./card/card";
import { ListaCategoriesCont, SubTitulo, ImageTitulo, Titulo, InnerLista, MenuLista, OptMenu, ContainerLista, InnerMenuLista, ConteudoMenu, ToShow, SelectCont, InnerContLista } from "./styles";


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
            <SubTitulo>
                <Link to='/'>
                <a href="">Home</a>
                </Link> 
                <ImageTitulo src="/src/assets/arrow-black.svg" alt="" /> HandBag
            </SubTitulo>
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


