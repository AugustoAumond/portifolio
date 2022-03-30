import React, { useState, useRef} from 'react';
import styled from 'styled-components';

import ReCAPTCHA from "react-google-recaptcha";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import { FaWhatsapp } from 'react-icons/fa';

import {addStorage, Validator} from './know_more.action';


function KnowMore(props) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [captchaValid, setCaptchaValid] = useState(false);


    const captcha = useRef(null);
    //Pega o validador do captcha e se for verdadeiro altera o value do state;
    const onRecaptcha = () => {      
        if (captcha.current.getValue()){
            setCaptchaValid(!captchaValid);
        };
    }    

    //Validando os campos, defini nome abaixo de 5 letras, telefone com menos de 9 digitos e email sem o @ como inválidos, no final adiciona ao objeto e zera os campos;
    function onChange () {
        if (Validator(name, phone, email, captchaValid) === true){ 
        let object = {name:name, phone: phone, email: email};
        addStorage(object); 
        setName('');
        setEmail('');
        setPhone('');
        }          
    }

    return (
        <Know>
            <h2 id="text"> Quer saber mais? </h2>
            <div id='line'></div>
            <img id='call' alt='' src={`${process.env.PUBLIC_URL}/img/marlin/phone-call.png`}/>
            <p id='textcall'> Ainda sobrou alguma dúvida sobre qual o melhor Plano para sua empresa? Envie seus dados e deixe que a NS Benefícios entrará em contato assim que possível. </p>
            <p id='namemarlin'> <strong>NOME:</strong> </p>
            <input id='inputname' placeholder='Insira aqui seu nome' onChange={((e)=> setName(e.currentTarget.value))} value={name} />
            <p id='phone'> <strong>TELEFONE:</strong></p>
            <input id='inputphone' type='number' placeholder='Insira aqui seu telefone' onChange={((e)=> setPhone(e.currentTarget.value))} value={phone}/>
            <p id='emailmarlin'> <strong> E-MAIL:</strong></p>
            <input id='inputemail' placeholder='Insira aqui seu e-mail' onChange={((e)=> setEmail(e.currentTarget.value))} value={email}/>             
            <div id='recaptcha'>
            <ReCAPTCHA 
                ref={captcha}
               sitekey="6LfROsgeAAAAAFX7L0voYgJBApHdcsHP-ynHpjob"
               onChange={onRecaptcha}
               /> 
            </div> 
            <button id='contact' onClick={(() =>onChange())}> <p id='contacttxt'> ENVIAR CONTATO </p></button> 
            <p id='talkus'> FALE CONOSCO AGORA MESMO</p> 
            <p id='number'> 4020-6440 </p>  
            <button id='whatsapp'> <FaWhatsapp id='iconwhats'/>
            <p id='whatstxt'> CLIQUE AQUI PARA ENVIAR UMA MENSAGEM </p></button> 
            <button id='callus'><IconPhone id='iconphone' icon={faPhone}/> <p id='callustxt'>CLIQUE AQUI PARA LIGAR</p></button>
            <p id='operation'> Horário de Atendimento de 8h às 17h </p> 
        </Know>
    )
}
export default KnowMore;

