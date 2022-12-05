import { Link } from "react-router-dom";
import styled from "styled-components";
import '../header/styles'

const Contaner = styled.div`
display: flex;
    input{
    display: flex;
    width: 350px;
    background: #F1F1F1;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    padding: 18px 12px 18px 16px;
    gap: 12px;
    border: none;
}

button{
    padding: 18px 12px 18px 16px;
    border: none;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background: #F1F1F1;
    color: #1B4B66;
    font-weight: 600;
    font-size: 14px;
    :hover{
        cursor: pointer;
    }
}
`;

export function InputCupom() {
    return (
        <Contaner>
            <input type="text" placeholder="Apply Valid Pincode"/>
            <button>CHECK</button>
        </Contaner>
    )
}

export default InputCupom;