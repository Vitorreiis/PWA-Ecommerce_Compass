import styled from "styled-components"

const Container = styled.div`
    padding: 0 20px;
    margin-bottom: 90px ;
`;

const ContainerButtons = styled.div`
    display: flex;
    width: 100%;
    height: 48px;
    background: #F1F1F1;
    border-radius: 12px;
    align-items: center;
    margin-bottom: 24px;
    margin-top: 55px;

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        width: 189px;
        height: 32px;
        font-weight: 500;
        font-size: 16px;
        color: #626262;
        border-radius: 8px;


        :hover{
            background: #1B4B66;
            color: white;
            cursor: pointer;
        }
    }
`;


const TextoDescricao = styled.p`
    font-weight: 500;
    font-size: 16px;
    color: #626262;
    width: 90%;

`;

function DescricaoSeletor() {
    return (
        <Container>
            <ContainerButtons>
                <button>Product Description</button>
                <button>Related Products</button>
                <button>Ratings and Reviews</button>
            </ContainerButtons>

            <TextoDescricao>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Risus scelerisque laoreet tortor cras molestie tincidunt malesuada malesuada. 
            Neque, mauris duis dui id morbi magna. Cras lacus, viverra auctor in turpis est quisque eget tristique.<br></br> 
            <br></br>
            Dolor augue mattis duis semper gravida enim eu imperdiet sit. Et pharetra platea pretium nec
            feugiat tincidunt quam leo tristique. Nulla enim consectetur sit et tempus, faucibus leo ac cras. Purus
             ut non eu mus volutpat. <br></br>
             <br></br>
            Eget est vel sagittis amet sit eu eu ullamcorper tellus. Leo mauris, faucibus vulputate adipiscing 
            elementum tristique dictumst augue pellentesque. Justo, sed nunc, pretium turpis scelerisque. Enim urna 
            etiam morbi vestibulum ac dictumst. Ac ut elementum molestie sit felis imperdiet.<br></br>
            </TextoDescricao>
        </Container>
    )
}

export default DescricaoSeletor;
