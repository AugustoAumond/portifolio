import {useState} from 'react';
import styled from 'styled-components';

import {useMediaQuery} from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDown, faAngleUp, faLocationDot, faPhone} from '@fortawesome/free-solid-svg-icons';

import {OpenDiv, threeHospitals, hospitaisEmDestaque, ConfigHosp} from './Hospitals.action';
import KnowMore from './../know_more/Knowmore';

function Hospitais (props) {
    const [open, setOpen] = useState(false);

    const mobile = useMediaQuery({ query: '(max-width: 666px)' })

    //Abrir a div oculta/fechar a div visivel;
    const openWindow = () => {
        if (open === false){
            OpenDiv(open);
            setOpen(!open);
            if (mobile === false) {
                ConfigHosp(open);
            }
            
        } else {
            OpenDiv(open);
            setOpen(!open);
            if (mobile === false) {
                ConfigHosp(open);
            }
        }
        <KnowMore open={open}/>
    }

    return (
        <Hospitals id='div'>
            <p id="hospitals">Hospitais em destaque</p>
            <div id="line"></div>
            <p id="description">Contando com os melhores hospitais do Rio de Janeiro, o plano Ouro dispõe para você as redes mais referenciadas com diversos benefícios para que você tenha um atendimento totalmente personalizado.</p>     
           
           
            {hospitaisEmDestaque.map((list, index)=>(
                <Photos id={`photos${index}`} key={index} open={open}>
                    <img alt='' id={`hosp${index}`} open={open} src={list.foto}></img>  
                    <p id={`text${index}`} open={open}> {list.name} <br /> <IconArrown index={index} icon={open ? faAngleDown : faAngleUp} onClick={(()=> openWindow())} /></p> 
            {(threeHospitals(props.list)[0] === undefined || list.name !== 'Hospital Vitória Barra') ? 
                <Api></Api> : 
                
                <Api id="api">
                {threeHospitals(props.list).map((list, index)=>(    
                    <div id={`colunm${index}`}  key={index} >
                        <div id='open' >
                            <img alt='' id={`image${index}`} src={list.image} open={open}/>
                            <h2 id='namehospitals'> {(list.name !== undefined) ? list.name : 'Carregando...'} </h2>
                            <div id='detail'><p id='detailtxt'>{list.detail}</p></div>
                        </div>
                        <div id={`infos${index}`}>
                            <div id='adress'>
                              <IconLocation icon={faLocationDot}/> <strong>Endereço: </strong> {list.address ? list.address : 'Carregando...'}
                            </div>
                            <div id='contact'>
                                <IconPhone icon={faPhone} />
                            <strong>Telefone: </strong>{list.phone ? list.phone : 'Carregando...'}
                            </div>
                        </div>
                    </div>
                    ))} 
                </Api> } 
                </Photos>
            ))}   {/**/}            
        
        </Hospitals>
    )
}

export default Hospitais;

const Hospitals = styled.div`
position: relative;
height: 445px;
width: 100%;
max-width: 1450px;
top: 63px;
margin: 0 auto;

    @media(max-width: 666px){
        position: relative;
        width: 380px;
    }

    #hospitals{
        position: relative;
        top: 50px;
        left: 104px;
        width: 330px;
        height: 39px;
        text-align: left;
        font: normal normal bold 29px/39px Open Sans;
        letter-spacing: 0px;
        color: #171717;

        @media(max-width: 666px) {
            left: 16px;
            width: 251px;
            height: 30px;
            text-align: left;
            font: normal normal bold 22px/30px Open Sans;
            letter-spacing: 0px;
            color: #171717;
        }
    }

    #line {
        position: relative;
        top: 22px;
        left: 103px;
        width: 177px;
        border-bottom: solid 2px #F7B53D;

        @media(max-width: 666px) {
            top: -25px;
            left: 16px;
            width: 158px;
            height: 30px;          
        }
    }

    #description{
        position: relative;
        top: 14px;
        left: 103px;
        width: 83%;
        max-width:1190px;
        height: 54px;text-align: left;
        font: normal normal normal 23px/27px Open Sans;
        letter-spacing: 0px;
        color: #4B4B4B;

        @media(max-width: 666px) {
            top: -30px;
            left: 17px;
            width: 340px;
            height: 100px; 
            text-align: left;
            font: normal normal normal 15px/20px Open Sans;
            letter-spacing: 0px;
            color: #4B4B4B;
        }
    }

`

const IconArrown = styled(FontAwesomeIcon)`
    position: relative;
    left: 1px;
    top: -15px;
    width: 22px;
    height: 20px;
    z-index: 1;
    color: gray;

    @media(max-width: 666px){
        display: ${props => (props.index === 0) ? '' : 'none'}
    }
`

