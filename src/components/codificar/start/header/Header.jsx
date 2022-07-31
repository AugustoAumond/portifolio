import styled from 'styled-components';


function Header(){
    return(
        <DivHeader>
            <DivTitulo> 
                <h1>Aplicativo de Questionário </h1> 
            </DivTitulo>

            <DivDescription>
                <h3> Venha aprender e se divertir com o aplicativo de perguntas sobre conhecimentos gerais! </h3>
            </DivDescription>
        </DivHeader>
    )
}
export default Header;

const DivHeader = styled.div`
    color: white;
    height: 280px;
    width: 100%;
    max-width: 1350px;
    background: #294232;
    flex-direction: column;
`

const DivTitulo = styled.div`
    display: flex;
    justify-content: flex-start;
    max-width: 400px;
    height: 55px;
    margin: 25px;
    color: white;
`

const DivDescription = styled.div`
display: flex;
max-width: 600px;
color: white;
margin: 20px;
`