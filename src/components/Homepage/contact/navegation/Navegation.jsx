import styled from "styled-components"

function Navegation (){
    return (
        <DivNavegation>
            <header>
                <ul>
                    <li> Projetos</li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </header>
        </DivNavegation>
    )
}
export default Navegation;

const DivNavegation = styled.div`
height: 70px;
width: 100%;

    header {
        margin: 0 auto;
        width: 80%;
    }

    ul {
        display: flex;
        justify-content: space-around;       
    }
`