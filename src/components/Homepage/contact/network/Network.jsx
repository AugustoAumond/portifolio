import styled from 'styled-components';

import {BsInstagram, BsLinkedin, BsGithub, BsWhatsapp} from 'react-icons/bs'
import {HiOutlineDocumentText, HiOutlineMail} from 'react-icons/hi';

function Network(){
    return (
        <DivNetwork>
            <h3>C O N T A T O</h3>
            <Net>            
                <a href="https://www.instagram.com/augusto_aumond/"><BsInstagram id='insta'/></a> 
                <a href="https://www.linkedin.com/in/augusto-sturmer-176227207/"><BsLinkedin id='linkedin'/> </a> 
                <a href="https://github.com/AugustoAumond"><BsGithub id='github'/> </a> 
                <a id='curr' href="img/Curriculo Augusto TI-convertido.pdf"><HiOutlineDocumentText id='curriculum'/></a> 
                <a href="mailto:augustoaumondrs@gmail.com"><HiOutlineMail id='email'/></a>  
                <a href="https://mywhats.net/augustoaumond"><BsWhatsapp id='phone'/></a>  
            </Net>
        </DivNetwork>
    )
}
export default Network;

const DivNetwork = styled.div`
position: relative;
top: -40px;
height: 150px;
border: solid 1px #00000021;
text-align: center;
`

const Net = styled.div`
position: relative;
display: flex;
height: 75px;
width: 100%;
background: #ffffffad;
justify-content: space-around;
align-items: center;
    
    #insta{
        color: #2a2a48;
        position: relative;
        height: 40px;
        width: 40px;
    }

    #linkedin{
        color: #2a2a48;
        position: relative;
        height: 40px;
        width: 40px;
    }

    #github{
        color: #2a2a48;
        position: relative;      
        height: 40px;
        width: 40px;
    }

    #curriculum{
        height: 40px;
        width: 40px;
        color: #2a2a48;
        position: relative;
    }

    #email{
        height: 40px;
        width: 40px;
        color: #2a2a48;
        position: relative;      
    }

    #phone{
        color: #2a2a48;
        position: relative;
        height: 40px;
        width: 40px;
    }
 `