import styled from 'styled-components';

import { FaBars } from 'react-icons/fa';

function Menu () {
    return (
    <Options id='options'>      
        <div id='imgtext'> 
            <img id='norte' alt='' src={`${process.env.PUBLIC_URL}/img/marlin/norte_sul.png`}/>
            <img id='porto' alt='' src={`${process.env.PUBLIC_URL}/img/marlin/porto_seguro.png`} />
            <FaBars id='bars'/>
            <div id='sobre'><p id="txtmarlin">Sobre</p></div>
            <div id='hospitais'> <p id="txtmarlin">Hospitais </p></div>
            <div id='beneficios'> <p id="menu">Beneficios</p></div>
            <div id='servicos'><p id="menu">Serviços Especiais</p></div>
            <div id='contato'><p id="menu">Contato</p></div>
        </div>  
    </Options>
    )
}

export default Menu;

const Options = styled.div`
    position: fixed;
    z-index: 2;
    background: white;
    height: 94px;
    width: 1380px;

    @media(max-width: 666px){  
        position: absolute;
        width: 375px;
        height: 61px;
    }

    #norte{
        position: absolute;
        background: white;
        top: 24px;
        left: 50px;
        width: 60px;
        height: 43px;
        background: transparent url('img/marlin/logo-Norte-a-Sul.png') 0% 0% no-repeat padding-box;
        opacity: 1;

        @media(max-width: 666px){
            top: 14px;
            left: 21px;
            width: 42px;
            height: 30px;
        }
    }

    #porto {
        position: absolute;
        background: white;
        top: 30px;
        left: 165px;
        width: 98px;
        height: 31px;

        @media(max-width: 666px){
            top: 18px;
            left: 103px;
            width: 73px;
            height: 23px;
        }
    }

    #bars{
        display: none;

        @media(max-width: 666px){
            display: flex;
            position: absolute;
            left: 319px;
            width: 35px;
            top: 4px;
            height: 45px;
            color: #000000;
        }
    }

    #sobre {
        display: flex;
        align-items: center;
        position: absolute;
        top: 32px;
        left: 732px;
        width: 56px;
        height: 27px;

        @media(max-width: 666px){
            display: none;
        }
    }

    #hospitais {
        position: absolute;
        display: flex;
        align-items: center;
        margin-left: 10px;
        top: 32px;
        left: 812px;
        width: 90px;
        height: 27px;

        @media(max-width: 666px){
            display: none;
        }
    }

    #beneficios {
        position: absolute;
        display: flex;
        align-items: center;
        margin-left: 10px;
        top: 32px;
        left: 926px;
        width: 100px;
        height: 27px;

        @media(max-width: 666px){
            display: none;
        }
    }

    #servicos {
        position: absolute;
        display: flex;
        align-items: center;
        margin-left: 10px;
        top: 32px;
        left: 1050px;
        width: 220px;
        height: 27px;

        @media(max-width: 666px){
            display: none;
        }
    }

    #contato {
        display: flex;
        align-items: center;
        position: absolute;
        margin-left: 20px;
        top: 32px;
        left: 1246px;
        width: 78px;
        height: 27px;

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

        @media(max-width: 666px) {
            display: none;
        }
    }
`

const IconBars = styled.div`
`