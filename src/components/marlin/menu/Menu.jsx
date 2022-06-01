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
    position: relative;
    z-index: 2;
    background: white;
    height: 94px;
    width: 100%;
    max-width: 1366px;
    margin: 0 auto;
    justify-content: space-between;
    align-itens: center;

    @media(max-width: 666px){  
        position: relative;
        justify-content: space-between;
        height: 61px;
    }

    #divNort {
    display: flex;
    margin-left: 20px;
    align-items: center;

        #norte{
        position: relative;
        background: white;
        width: 60px;
        height: 43px;
        background: transparent url('img/marlin/logo-Norte-a-Sul.png') 0% 0% no-repeat padding-box;
        opacity: 1;

        @media(max-width: 666px){      
            width: 42px;
            height: 30px;
        }
    }

    #porto {
        position: relative;
        background: white;
        left: 30px;
        width: 98px;
        height: 31px;

        @media(max-width: 760px){
            width: 73px;
            height: 23px;
        }
    }
 }

 #divbars {
    position: relative;
    display: flex;
    align-items: center;
    height: 61px;
    right: 50px;

    #bars{
        display: none;

        @media(max-width: 760px){
            display: flex;
            position: relative;
            width: 35px;
            height: 45px;
            color: #000000;
        }
    }
 }
    
    .list {
        position: absolute;
        display: flex;
        list-style: none;
        right: 5px;
        width: 550px;
        justify-content: space-around;

        @media (max-width: 760px){
            display: none;
        }
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
