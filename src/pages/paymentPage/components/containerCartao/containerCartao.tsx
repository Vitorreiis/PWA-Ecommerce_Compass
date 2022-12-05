import styled from "styled-components"
import Footer from "../../../../components/footer/footer";
import { GlobalStyle } from "../../../../components/GlobalStyle";
import Header from "../../../../components/header/header";
import ButtonCart from "../../../checkoutPage/components/buttons/button";

const Container = styled.div`
margin-bottom: 150px;
`;

const Payments = styled.div`
display: flex;
`;

const Options = styled.div`
display: flex;
justify-content: space-between;
    width: 708px;
    height: 26px;
    margin-bottom: 75px;
`;

const TituloOpt = styled.h1`
    font-weight: 600;
    font-size: 20px;
`;


const Icon = styled.img`
    width: 24px;
    height: 24px;
`;

const Radio = styled.div`
    display: flex;
    width: 160px;
    height: 143px;
    background: white;
    align-items: center;
    border-radius: 12px;

    img{
    }
`;

const RadioChecked = styled(Radio)`
    background: #F3F7F7;
`;

const ContainerInfochecked = styled.div`
    width: 709px;
    background: #F3F7F7;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    margin-top: 60px;
`;

const ContainerInfo = styled.div`
    width: 709px;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
`;

const InputTexto = styled.input`
    width: 287px;
    border: 1px solid #639599;
    border-radius: 4px;
    background: #FFFFFF;
    font-weight: 400;
    font-size: 16px;
    padding: 12px 0 12px 8px;

`;

const InputRadio = styled.input`
   margin-right: 30px;

`;

const Opt = styled.div`
   display: flex;
   flex-direction: column;

   img{
    width: 166px;
    height: 69px;
    margin-bottom: 12px;
   }

   h5{
    font-weight: 500;
    font-size: 12px;
    color: #A7A7A7;
    margin: 8px 0;
   }

`;

function ContainerCartao() {
    return (
        <>
            <Container>
                
                <Options>
                    <TituloOpt>Contact Information</TituloOpt>
                    <Icon src="/src/assets/seta-cima.svg" alt="" />
                </Options>
                <Options>
                    <TituloOpt>Payments</TituloOpt>
                    <Icon src="/src/assets/seta-cima.svg" alt="" />
                </Options>
                <Payments>
                <RadioChecked>
                    <input type="radio" checked/>
                    <img src="/src/assets/UPI.png" alt="" />
                </RadioChecked>
                <Radio>
                    <input type="radio" />
                    <img src="/src/assets/credito.png" alt="" />
                </Radio>
                <Radio>
                    <input type="radio" />
                    <img src="/src/assets/Pay.png" alt="" />
                </Radio>
                <Radio>
                    <input type="radio" />
                    <img src="/src/assets/amazom.png" alt="" />
                </Radio>
                </Payments>

                <ContainerInfochecked>
                    <Opt>
                        <img src="/src/assets/logo-googleplay.png" alt="" />
                        <InputTexto type="text" placeholder="Enter your UPI Id"/>
                        <h5>Eg: 1234567890@ybl</h5>
                        <div>
                        <input type="checkbox" id="check" />
                        <label htmlFor="check">Save this for future transactions</label>
                        </div>
                    </Opt>
                    <InputRadio type="radio" />
                </ContainerInfochecked>
                <ContainerInfo>
                    <Opt>
                        <img src="/src/assets/phoneLogo.png" alt="" />
                    </Opt>
                    <InputRadio type="radio" />
                </ContainerInfo>
                <ContainerInfo>
                    <Opt>
                        <img src="/src/assets/logoPay.png" alt="" />
                    </Opt>
                    <InputRadio type="radio" />
                </ContainerInfo>
                <ButtonCart />
            </Container>

        </>
    )
}

export default ContainerCartao;
