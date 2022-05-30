import styled from 'styled-components';

function Img(){
    return (
        <DivImg>
            <Image src={`${process.env.PUBLIC_URL}/img/utilizar2.jpg`} alt=""></Image>
        </DivImg>
    )
}
export default Img;

const DivImg = styled.div`
width: 100%;
display: flex;
top: 100px;
position: relative;
`

const Image = styled.img`
margin: 0 auto;
height: 300px;
background: white;
`