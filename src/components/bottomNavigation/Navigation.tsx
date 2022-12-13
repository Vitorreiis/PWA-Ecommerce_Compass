import styled from "styled-components";

const Container = styled.div`
    display: none;
    width: 100%;
    position: sticky;
    bottom: 0;

    button{
        display: none;
        h1{
            display: none;
            font-weight: 500;
            font-size: 12px;
        }
        :hover{
            h1{
                display: flex;
            }
        }
    }

    @media (max-width: 1100px){
    display: flex;
}
`;

export function NavigationBottom() {
    return (
       <Container>
        <button>
            <img src="/src/assets/home.svg" alt="" />
            <h1>Home</h1>
        </button>
        <button>Categories</button>
        <button>Profile</button>
        <button>Bag</button>
       </Container>
    )
}

export default NavigationBottom;