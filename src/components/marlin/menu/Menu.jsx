import styled from 'styled-components';

import { FaBars } from 'react-icons/fa';

function Menu () {
    return (
    <Options id='options'>      
        <div id='divNort'>
            <img id='norte' alt='' src={`${process.env.PUBLIC_URL}/img/marlin/norte_sul.png`}/>
            <img id='porto' alt='' src={`${process.env.PUBLIC_URL}/img/marlin/porto_seguro.png`} />
        </div> 

        <div id="divbars">
            <FaBars id='bars'/>
        </div>
      
        <ul class='list'>     
            <li >Sobre</li>
            <li > Hospitais </li>
            <li > Beneficios</li>
            <li id='especial'>Serviços Especiais</li>
            <li >Contato</li>
        </ul>
    </Options>
    )
}

export default Menu;

const Options = styled.div`
    position: fixed;
    display: flex;
    z-index: 2;
    background: white;
    height: 94px;
    width: 99%;
    max-width: 1366px;
    justify-content: space-between;
    align-itens: center;

    @media(max-width: 666px){  
        position: relative;
        max-width: 350px;
        height: 61px;
        margin: 0 auto;
    }

    #divNort {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width:100%;
        margin: 15px;
        max-width: 180px;

        #norte{
            max-width: 60px;
            height: 43px;
            background: transparent url('img/marlin/logo-Norte-a-Sul.png') 0% 0% no-repeat padding-box;
            opacity: 1;

        @media(max-width: 666px){      
            width: 42px;
            height: 30px;
        }
    }

    #porto {
        background: white;
        margin: 30px;
        max-width: 98px;
        height: 31px;

        @media(max-width: 666px){
            width: 73px;
            height: 23px;
        }
    }
 }

 #divbars {
    display: flex;
    height: 61px;
    align-items: center;

    #bars{
        display: none;
        width: 35px;
        height: 45px;
        color: #000000;

        @media(max-width: 666px){
            display: flex;   
        }
    }
 }
    
    .list {
        display: flex;
        list-style: none;
        width: 550px;
        justify-content: space-around;
        align-items: center;

        @media (max-width: 666px){
            display: none;
        }
    }

        li{
            margin-left: 10px;
            color: #D6A430;
            font: 20px/27px open-sans;
            font-weight: 600;
            text-align: center;

            @media(max-width: 800px){
                font-size: 14px;
            } 
        }

    }


    #txtmarlin {
        
        letter-spacing: 0px;
        color: #D6A430;
        opacity: 1;

        @media(max-width: 1200px){
            font-size: 14px;
        }
    }

    #menu {
        font: normal normal 600 20px/27px Open Sans;
        letter-spacing: 0px;
        color: #D6A430;
        opacity: 1; 

        @media(max-width: 1200px){
            font-size: 14px;
        }  
    }

`
