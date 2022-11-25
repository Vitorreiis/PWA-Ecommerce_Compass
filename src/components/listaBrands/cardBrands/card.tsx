import styled from "styled-components";

const CardBrandsCont = styled.div`
    img{
        width: 168px;
        height: 168px;
    }
`;

export function CardBrands({imgBrands}: {imgBrands: string,}) {
    return (
        <CardBrandsCont>
            <img src={imgBrands} alt="" />
        </CardBrandsCont>
    )
}

export default CardBrands;