import styled from "styled-components";

const FooterCont = styled.div`
    display: flex;
    background-color: #1B4B66;
    height: 342px;
    width: 100%;
    justify-content: space-between;
    @media (max-width: 1100px){
        height: 100%;
        flex-direction: column;
        padding-top: 24px;

}
`;

const ContainerLinks = styled.div`
    display: flex;
    padding-left: 60px;
    padding-top: 32px;
    h1{
        font-weight: 500;
        font-size: 16px;
        color: white;
    }
    @media (max-width: 1100px){
        flex-direction: column;
        padding-left: 15px;
        padding-top: 0;
}
`;

const UlCont = styled.div`
    padding-right: 68px;

`;

const LiCont = styled.div`
    margin-top: 12px;
    a{
        font-weight: 500;
    font-size: 16px;
    color: #B6B6B6;
    margin-bottom: 8px;

    }
    span{
        display: none;
    }
    @media (max-width: 1100px){
        a{
            display: flex;
        }
        span{
            display: flex;
        }
}
`;

const UlMobile = styled(LiCont)`
    padding-right: 68px;

    @media (max-width: 1100px){
        display: flex;
        flex-wrap: wrap;
        padding-right: 0;
}
`;

const ContainerLinkSide = styled.div`
   padding-top: 30px;
   display: flex;
   flex-direction: column;
   align-items: flex-end;
   padding-right: 60px;
   h4{
    font-weight: 500;
    font-size: 14px;
    color: #B6B6B6;
    margin-top: 8px;
   }
   @media (max-width: 1100px){
        align-items: flex-start;
        padding-right: 0;
        h4{
            padding-left: 16px;
            padding-bottom: 24px;
        }
}
`;


const RedeSocialCont = styled.div`
    img{
        margin-left: 16px;
    }
    @media (max-width: 1100px){
        border-top: solid 1px #3E6F73;
        padding-top: 24px;
        padding-left: 16px;
        width: 95%;
        img{
            margin-left: 0;
            margin-right: 16px;

        }
}
`;

const LocCont = styled.div`
    display: flex;
    align-items: center;
    margin-top: 30px;
    h3{
        color: white;
        font-weight: 500;
        font-size: 14px;
        margin-left: 8px;
    }
    @media (max-width: 1100px){
       padding-left: 16px;
}
`;

const ListaCont = styled.div`
    @media (max-width: 1100px){
       padding-bottom: 20px;
}
`;

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
                    <img src="/src/assets/facebook.svg" alt="" />
                    <img src="/src/assets/instagram.svg" alt="" />
                    <img src="/src/assets/twitter.svg" alt="" />
                    <img src="/src/assets/youtube.svg" alt="" />
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