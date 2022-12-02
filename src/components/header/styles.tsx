import styled from 'styled-components';

export const HeaderCont = styled.header`
display: flex;
width: 100%;
height: 80px;
align-items: center;
justify-content: space-between;
background-color: white;
position: sticky;
top: 0;
`;

export const Logo = styled.img`
width: 108px;
height: 22px;
margin-left: 20px;
@media (max-width: 1100px){
    display: none;
}
`;

export const LogoMobileCont = styled.div`
display: none;
@media (max-width: 1100px){
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 0 20px;
}
`;

export const IconsMobile = styled.div`
button{
    background-color: transparent;
    border: none;
}
@media (max-width: 1100px){
    display: flex;
    width: 120px;
    justify-content: space-around;
}
`;

export const LogoMobile = styled.div`
display: none;
@media (max-width: 1100px){
    display: flex;
    h1{
        font-weight: 600;
        font-size: 20px;
        margin-left: 23px;
        color: #1B4B66;
    }
    button{
        background-color: transparent;
        border: none;
    }
}
`;

export const UlCont = styled.ul`
display: flex;
justify-content: space-around;
margin-left: 32px;
@media (max-width: 1100px){
    display: none;
}
`;

export const LiHeader = styled.li`
list-style-type: none;
display: flex;
margin-right: 20px;
`;

export const LinkHeader = styled.a`
font-weight: 500;
font-size: 14px;
color: black;
text-decoration: none;
`;

export const InputIconCont = styled.div`
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

export const IconsCont = styled.div`
width: 114px;
display: flex;
justify-content: space-around;

button{
    background-color: transparent;
    border: none;
}
@media (max-width: 1100px){
    display: none;
    }
`;

export const ImgDesktop = styled.img`
    width: 26px;
    height: 26px;
    @media (max-width: 1100px){
    display: none;
    }
`;

export const LogoMenuCont = styled.div`
display: flex;
align-items: center;
`;

export const ImgMobile = styled.img`
display: none;
width: 26px;
height: 26px;
@media (max-width: 1100px){
    display: flex;
}
`;
