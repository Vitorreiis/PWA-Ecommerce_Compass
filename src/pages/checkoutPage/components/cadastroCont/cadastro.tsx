import { Link } from "react-router-dom";
import styled from "styled-components"

const Container = styled.div`
    padding: 0 20px;
    margin-top: 27px;
    margin-bottom: 19px ;
    width: 750px;
`;

const Titulo = styled.h1`
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 40px;
`;

const InnerContainer = styled.form`
    display: flex;
`;

const InnerCadastroleft = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 30px;
`;


const InputContainer = styled.div`

    h3{
        font-weight: 500;
        font-size: 16px;
    }

    
`;


const InnerCadastroRight = styled.div`
display: flex;
flex-direction: column;
`;

const InputCadastro = styled.input`
        border: none;
        padding: 16px 12px 16px 16px;
        width: 287px;
        background: #F1F1F1;
        border-radius: 4px;
        margin-bottom: 24px;
`;

const InputDD = styled.input`
        border: none;
        background: #F1F1F1;
        border-radius: 4px;
        width: 50px;   
        padding: 16px 12px 16px 16px;
        margin-right: 8px;
`;

const Button = styled.div`
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;

        button{
            border: none;
            width: 136px;
            height: 44px;
            font-weight: 600;
            font-size: 14px;
            color: white;
            background: #1B4B66;
            border-radius: 8px;
            padding: 10px 8px;
            :hover{
                cursor: pointer;
            }
        }
`;



function Cadastro() {
    return (
        <Container>
            <Titulo>Add New Address</Titulo>
            <InnerContainer>
                <InnerCadastroleft onSubmit={() => {}}>
                    <InputContainer>
                        <h3>Full Name</h3>
                        <InputCadastro type="text" placeholder="Enter Name" required/>
                    </InputContainer>
                    <InputContainer>
                        <h3>Street Address</h3>
                        <InputCadastro type="text" placeholder="Enter Address" required/>
                    </InputContainer>
                    <InputContainer>
                        <h3>City</h3>
                        <InputCadastro type="text" placeholder="Enter City" required/>
                    </InputContainer>
                </InnerCadastroleft>
                <InnerCadastroRight>
                    <InputContainer>
                        <h3>Mobile Number</h3>
                        <InputDD type="number" placeholder="+11" required/>
                        <InputCadastro type="tel" required pattern="[0-9]{2} [0-9]{5}-[0-9]{4}" placeholder="Enter Number" />
                    </InputContainer>
                    <InputContainer>
                        <h3>State</h3>
                        <InputCadastro type="text" placeholder="Enter State" required/>
                    </InputContainer>
                    <InputContainer>
                        <h3>Pin Code</h3>
                        <InputCadastro type="text" placeholder="Enter Pin Code" required/>
                    </InputContainer>
                </InnerCadastroRight>
            </InnerContainer>

            <div>
                <Titulo>Select Payment Method</Titulo>
            </div>
            <Button>
                <Link to='/cartPage'>
                <a href="">Back to Cart</a>
                </Link>
                <button type="submit">Next</button>
            </Button>
        </Container>
    )
}

export default Cadastro;
