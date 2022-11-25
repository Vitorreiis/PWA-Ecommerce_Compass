import styled from "styled-components";

const BannerCont = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 68px;
    @media (max-width: 1100px){}
`;

const InnerBannerMed = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    @media (max-width: 1100px){}
`;

const ContainerCardBanner = styled.div`
    width: 604px;
    height: 228px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    text-align: end;
    border-radius: 20px;

    ;

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
    @media (max-width: 1100px){}
`;

const ContainerCardBannerOne = styled(ContainerCardBanner)`
    width: 604px;
    height: 228px;
    background-image: url('/src/assets/banner-types2.svg');
    h1{
        color: #A53F64;
    }

    a{
        background: #F1F1F1;
    }

    @media (max-width: 1100px){}
`;

const ContainerCardBannerTwo = styled(ContainerCardBanner)`
    width: 604px;
    height: 228px;
    background-image: url('/src/assets/banner-types3.svg');

    h1{
        color: #1B4B66;
    }

    a{
        background: #C2CCD2;
    }
    @media (max-width: 1100px){}
`;

const BannerBig = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 400px;
    width: 98%;
    border-radius: 20px;
    padding-left: 40px;
    background-image: url('/src/assets/banner-types1.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-color: yellow;
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
    @media (max-width: 1100px){}
`;


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