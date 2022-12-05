import styled from "styled-components";
import { InnerCard } from "./styles";


export function InnerCardCollections({ nomeCollection, imgCollection}: { nomeCollection: string, imgCollection: string}) {
    return (
        <InnerCard href="">
            <img src={imgCollection} alt="" />
            <h2>{nomeCollection}</h2>
        </InnerCard>
    )
}

export default InnerCardCollections;