const Photos = styled.div`
    @media(max-width: 666px){
        position: relative;
        display: flex;
        flex-direction: column;

        photos1{
            top: ${props => (props.open === false) ? '-28px' : '960px'};
        }
    }

    #hosp0{
        position: relative;
        top: 130px;
        left: 95px;
        width: 376px;
        height: 230px;

        @media(max-width: 666px){
            left: 22px;
            width: 340px;
            height: 208px;
            top: -26px;
        }
        
    }

    #text0 {
        position: relative;
        background: white;
        top: 75px;
        left: 95px;
        width: 376px;
        height: 50px;
        text-align: center;
        font: normal normal bold 20px/27px Open Sans;
        letter-spacing: 0px;
        color: #E8BB15;   
        z-index: 1;
        border: 1px solid #8080804a;


        @media(max-width: 666px){
            height: 35px;
            left: 22px;
            width: 340px;
            top: -52px;
            text-align: center;
            font: normal normal bold 15px/20px Open Sans;
            letter-spacing: 0px;
            color: #E8BB15;
        }
    }

    #hosp1{
        position: relative;
        top: -215px;
        left: 495px;
        width: 376px;
        height: 230px;

        @media(max-width: 666px){
            left: 22px;
            width: 340px;
            height: 208px;
            top: ${props => (props.open === false) ? '-28px' : '885px'};
        }
    }

    #text1 {
        position: relative;
        top: -269px;
        left: 495px;
        width: 376px;
        height: 50px;
        backgroun: white;
        text-align: center;
        background: white;
        font: normal normal bold 20px/27px Open Sans;
        letter-spacing: 0px;
        color: #E8BB15;
        z-index: 1;
        border: 1px solid #8080804a;

        @media(max-width: 666px){
            left: 22px;
            width: 340px;
            height: 35px;
            top: ${props => props.open === false ? '-56px;' : '845px;'}
            text-align: center;
            font: normal normal bold 15px/20px Open Sans;
            letter-spacing: 0px;
            color: #E8BB15;
        }
    }

    #hosp2{
        position: relative;
        top: -560px;
        left: 887px;
        width: 376px;
        height: 230px;

        @media(max-width: 666px){
            top: ${props => props.open === false ? '-47px;' : '845px;'}
            left: 22px;
            width: 340px;
            height: 208px;
        }
    }

    #text2 {
        position: relative;
        top: -612px;
        left: 886px;
        width: 376px;
        height: 47px;
        background: white;
        text-align: center;
        font: normal normal bold 20px/27px Open Sans;
        letter-spacing: 0px;
        color: #E8BB15;
        z-index: 1;
        border: 1px solid #8080804a;

        @media(max-width: 666px){
            top: ${props => props.open === false ? '-75px;' : '802px;'}
            left: 22px;
            width: 340px;
            height: 35px;
            text-align: center;
            font: normal normal bold 15px/20px Open Sans;
            letter-spacing: 0px;
            color: #E8BB15;
        }
    }

`

const Api = styled.div `
    display: none;
    flex-direction: column;
    margin-top: 10px;
    position: relative;
    top: -534px;
    border-bottom: solid 1px #9e9e9e70;
    width: 1162px;
    margin-left: 87px;

    @media(max-width: 666px){
        width: 380px;
        top: 10px;
        display: none;
        flex-direction: column;
        right: 430px;
    }

    #colunm0 {
        position: absolute;
        top: 640px;
        left: -56px;

        @media(max-width: 666px){
            position: absolute;
            top:10px;
            left: 0px;
            
        }
    }

    #colunm1 {
        position: absolute;
        top: 940px;
        left: -56px;

        @media(max-width: 666px){
            position: absolute;
            top: 400px;
            left: 0px;

        }
    }

    #colunm2 {
        position: absolute;
        top: 1240px;
        left: -56px;

        @media(max-width: 666px){
            position: absolute;
            top: 665px;
            left: 0px;
        }
    }

    #image0 {
        position: relative;
        width: 276px;
        top: 69px;
        left: 50px;

        @media(max-width: 666px){
            position: relative;
            width: 158px;
            top: 104px;
            left: 375px;
        }
    }

    #image1 {
        position: relative;
        width: 276px;
        top: 69px;
        left: 50px;

        @media(max-width: 666px){
            position: relative;
            width: 158px;
            top: 10px;
            left: 375px;
        }
    }

    #image2 {
        position: relative;
        width: 276px;
        top: 69px;
        left: 50px;

        @media(max-width: 666px){
            position: relative;
            width: 158px;
            top: 8px;
            left: 375px;
        }
    }
    
    #namehospitals{
        position: relative;
        left: 360px;
        top: -213px;
    }

    #detail {
        box-sizing: border-box;
        width: 491px;
        top: -221px;
        height: 281px;
        left: 364px;
        position: relative;
    }

    #detailtxt {
        text-align: left;
        margin-left: 10px;
        font: normal normal normal 23px/27px Open Sans;
        letter-spacing: 0px;
        color: #4B4B4B;

        @media(max-width: 666px){
            width: 340px;
            font: normal normal normal 15px/22px Open Sans;
        }
    }

    #infos0{
        position: relative;
        top: -7px;

        @media(max-width: 666px){
            position: relative;
            right: 407px;
            top: 139px;
        }
    }

    #infos1{
        position: relative;
        top: -7px;

        @media(max-width: 666px){
            position: relative;
            right: 407px;            
            top: -8px;
        }
    }

    #infos2{
        position: relative;
        top: -7px;

        @media(max-width: 666px){
            position: relative;
            right: 407px;
            top: -17px;
        }
    }

    #adress{
        position: relative;
        top: -495px;
        left: 960px;
        width: 263px;
        height: 78px;
        text-align: left;
        letter-spacing: 0px;
        color: #000000;

        @media(max-width: 666px){
            font-size: 12px;
        }
    }

    #contact{
        position: relative;
        top: -495px;
        left: 960px;
        width: 265px;
        height: 60px;
        text-align: left;
        letter-spacing: 0px;
        color: #000000;

        @media(max-width: 666px){
            font-size: 12px;
        }
    }

`

const IconLocation = styled(FontAwesomeIcon)`
    position: relative;
    color: #F7B53D;
    right: 5px;
    top: 15px;
  `

const IconPhone = styled(FontAwesomeIcon)`
    position: relative;
    color: #F7B53D;
    right: 5px;
    top: 15px;
`





