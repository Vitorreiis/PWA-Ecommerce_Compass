import styled from "styled-components";

export const BannerCont = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 68px;
    @media (max-width: 1100px){
    }
`;

export const InnerBannerMed = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    @media (max-width: 1100px){}
`;

export const ContainerCardBanner = styled.div`
    width: 604px;
    height: 228px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    text-align: end;
    border-radius: 20px;
    h1{
        font-weight: 700;
        font-size: 40px;
        margin-top: 26px;
        margin-right: 35px;
    }
    a{
        display: flex;
        margin-top: 21px;
        margin-right: 40px;
        width: 51px;
        height: 51px;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
    }
    @media (max-width: 1100px){
        h1{
            font-weight: 800;
            font-size: 14px;
            margin: 0;
        }

        a{
            width: 26px;
            height: 26px;
            margin: 0;

            img{
                width: 14px;
                height: 9px;
            }
        }
    }
`;

export const ContainerCardBannerOne = styled(ContainerCardBanner)`
    width: 604px;
    height: 228px;
    background-image: url('/src/assets/banner-types2.png');
    background-size: cover;
    background-repeat: no-repeat;
    h1{
        color: #A53F64;
    }

    a{
        background: #F1F1F1;
    }

    @media (max-width: 1100px){
        width: 156px;
        height: 100px;
    }
`;

export const ContainerCardBannerTwo = styled(ContainerCardBanner)`
    width: 604px;
    height: 228px;
    background-image: url('/src/assets/banner-types3.png');
    background-size: cover;
    background-repeat: no-repeat;

    h1{
        color: #1B4B66;
    }

    a{
        background: #C2CCD2;
    }
    @media (max-width: 1100px){
        width: 156px;
        height: 100px;
    }
`;

export const BannerBig = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 400px;
    width: 98%;
    border-radius: 20px;
    padding-left: 40px;
    background-image: url('/src/assets/banner-types1.png');
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 68px;
    margin-bottom: 40px;

    h2{
        font-weight: 400;
        font-size: 30px;
        color: #97451F;

    }
    h1{
        font-weight: 700;
        font-size: 52px;
        color: #97451F;
    }
    @media (max-width: 1100px){
        width: 328px;
        height: 132px;
        margin-bottom: 16px;

        h2{
            font-weight: 400;
            font-size: 10px;
        }

        h1{
            font-weight: 800;
            font-size: 16px;
        }
    }
`;