import { CardBrandsCont } from "./styles";

export function CardBrands({imgBrands}: {imgBrands: string,}) {
    return (
        <CardBrandsCont href="">
            <img src={imgBrands} alt="" />
        </CardBrandsCont>
    )
}

export default CardBrands;