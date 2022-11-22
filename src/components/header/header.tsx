import styled from "styled-components";

const HeaderCont = styled.div`
    display: flex;
    width: 100%;
    height: 80px;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    position: sticky;
    top: 0;
`;

const Logo = styled.img`
    width: 108px;
    height: 22px;
    margin-left: 20px;
    @media (max-width: 1100px){
        display: none;
}
`;

const LogoMobileCont = styled.div`
    display: none;
    @media (max-width: 1100px){
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
        padding: 0 20px;
}
`;

const IconsMobile = styled.div`
    @media (max-width: 1100px){
        display: flex;
        width: 120px;
        justify-content: space-around;
    }
`;

const LogoMobile = styled.div`
    display: none;
    @media (max-width: 1100px){
        display: flex;
        h1{
            font-weight: 600;
            font-size: 20px;
            margin-left: 23px;
            color: #1B4B66;
        }
    }
`;

const UlCont = styled.ul`
    display: flex;
    justify-content: space-around;
    margin-left: 32px;
    @media (max-width: 1100px){
        display: none;
}
`;

const LiHeader = styled.li`
    list-style-type: none;
    display: flex;
    margin-right: 20px;
`;

const LinkHeader = styled.a`
    font-weight: 500;
    font-size: 14px;
    color: black;
    text-decoration: none;
`;

const InputIconCont = styled.div`
    display: flex;
    input{
        width: 362px;
        height: 44px;
        background: #F1F1F1;
        font-weight: 500;
        font-size: 14px;
        border: none;
        margin-right: 26px;
        @media (max-width: 1100px){
        display: none;
        }
        
    }
`;

const IconsCont = styled.div`
    width: 114px;
    display: flex;
    justify-content: space-around;
    @media (max-width: 1100px){
        display: none;
        }
`;

const ImgDesktop = styled.img`
        width: 26px;
        height: 26px;
        @media (max-width: 1100px){
        display: none;
        }
`;

const LogoMenuCont = styled.div`
    display: flex;
    align-items: center;
`;

const ImgMobile = styled.img`
    display: none;
    width: 26px;
    height: 26px;
    @media (max-width: 1100px){
        display: flex;
}
`;


export function Header() {
    return (
        <HeaderCont>
            <LogoMenuCont>
                <Logo src="/src/assets/logo.svg" alt="" />
                <UlCont>
                    <LiHeader>
                        <LinkHeader href="">Handbags</LinkHeader>
                    </LiHeader>
                    <LiHeader>
                        <LinkHeader href="">Watches</LinkHeader>
                    </LiHeader>
                    <LiHeader>
                        <LinkHeader href="">Skincare</LinkHeader>
                    </LiHeader>
                    <LiHeader>
                        <LinkHeader href="">Jewellery</LinkHeader>
                    </LiHeader>
                    <LiHeader>
                        <LinkHeader href="">Apparels</LinkHeader>
                    </LiHeader>
                </UlCont>
            </LogoMenuCont>

            <LogoMobileCont>
                <LogoMobile>
                    <img src="/src/assets/leading.svg" alt="" />
                    <h1>Home</h1>
                </LogoMobile>
                <IconsMobile>
                    <ImgMobile src="/src/assets/addto.svg" alt="" />
                    <ImgMobile src="/src/assets/search.svg" alt="" />
                    <ImgMobile src="/src/assets/notification.svg" alt="" />
                </IconsMobile>
            </LogoMobileCont>

            <InputIconCont>
                <input type="text" placeholder="Search for products or brands....." />
                <IconsCont>
                    <ImgDesktop src="/src/assets/coracao.svg" alt="" />
                    <ImgDesktop src="/src/assets/profile.svg" alt="" />
                    <ImgDesktop src="/src/assets/bolsa.svg" alt="" />
                </IconsCont>
            </InputIconCont>
        </HeaderCont>
    )
}

export default Header;