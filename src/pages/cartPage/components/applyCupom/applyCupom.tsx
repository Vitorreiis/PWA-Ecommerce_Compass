import styled from "styled-components"
import InputCupom from "../../../../components/inputCupom/inputCupom";

const Container = styled.div`
    padding: 0 20px;
    margin-top: 27px;
    margin-bottom: 19px ;

    h1{
        font-weight: 500;
        font-size: 16px;
        margin-bottom: 43px;
    }
`;

function ApplyCupom() {
    return (
        <Container>
            <h1>Apply Coupon Code</h1>
            <InputCupom />
        </Container>
    )
}

export default ApplyCupom;
