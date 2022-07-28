import styled from 'styled-components'

import Datas from './datas/Datas';
import History from './history/History';
import Network from './network/Network';
import Navegation from './navegation/Navegation';

function Contact (){
    return (
        <DivContact>
            <Navegation/>

            <div id='flex'>
                <Datas/>

                <Network/>   
            </div>  

            <History/>          
        </DivContact>
    )
}

export default Contact;

const DivContact = styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin: 0 auto;
color: white;
background: linear-gradient(180deg, #080325, gray);

    #flex{
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }
`

