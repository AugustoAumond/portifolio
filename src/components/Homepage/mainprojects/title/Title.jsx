import styled from 'styled-components';

function Title (){
    return (
        <DivTitle>
            <h1>P R I N C I P A I S  P R O J E T O S</h1>
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



