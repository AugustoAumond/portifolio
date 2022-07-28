import styled from 'styled-components';

import {BsInstagram, BsLinkedin, BsGithub, BsWhatsapp} from 'react-icons/bs'
import {HiOutlineDocumentText, HiOutlineMail} from 'react-icons/hi';

function Network(){
    return (
        <DivNetwork>
                <ul>  
                    <li><a href="https://www.instagram.com/augusto_aumond/"><BsInstagram id='icons'/></a> </li>      
                    <li><a href="https://www.linkedin.com/in/augusto-sturmer-176227207/"><BsLinkedin id='icons'/> </a> </li>
                    <li><a href="https://github.com/AugustoAumond"><BsGithub id='icons'/> </a> </li>
                    <li><a id='curr' href="img/Curriculo Augusto TI-convertido.pdf"><HiOutlineDocumentText id='icons'/></a> 
                    <li><a href="mailto:augustoaumondrs@gmail.com"><HiOutlineMail id='icons'/></a>  </li></li>
                    <li><a href="https://mywhats.net/augustoaumond"><BsWhatsapp id='icons'/></a>  </li>  
                </ul>  

        </DivNetwork>
    )
}
export default Network;

const DivNetwork = styled.div`
position: relative;
text-align: center;
display: flex;

    ul {
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-items: center;
        list-style: none;
        padding: 10px;
    }

    li {
        margin: 15px;
    }

    #icons {
        height: 40px;
        width: 40px;
        color: white;
    }


`



  
