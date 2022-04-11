import styled from 'styled-components';

import { FaBars } from 'react-icons/fa';

function Menu () {
    return (
    <Options id='options'>      
        <div id='divNort'>
            <img id='norte' alt='' src={`${process.env.PUBLIC_URL}/img/marlin/norte_sul.png`}/>
            <img id='porto' alt='' src={`${process.env.PUBLIC_URL}/img/marlin/porto_seguro.png`} />
        </div> 

        <FaBars id='bars'/>
      
        <ul class='list'>     
            <li ><p id="txtmarlin">Sobre</p></li>
            <li > <p id="txtmarlin">Hospitais </p></li>
            <li > <p id="menu">Beneficios</p></li>
            <li ><p id="menu">Serviços Especiais</p></li>
            <li ><p id="menu">Contato</p></li>
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
    width: 100%;
    max-width: 1450px;
    justify-content: space-between;
    align-itens: center;

    @media(max-width: 666px){  
        position: absolute;
        width: 375px;
        height: 61px;
    }

    divNort {
        display: flex;
        margin-left: 20px;

        #norte{
        position: absolute;
        background: white;
        top: 24px;
        width: 60px;
        height: 43px;
        background: transparent url('img/marlin/logo-Norte-a-Sul.png') 0% 0% no-repeat padding-box;
        opacity: 1;

        @media(max-width: 666px){
            top: 14px;       
            width: 42px;
            height: 30px;
        }
    }

    #porto {
        position: absolute;
        background: white;
        top: 30px;
       
        width: 98px;
        height: 31px;

        @media(max-width: 666px){
            top: 18px;
  
            width: 73px;
            height: 23px;
        }
    }
 }
    

    #bars{
        display: none;

        @media(max-width: 666px){
            display: flex;
            position: absolute;
            width: 35px;
            top: 20px;
            height: 45px;
            color: #000000;
            right: 1%;
        }
    }

    .list {
        position: absolute;
        display: flex;
        list-style: none;
        right: 50px;
        width: 100%;
        justify-content: flex-end;
}



        li{
            margin-left: 10px;
            right: 150px;
        }
    }


    #sobre {
        display: flex;
        align-items: center;
        position: absolute;
        top: 32px;
       
        width: 56px;
        height: 27px;

        @media(max-width: 1200px){
            font-size: 12px;
        }

        @media(max-width: 666px){
            display: none;
        }
    }

    #hospitais {
        position: absolute;
        display: flex;
        align-items: center;
      
        top: 32px;
     
        width: 90px;
        height: 27px;

        @media(max-width: 1200px){
            font-size: 12px;
        }

        @media(max-width: 666px){
            display: none;
        }
    }

    #beneficios {
        position: absolute;
        display: flex;
        align-items: center;
  
        top: 32px;
  
        width: 100px;
        height: 27px;

        @media(max-width: 1200px){
            font-size: 12px;
        }

        @media(max-width: 666px){
            display: none;
        }
    }

    #servicos {
        position: absolute;
        display: flex;
        align-items: center;
       
        top: 32px;
      
        width: 220px;
        height: 27px;

        @media(max-width: 1200px){
            font-size: 12px;
        }

        @media(max-width: 666px){
            display: none;
        }
    }

    #contato {
        display: flex;
        align-items: center;
        position: absolute;
       
        top: 32px;
       
        width: 78px;
        height: 27px;

        @media(max-width: 1200px){
            font-size: 12px;
        }

        @media(max-width: 666px){
            display: none;
        }
    }

    #txtmarlin {
        text-align: left;
        font: normal normal 600 20px/27px Open Sans;
        letter-spacing: 0px;
        color: #D6A430;
        opacity: 1;

        @media(max-width: 1200px){
            font-size: 14px;
        }

        @media(max-width: 666px) {
            display: none;
        }
    }

    #menu {
        text-align: center;
        font: normal normal 600 20px/27px Open Sans;
        letter-spacing: 0px;
        color: #D6A430;
        opacity: 1; 

        @media(max-width: 1200px){
            font-size: 14px;
        }

        @media(max-width: 666px) {
            display: none;
        }    
    }

`
