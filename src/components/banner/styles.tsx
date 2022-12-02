import styled from "styled-components";

export const BannerCont = styled.div`
`;

export const Description = styled.div`
    height: 50px;
    width: 100%;
    background: #F0F0F0;
    display: flex;
    justify-content: center;
    align-items: center;
    
    p{
        font-weight: 400;
        font-size: 14px;
    }

    a{
        font-weight: 400;
        font-size: 14px;
        color: #1B4B66;
        text-decoration: underline;
    }
    @media (max-width: 1100px){
        display: none;
    }
`;


export const BannerImg = styled.div`
    height: 25rem;
    background-image: url('/src/assets/banner-home1.png');
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 24px;
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: end;
    @media (max-width: 1100px){
        width: 100%;
        height: 130px;
        border-radius: 8px;
    }
`;


export const ContInnerBanner = styled.div`
    width: 710px;
    height: 316px;
    background: rgba(222, 222, 222, 0.7);
    border-top-left-radius: 24px;
    border-bottom-left-radius: 24px;
    display: flex;
    flex-direction: column;
    padding-left: 47px;
    padding-top: 25px;

    h1{
        font-weight: 800;
        font-size: 60px;
        color: #1B4B66;
    }

    p{
        font-weight: 500;
        font-size: 28px;
        color: #1B4B66;
        margin-top: 10px;
        margin-bottom: 31px;
    }

    a{
        display: flex;
        width: 180px;
        height: 44px;
        background-color: #1B4B66;
        align-items: center;
        color: white;
        justify-content: center;
        border-radius: 8px;
    }

    img{
        margin-right: 8px;
    }
    @media (max-width: 1100px){
        width: 211px;
        height: 80px;
        a{
            display: none;
        }

        h1{
            font-size: 24px;
        }

        p{
            font-size: 12px;
        }
    }
`;