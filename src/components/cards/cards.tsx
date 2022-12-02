import React from "react";
import { CardCont, TituloIconCont, ButtonLike } from "./styles";

export function Card({ nomeProduto, imgProduto, descricaoProduto, valorProduto}: { nomeProduto: string, imgProduto: string, descricaoProduto: string, valorProduto: String}) {

    const [isChecked, setChecked] = React.useState(false);

    console.log('is checked ', isChecked)

    const handleCheck = () => {
        setChecked((preventState) => !preventState)
    }

    return (
        <CardCont>
            <img src={imgProduto} alt="" />
            <TituloIconCont>
                <h1>{nomeProduto}</h1>
                <ButtonLike onClick={handleCheck}><img src={isChecked ? '/src/assets/coracao-checked.svg' : '/src/assets/like-card.svg'} alt="" /></ButtonLike>
            </TituloIconCont>
            <h2>{descricaoProduto}</h2>
            <h4>{valorProduto}</h4>
        </CardCont>
    )
}

export default Card;