const Know = styled.div`
    position: relative;
    top: 1px;
    width: 1366px;
    top: -532px;

    @media(max-width: 666px){
        width: 380px;
        top: -35px;
    }

    #text {
        position: relative;
        top: 10px;
        left: 103px;
        width: 251px;
        height: 39px;
        text-align: left;
        font: normal normal bold 29px/39px Open Sans;
        color: #171717;

        @media(max-width: 666px){
            top: 1px;
            left: 18px;
            width: 191px;
            height: 30px;
            text-align: left;
            font: normal normal bold 22px/30px Open Sans;
            letter-spacing: 0px;
            color: #171717;
        }
    }

    #line{
        position: relative;       
        top: -6px;
        left: 103px;
        border-bottom: solid 2px #F7B53D;
        width: 171px;

        @media(max-width: 666px){
            top: -40px;
            left: 18px;
            width: 150px;
            height: 30px;
        }
    }

    #call{
        position: relative;
        left: 103px;
        top: 50px;
        width: 138px;
        height: 138px;

        @media(max-width: 666px){
            left: 24px;
            width: 101px;
            height: 101px;
            top: 12px;
        }
    }
    
    #textcall {
        position: relative;
        top: -108px;
        left: 283px;
        width: 807px;
        height: 59px;
        text-align: left;
        font: normal normal normal 21px/27px Open Sans;
        letter-spacing: 0px;
        color: #404040;

        @media(max-width: 666px){
            left: 138px;
            width: 205px;
            height: 120px;
            text-align: left;
            font: normal normal normal 15px/20px Open Sans;
            letter-spacing: 0px;
            color: #404040;
        }
    }

    #namemarlin{
        position: relative;
        top: 38px;
        left: 104px;
        width: 61px;
        height: 24px;
        text-align: left;
        font: normal normal bold 21px/24px Open Sans;
        letter-spacing: 0px;
        color: #ECC63C;

        @media(max-width: 666px){
            top: -85px;
            left: 17px;
            width: 41px;
            height: 17px;
            text-align: left;
            font: normal normal bold 12px/17px Open Sans;
            letter-spacing: 0px;
            color: #E8BB15;
        }
    }

    #inputname{
        position: relative;
        top: 26px;
        left: 104px;
        width: 544px;
        height: 54px;
        border: 1px solid #D0BC90;

        @media(max-width: 666px){
            top: -95px;
            left: 17px;
            width: 315px;
            height: 32px;
        }
    }

    #phone{
        position: relative;
        top: 28px;
        left: 104px;
        width: 84px;
        height: 22px;
        text-align: left;
        font: normal normal bold 21px/22px Open Sans;
        letter-spacing: 0px;
        color: #ECC63C;

        @media(max-width: 666px){
            top: -85px;
            left: 17px;
            width: 41px;
            height: 17px;
            text-align: left;
            font: normal normal bold 12px/17px Open Sans;
            letter-spacing: 0px;
            color: #E8BB15;
        }
    }

    #inputphone{
        position: relative;
        top: 13px;
        left: 104px;
        width: 544px;
        height: 54px;
        border: 1px solid #D0BC90;

        @media(max-width: 666px){
            top: -95px;
            left: 17px;
            width: 315px;
            height: 32px;
        }
    }

    #emailmarlin{
        position: relative;
        top: 14px;
        left: 104px;
        width: 130px;
        height: 22px;
        text-align: left;
        font: normal normal bold 21px/22px Open Sans;
        letter-spacing: 0px;
        color: #ECC63C;

        @media(max-width: 666px){
            top: -85px;
            left: 17px;
            width: 85px;
            height: 17px;
            text-align: left;
            font: normal normal bold 12px/17px Open Sans;
            letter-spacing: 0px;
            color: #E8BB15;
        }
    }

    #inputemail {
        position: relative;
        top: 0px;
        left: 104px;
        width: 544px;
        height: 54px;
        border: 1px solid #D0BC90;

        @media(max-width: 666px){
            top: -95px;
            left: 17px;
            width: 315px;
            height: 32px;
        }
    }

    #recaptcha{
        position: relative;
        top: 27px;
        left: 328px;
        width: 214px;
        height: 63px;

        @media(max-width: 666px){
            top: -80px;
            left: 78px;
            width: 340px;
            height: 32px;
        }
    }

    #contact{
        position: relative;
        top: 65px;
        left: 245px;
        width: 289px;
        height: 43px;
        background: #F7B53D 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #00000029;
        border-radius: 25px;
        border: white;
        cursor: pointer;

        @media(max-width: 666px){
            top: -38px;
            left: 41px;
            width: 289px;
            height: 43px;
        }
    }

    #contacttxt{
        position: relative;
        text-align: center;
        width: 289px;
        height: 43px;
        font: normal normal 600 19px/20px Open Sans;
        letter-spacing: 3px;
        color: #FFFFFF;
        margin-top: 11px;
    }

    #talkus{
        position: relative;
        left: 806px;
        top: -557px;
        width: 300px;
        height: 23px;
        text-align: center;
        font: normal normal bold 18px/23px Open Sans;
        letter-spacing: 0px;
        color: #4B4B4B;

        @media(max-width: 666px){
            top: -16px;
            left: 46px;
            width: 279px;
            height: 20px;
            text-align: center;
            font: normal normal bold 15px/20px Open Sans;
            letter-spacing: 0px;
            color: #4B4B4B;
        }
    }
    
    #number{
        position: relative;
        top: -550px;
        left: 879px;
        width: 142px;
        height: 39px;
        text-align: center;
        font: normal normal bold 29px/39px Open Sans;
        letter-spacing: 0px;
        color: #E8BB15;

        @media(max-width: 666px){
            top: -35px;
            left: 127px;
            width: 124px;
            height: 34px;
            text-align: center;
            font: normal normal bold 25px/34px Open Sans;
            letter-spacing: 0px;
            color: #E8BB15;
        }
    }

    #whatsapp{
        position: relative;
        top: -543px;
        left: 752px;
        width: 407px;
        height: 90px;
        background: #F7B53D 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #00000029;
        border-radius: 12px;
        border: white;

        @media(max-width: 666px){
            top: -35px;
            left: 17px;
            width: 340px;
            height: 75px;
            background: #F7B53D 0% 0% no-repeat padding-box;
            box-shadow: 0px 3px 6px #00000029;
            border-radius: 12px;
        }

        #iconwhats {
            width: 53px;
            height: 58px;
            background: #F7B53D 0% 0% no-repeat padding-box;
            position: relative;
            right: 121px;
            color: white;

            @media(max-width: 666px){
                right: 97px;
                width: 47px;
                height: 51px;
                background: #F7B53D 0% 0% no-repeat padding-box;
                color: white;
            }
        }
    }

    #whatstxt{
        margin-top: -60px;
        margin-left: 137px;
        width: 240px;
        height: 44px;
        color: var(--unnamed-color-ffffff);
        text-align: left;
        font: normal normal bold 18px/22px Open Sans;
        letter-spacing: 0px;
        color: #ffffff;

        @media(max-width: 666px){
            top: 9px;
            left: 127px;
            width: 200px;
            height: 40px;
            text-align: left;
            font: normal normal bold 15px/20px Open Sans;
            letter-spacing: 0px;
            color: #FFFFFF;
        }
    }

    #callus{    
        position: relative;    
        top: -400px;
        left: 317px;
        width: 407px;
        height: 90px;
        background: #F7B53D 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #00000029;
        border-radius: 12px;
        border: white;

        @media(max-width: 666px){
            top: -20px;
            left: 17px;
            width: 340px;
            height: 75px;
            background: #F7B53D 0% 0% no-repeat padding-box;
            box-shadow: 0px 3px 6px #00000029;
            border-radius: 12px;
        }

        #iconphone{
            margin-top: 16px;
            margin-left: -255px;
            color: white;
            width: 48px;
            height: 48px; 

            @media(max-width: 666px){
                top: 9px;
                margin-left: -197px;
                right: 97px;
                width: 40px;
                height: 51px;
                background: #F7B53D 0% 0% no-repeat padding-box;
                color: white;
            }  
        }
    }

    #callustxt{
        width: 247px;
        margin-left: 127px;
        margin-top: -56px;
        height: 22px;
        text-align: center;
        font: normal normal bold 18px/22px Open Sans;
        letter-spacing: 0px;
        color: #FFFFFF;

        @media(max-width: 666px){
            top: 9px;
            left: 127px;
            width: 186px;
            height: 40px;
            text-align: left;
            font: normal normal bold 15px/20px Open Sans;
            letter-spacing: 0px;
            color: #FFFFFF;
        }
    }

    #operation{
        position: relative;
        top: -432px;
        left: 851px;
        width: 248px;
        height: 18px;
        text-align: center;
        font: normal normal normal 13px/18px Open Sans;
        letter-spacing: 0px;
        color: #A7A7A7;

        @media(max-width: 666px){
            top: -30px;
            left: 81px;
            width: 214px;
            height: 17px;
            text-align: center;
            font: normal normal normal 12px/17px Open Sans;
            letter-spacing: 0px;
            color: #A7A7A7;
        }
    }
`

const IconPhone = styled(FontAwesomeIcon)`


`
