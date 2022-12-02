import styled from "styled-components";

export const InnerCard = styled.a`
    display: flex;
    flex-direction: column;
    width: 280px;
    height: 280px;
    border-radius: 20px;
    justify-content: end;
    margin-right: 40px;
    text-decoration: none;
    color: black;

    img{
        border-radius: 20px;
    }

    h2{
        font-weight: 600;
        font-size: 24px;
        margin-left: 16px;
        margin-bottom: 16px;
        position: absolute;
    }
    @media (max-width: 1100px){
        width: 156px;
        height: 150px;
        margin-top: 16px;
        h2{
            font-weight: 500;
            font-size: 14px;
        }
    }
`;