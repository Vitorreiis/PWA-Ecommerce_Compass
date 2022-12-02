import { FooterCont, ContainerLinks, ListaCont, UlCont, LiCont, UlMobile, ContainerLinkSide, RedeSocialCont, LocCont } from "./styles";


export function Footer() {
    return (
        <FooterCont>
            <ContainerLinks>
            <ListaCont>
            <h1>Shop by Category</h1>
                <UlCont>
                    <LiCont>
                        <a href="">Skincare</a>
                    </LiCont>
                    <LiCont>
                        <a href="">Personal Care</a>
                    </LiCont>
                    <LiCont>
                        <a href="">Handbags</a>
                    </LiCont>
                    <LiCont>
                        <a href="">Apparels</a>
                    </LiCont>
                    <LiCont>
                        <a href="">Watches</a>
                    </LiCont>
                    <LiCont>
                        <a href="">Eye Wear</a>
                    </LiCont>
                    <LiCont>
                        <a href="">Jewellery</a>
                    </LiCont>
                </UlCont>
            </ListaCont>
                <ListaCont>
                <h1>About</h1>
                <UlMobile>
                    <LiCont>
                        <a href="">Contact Us <span>|</span></a>
                    </LiCont>
                    <LiCont>
                        <a href="">About Us <span>|</span></a>
                    </LiCont>
                    <LiCont>
                        <a href="">Careers <span>|</span></a>
                    </LiCont>
                    <LiCont>
                        <a href="">Press <span>|</span></a>
                    </LiCont>
                </UlMobile>
                </ListaCont>
                <ListaCont>
                    <h1>Policy</h1>
                <UlMobile>
                    <LiCont>
                        <a href="">Return Policy<span>|</span></a>
                    </LiCont>
                    <LiCont>
                        <a href="">Terms of Use<span>|</span></a>
                    </LiCont>
                    <LiCont>
                        <a href="">Sitemap<span>|</span></a>
                    </LiCont>
                    <LiCont>
                        <a href="">Security<span>|</span></a>
                    </LiCont>
                    <LiCont>
                        <a href="">Privacy<span>|</span></a>
                    </LiCont>
                    <LiCont>
                        <a href="">EPR Compliance</a>
                    </LiCont>
                </UlMobile>
                </ListaCont>
            </ContainerLinks>
            <ContainerLinkSide>
                <RedeSocialCont>
                    <a href="https://pt-br.facebook.com/"><img src="/src/assets/facebook.svg" alt="" /></a>
                    <a href="https://www.instagram.com/"><img src="/src/assets/instagram.svg" alt="" /></a>
                    <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoicHQifQ%3D%3D%22%7D"><img src="/src/assets/twitter.svg" alt="" /></a>
                    <a href="https://www.youtube.com/"><img src="/src/assets/youtube.svg" alt="" /></a>
                </RedeSocialCont>
                <LocCont>
                    <img src="src/assets/location.svg" alt="" />
                    <h3>Local</h3>
                </LocCont>
                <h4>© 2021 | Cora Leviene All Rights Reserved</h4>
            </ContainerLinkSide>
        </FooterCont>
    )
}

export default Footer;