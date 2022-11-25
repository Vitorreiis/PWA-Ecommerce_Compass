import styled from "styled-components";

const InnerCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 280px;
    height: 280px;
    border-radius: 20px;
    justify-content: end;
    margin-right: 40px;

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
    @media (max-width: 1100px){}
`;


export function InnerCardCollections({ nomeCollection, imgCollection}: { nomeCollection: string, imgCollection: string}) {
    return (
        <InnerCard>
            <img src={imgCollection} alt="" />
            <h2>{nomeCollection}</h2>
        </InnerCard>
    )
}

export default InnerCardCollections;