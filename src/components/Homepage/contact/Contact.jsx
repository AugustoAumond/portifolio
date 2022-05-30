import styled from 'styled-components'

import Img from './img/Img';
import Datas from './datas/Datas';
import History from './history/History';
import Network from './network/Network';

function Contact (){
    return (
        <DivContact>
            <Div>
                <Img/>

                <Datas/>
                   
                <History/>

                <Network/>
                
            </Div>
        </DivContact>
    )
}

export default Contact;

const DivContact = styled.div`
width: 100%;
height: 70%;
margin: 0 auto;
`

const Div = styled.div`
    position: relative;
    top: 50px;
    width: 80%;
    margin: 0 auto;
    height: 20%;
    border-radius: 5px;
    background: #293345;
`
