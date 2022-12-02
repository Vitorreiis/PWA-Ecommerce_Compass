import styled from "styled-components";

export const FooterCont = styled.div`
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

export const ContainerLinks = styled.div`
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

export const UlCont = styled.div`
    padding-right: 68px;

`;

export const LiCont = styled.div`
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

export const UlMobile = styled(LiCont)`
    padding-right: 68px;

    @media (max-width: 1100px){
        display: flex;
        flex-wrap: wrap;
        padding-right: 0;
}
`;

export const ContainerLinkSide = styled.div`
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


export const RedeSocialCont = styled.div`
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

export const LocCont = styled.div`
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

export const ListaCont = styled.div`
    @media (max-width: 1100px){
       padding-bottom: 20px;
}
`;