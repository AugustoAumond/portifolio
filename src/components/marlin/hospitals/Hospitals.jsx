import {useState} from 'react';
import styled from 'styled-components';
import './Api.css'

import {useMediaQuery} from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDown, faAngleUp, faLocationDot, faPhone} from '@fortawesome/free-solid-svg-icons';

import {OpenDiv, threeHospitals} from './Hospitals.action';
import KnowMore from './../know_more/Knowmore';

function Hospitais (props) {
    const [open, setOpen] = useState(false);
    console.log(open);

    const mobile = useMediaQuery({ query: '(max-width: 666px)' })

    //Abrir a div oculta/fechar a div visivel;
    const openWindow = () => {
        if (open === false){
            OpenDiv(open);
            setOpen(!open);
            
        } else {
            OpenDiv(open);
            setOpen(!open);
        }
        <KnowMore open={open}/>
    }

    const hospitaisEmDestaque = [{
        name: 'Hospital Vitória Barra', foto:`${process.env.PUBLIC_URL}/img/marlin/grupo de máscara 2.png`}, 
        {name: 'Hospital Perinatal Laranjeiras', foto:`${process.env.PUBLIC_URL}/img/marlin/grupo de máscara 7.png`},
        {name: 'Hospital Copa D Or', foto: `${process.env.PUBLIC_URL}/img/marlin/grupo de máscara 6.png`}]   

    return (
        <Hospitals id='div'>
            <div class='hospitals'>
                <h1 id="hospitals">Hospitais em destaque</h1>
                <div id="line"></div>
                <p id="description">
                    Contando com os melhores hospitais do Rio de Janeiro, o plano Ouro dispõe para você as redes mais referenciadas com diversos benefícios para que você tenha um atendimento totalmente personalizado.
                </p>  
            </div>
                    
            <Photos>
                <div id='align'>
                {hospitaisEmDestaque.map((list, index)=>(
                    <FlexColumn key={index} open={open} index={index} >
                        <img alt='' src={list.foto}></img>  
                        <div id='organize' onClick={(()=> openWindow())}>
                        {list.name}
                            <IconArrown id='angle' index={index} icon={open ? faAngleDown : faAngleUp}/>
                        </div>
                    </FlexColumn> 
                
                ))} 
                </div>  

                {threeHospitals(props.list)?        
                <Api id="api">
                    {threeHospitals(props.list)?.map((list, index)=>(    
                    <div class='column' key={index} >
                        <h2 class='namehospitals'> {list?.name} </h2>
                        <div class='open' >
                            <div>
                                <img alt='' class='img' src={list?.image} open={open}/> 
                            </div>
                            
                            <div class='detail'>
                                {list?.detail}
                            </div>

                            <div class='contacts'>
                                <div class='align'>
                                    <IconLocation icon={faLocationDot}/> <strong>Endereço: </strong> {list?.address }
                                </div>
                                
                                <div class='align'>
                                    <IconPhone icon={faPhone} />
                                    <strong>Telefone: </strong> {list?.phone } 
                                </div>
                                    
                            </div>
                        </div>
                        <div id={`infos${index}`}>
                            
                        </div>
                    </div>
                    ))} 
                </Api> : <Api> Carregando ...</Api>}
            </Photos>
             {/**/}            
        
        </Hospitals>
    )
}

export default Hospitais;

const Hospitals = styled.div`
position: relative;
width: 100%;
max-width: 1450px;
margin: 0 auto;

    .detail {
        @media (max-width:800px) {
            font-size: 12px;
            min-width: 200px;
        }
    }

    @media(max-width: 666px){
        min-width: 375px;
    }

    .hospitals {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        margin-left: 104px;

        @media(max-width: 666px) {
            max-width: 375px;
            margin: 0 auto;
        }
    }

    #hospitals{
        width: 340px;
        height: 39px;
        text-align: left;
        font: normal normal bold 29px/39px Open Sans;
        color: #171717;

        @media(max-width: 666px) {
            width: 251px;
            height: 30px;
            font: normal normal bold 22px/30px Open Sans;
            color: #171717;
        }
    }

    #line {
        width: 177px;
        border-bottom: solid 3px #F7B53D;

        @media(max-width: 666px) {
            margin-top: -35px;
            width: 158px;
            height: 30px;          
        }
    }

    #description{
        width: 98%;
        max-width: 1190px;
        text-align: left;
        font: normal normal normal 23px/27px Open Sans;
        letter-spacing: 0px;
        color: #4B4B4B;
        margin-top: 24px;

        @media(max-width: 666px) {
            font-size: 18px;
        }
    }
`

const Photos = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 15px;

    #align {
        display: flex;

        @media (max-width: 666px){
            flex-direction: column;
            width: 100%;
        }
    }   
`

const FlexColumn = styled.section`
display: flex;
width: 30%;
flex-direction: column;
flex: 1 1 175px;
margin: 10px;

    #organize {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: solid 1px gray;
        border-radius: 0px 0 15px 15px;
    }

    #angle {
        width: 22px;
        height: 20px;
        color: gray;
    }

    @media (max-width:666px) {
        width: 100%;
        max-width: 375px;
        min-width: 180px;
        margin: 10px auto;   
        position: ${props => props.open === true ? 'relative' : 'unset'};
        top: ${props => props.index === 0 ? '0px' : '1450px'};

        #flexbox1 {
            top: 1500px;
        }
        
        #flexbox2 {
            top: 1500px;
        }
    }
`

const IconArrown = styled(FontAwesomeIcon)`
`

const Api = styled.div `
display: none;
flex-direction: column;
width: 100%;

    @media (max-width: 666px){
        position: relative;
        top: -550px;
    }

`

const IconLocation = styled(FontAwesomeIcon)`
    color: #F7B53D;
    margin-right: 10px;
  `

const IconPhone = styled(FontAwesomeIcon)`
    color: #F7B53D;
    margin-right: 10px;
`





