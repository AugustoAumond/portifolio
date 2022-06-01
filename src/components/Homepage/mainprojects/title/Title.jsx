import styled from 'styled-components';

function Title (){
    return (
        <DivTitle>
            <h1>PRINCIPAIS PROJETOS</h1>
        </DivTitle>
    )
}
export default Title;

const DivTitle = styled.div`
color: white;
text-align: center;
position: relative;
top: 25px;


    h1 {
    @media (max-width: 900px){
        font-size: 22px;
    }
`



