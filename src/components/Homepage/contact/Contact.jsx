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
background: linear-gradient(180deg, #080325, gray);
color: white;

 
    #flex{
        display: flex;
        width: 100%;
        justify-content: space-around;
        align-items: center;
        animation: transition 4s;

        @keyframes transition{
            from {
                color: #ffffff00;
                width: 20%;
            };
            to {
                color: white;
                width: 100%;
            };
        }
    }

   
`

