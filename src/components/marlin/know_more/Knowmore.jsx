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

            <DivCall>
                <img id='call' alt='' src={`${process.env.PUBLIC_URL}/img/marlin/phone-call.png`}/>
                <p id='textcall'> Ainda sobrou alguma dúvida sobre qual o melhor Plano para sua empresa? Envie seus dados e deixe que a NS Benefícios entrará em contato assim que possível. </p>
            </DivCall>
            
            
            <DivRegister>
                <Inputs>
                    <div class='inputs'>
                        <p class='marlin'> <strong> NOME: </strong> </p>
                        <input class='inputmarlin' placeholder='Insira aqui seu nome' onChange={((e)=> setName(e.currentTarget.value))} value={name} />
                    </div>
                    
                    <div class='inputs'>
                       <p class='marlin'> <strong>TELEFONE:</strong></p>
                        <input class='inputmarlin' type='number' placeholder='Insira aqui seu telefone' onChange={((e)=> setPhone(e.currentTarget.value))} value={phone}/> 
                    </div>
                    
                    <div class='inputs'>
                       <p class='marlin'> <strong> E-MAIL:</strong></p>
                        <input class='inputmarlin' placeholder='Insira aqui seu e-mail' onChange={((e)=> setEmail(e.currentTarget.value))} value={email}/>    
                    </div>
                         
                    <div id='recaptcha'>
                        <ReCAPTCHA 
                            ref={captcha}
                            sitekey="6LfROsgeAAAAAFX7L0voYgJBApHdcsHP-ynHpjob"
                            onChange={onRecaptcha}
                        /> 
                    </div> 

                    <div id='divContact'>
                        <button id='contact' onClick={(() =>onChange())}> <p id='contacttxt'> ENVIAR CONTATO </p></button>  
                    </div>
                                 
                </Inputs>

                <TalkUs>
                    <p id='talkus'> FALE CONOSCO AGORA MESMO</p> 
                    <p id='number'> 4020-6440 </p>  
                    <button id='MarlinContacts'> <FaWhatsapp id='iconMarlinContacts'/>
                    CLIQUE AQUI PARA ENVIAR UMA MENSAGEM </button> 
                    <button id='MarlinContacts'><IconPhone id='iconMarlinContacts' icon={faPhone}/> CLIQUE AQUI PARA LIGAR </button>
                    <p id='operation'> Horário de Atendimento de 8h às 17h </p>
                </TalkUs>
            </DivRegister>
        </Know>
    )
}
export default KnowMore;

const Know = styled.div`
    position: relative;
    width: 100%;
    margin: 0 auto;

    @media(max-width: 666px){
        min-width: 375px;
    }

    #text {
        margin-top: 25px;
        margin-left: 103px;
        max-width: 280px;
        height: 39px;
        text-align: left;
        font: normal normal bold 29px/39px Open Sans;
        color: #171717;

        @media(max-width: 666px){
            margin-left: 18px;
            max-width: 255px;
            height: 30px;
            font: 22px/30px;
        }
    }

    #line{
        margin-top: -20px;
        border-bottom: solid 2px #F7B53D;
        max-width: 171px;
        margin-left: 103px;

        @media(max-width: 666px){
            margin-top: -40px;
            margin-left: 18px;
            max-width: 150px;
            height: 30px;
        }
    }
`

const DivCall = styled.section`
display: flex;
align-items: center;
width: 100%;

    @media (max-width: 666px){
        flex-direction: column;
    }
}

#call{
    margin-left: 103px;
    margin-top: 50px;
    max-width: 138px;
    height: 138px;

    @media(max-width: 666px){
        margin-left: unset;
        width: 100%;
        max-width: 175px;
    }
}

#textcall {
    margin-left: 20px;
    max-width: 807px;
    height: 59px;
    text-align: justify;
    font: normal normal normal 21px/27px Open Sans;
    letter-spacing: 0px;
    color: #404040;

    @media(max-width: 666px){
        margin-left: unset;
        margin-top: 30px;
        width: 100%;
        max-width: 380px;
        height: 120px;
        font: 15px/20px;
    }
}
`

