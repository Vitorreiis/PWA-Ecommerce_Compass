import styled from "styled-components";

const BannerCont = styled.div`  
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const InnerBanner = styled.img`
margin: 0 20px;
`;



export function BannerCategory() {
    return (
        <BannerCont>
            <InnerBanner src="/src/assets/bannerCategory.svg"></InnerBanner>
        </BannerCont>
    )
}

export default BannerCategory;