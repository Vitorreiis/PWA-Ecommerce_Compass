import { BannerCont, Description, BannerImg, ContInnerBanner } from "./styles";

export function Banner() {
    return (
        <BannerCont>
            <Description>
                <p>We are currently experiencing 
                    local customs clearance delays. For the latest updates, 
                    lease check your order status <a href="">here</a></p>
            </Description>
            <BannerImg>
                <ContInnerBanner>
                    <h1>Carry your Funk</h1>
                    <p>Trendy handbags collection for your<br></br> party animal</p>
                    <a href=""><img src="/src/assets/seta-white.svg" alt="" /> See more</a>
                </ContInnerBanner>
            </BannerImg>
        </BannerCont>
    )
}

export default Banner;