const DivRegister = styled.section`
display: flex;

    @media (max-width: 666px){
        flex-direction: column;
    }
`

const Inputs = styled.section`
width: 100%;

.inputs {
    margin-left: 64px;

    @media (max-width: 666px){
        margin-left: 40px;
    }
}

    .marlin{
        margin-top: 38px;
        max-width: 80px;
        height: 24px;
        text-align: left;
        font: normal normal bold 21px/24px Open Sans;
        letter-spacing: 0px;
        color: #ECC63C;

        @media(max-width: 666px){
            max-width: 90px;
            height: 17px;
            font: 12px/17px;
        }
    }

    .inputmarlin{
        width: 100%;
        max-width: 544px;
        height: 54px;
        border: 1px solid #D0BC90;

        @media(max-width: 666px){
            margin-top: -95px;
            max-width: 350px;
            height: 32px;
        }
    }

    #recaptcha{
        display: flex;
        justify-content: center;
        margin-left: 90px;
        width: 100%;
        margin-top: 30px;
        height: 63px;

        @media(max-width: 666px){
            margin-left: 40px;
            max-width: 340px;
            height: 32px;
        }
    }

    #divContact {
        width: 100%;
        margin-top: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #contact{
        max-width: 450px;
        height: 43px;
        background: #F7B53D 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #00000029;
        border-radius: 25px;
        border: white;
        cursor: pointer;

        @media(max-width: 666px){
            margin-top: 40px;
            max-width: 289px;
            height: 43px;
        }
    }
    
    #contacttxt{
        text-align: center;
        max-width: 289px;
        height: 43px;
        font: normal normal 600 19px/20px Open Sans;
        letter-spacing: 3px;
        color: #FFFFFF;
        margin-top: 11px;
    }
`

const TalkUs = styled.section`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;

    #talkus{
        margin-top: 100px;
        max-width: 300px;
        height: 23px;
        text-align: center;
        font: normal normal bold 18px/23px Open Sans;
        letter-spacing: 0px;
        color: #4B4B4B;

        @media(max-width: 666px){
            height: 20px;
            font: 15px/20px;
        }
    }

    #number{
        max-width: 142px;
        height: 39px;
        text-align: center;
        font: normal normal bold 29px/39px Open Sans;
        letter-spacing: 0px;
        color: #E8BB15;

        @media(max-width: 666px){
            height: 34px;
            font: 25px/34px;
        }
    }

    #MarlinContacts{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 92%;
        max-width: 407px;
        min-width: 330px;
        height: 75px;
        background: #F7B53D 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #00000029;
        border-radius: 12px;
        border: white;
        margin: 15px;
        font: normal normal bold 18px/22px Open Sans;
        letter-spacing: 0px;
        color: #ffffff;

        @media(max-width: 666px){
            max-width: 340px;
            background: #F7B53D 0% 0% no-repeat padding-box;
            box-shadow: 0px 3px 6px #00000029;
            border-radius: 12px;
            font: 15px/20px;
        }

        #iconMarlinContacts {
            width: 100%;
            max-width: 53px;
            height: 58px;
            background: #F7B53D 0% 0% no-repeat padding-box;
            color: white;
            margin: 15px;

            @media(max-width: 666px){
                max-width: 47px;
                height: 51px;
                background: #F7B53D 0% 0% no-repeat padding-box;
                color: white;
            }
        }
    }

    #operation{
        max-width: 248px;
        height: 18px;
        text-align: center;
        font: normal normal normal 13px/18px Open Sans;
        letter-spacing: 0px;
        color: #A7A7A7;

        @media(max-width: 666px){
            max-width: 214px;
            height: 17px;
            font: 12px/17px ;
        }
    }
`

const IconPhone = styled(FontAwesomeIcon)`
`
