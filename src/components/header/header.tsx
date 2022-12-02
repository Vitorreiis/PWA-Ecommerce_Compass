import { Link } from "react-router-dom";
import '../header/styles'
import { HeaderCont, 
    IconsCont, 
    IconsMobile, 
    ImgDesktop, 
    ImgMobile, 
    InputIconCont,
    LiHeader,
    LinkHeader, 
    Logo, 
    LogoMenuCont, 
    LogoMobile, 
    LogoMobileCont, 
    UlCont 
} from "../header/styles";

export function Header() {
    return (
        <HeaderCont>
            <LogoMenuCont>
                <Link to='/'>
                <Logo src="/src/assets/logo.svg" alt="" />
                </Link>
                <UlCont>
                    <Link to="/categories">
                        <LiHeader>
                            <LinkHeader href="">Handbags</LinkHeader>
                        </LiHeader>
                    </Link>
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
                    <button><img src="/src/assets/leading.svg" alt="" /></button>
                    <h1>Home</h1>
                </LogoMobile>
                <IconsMobile>
                    <button><ImgMobile src="/src/assets/addto.svg" alt="" /></button>
                    <button><ImgMobile src="/src/assets/search.svg" alt="" /></button>
                    <button><ImgMobile src="/src/assets/notification.svg" alt="" /></button>
                </IconsMobile>
            </LogoMobileCont>

            <InputIconCont>
                <input type="text" placeholder="Search for products or brands....." />
                <IconsCont>
                    <button><ImgDesktop src="/src/assets/coracao.svg" alt="" /></button>
                    <button><ImgDesktop src="/src/assets/profile.svg" alt="" /></button>
                    <button><ImgDesktop src="/src/assets/bolsa.svg" alt="" /></button>
                </IconsCont>
            </InputIconCont>
        </HeaderCont>
    )
}

export default Header;