import { BannerCont, BannerBig, InnerBannerMed, ContainerCardBannerOne, ContainerCardBannerTwo } from "./styles";



export function BannerTypes() {
    return (
        <BannerCont>
            <BannerBig href="">
                <h2>LIFESTYLE</h2>
                <h1>Makeup Accessories<br /> from Top Brands</h1>
            </BannerBig>
            <InnerBannerMed>
                <ContainerCardBannerOne>
                    <h1>Skincare<br/> Essentials</h1>
                    <a href=""><img src="/src/assets/arrow-skin.svg" alt="" /></a>
                </ContainerCardBannerOne>
                <ContainerCardBannerTwo>
                    <h1>Facepacks <br />& Peels</h1>
                    <a href=""><img src="src/assets/arrow-peels.svg" alt="" /></a>
                </ContainerCardBannerTwo>
            </InnerBannerMed>
        </BannerCont>
    )
}

export default BannerTypes;