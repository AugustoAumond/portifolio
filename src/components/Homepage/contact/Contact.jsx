import styled from 'styled-components'

import {BsInstagram, BsLinkedin, BsGithub, BsWhatsapp} from 'react-icons/bs'
import {HiOutlineDocumentText, HiOutlineMail} from 'react-icons/hi';

function Contact (){
    return (
        <Div>
            <Img src={`${process.env.PUBLIC_URL}/img/utilizar2.jpg`} alt=""></Img>
            <Network>
                <a href="https://www.instagram.com/augusto_aumond/"><BsInstagram id='insta'/></a> 
                <a href="https://www.linkedin.com/in/augusto-sturmer-176227207/"><BsLinkedin id='linkedin'/> </a> 
                <a href="https://github.com/AugustoAumond"><BsGithub id='github'/> </a> 
                <a id='curr' href="img/Curriculo Augusto TI-convertido.pdf"><HiOutlineDocumentText id='curriculum'/></a> 
                <a href="mailto:augustoaumondrs@gmail.com"><HiOutlineMail id='email'/></a>  
                <a href="https://mywhats.net/augustoaumond"><BsWhatsapp id='phone'/></a>  
            </Network>
            <Datas>
                <p>Nome: <strong> Augusto Sturmer Aumond </strong></p>
                <p>Idade: <strong> 30 anos (24/05/1991)</strong></p>
                <p>Curso: <strong>Análise e Desenvolvimento de SiStemas</strong></p>
                <p>Conclusão:<strong> Dezembro 2023</strong></p>
            </Datas>
            <History>
                <p>
                Tragetória:
                <strong>
                     Em 2009 terminei o ensino médio e ingressei na faculdade de Ciências Biológicas, todas minhas experiências profissionais entre 2009 e 2016 foram dentro da área da Biologia. Após o término da faculdade tive dificuldade para ingressar no mercado de trabalho na área de formação, acabei trabalhando de Auxiliar Administrativo entre 2017 e 2018 e entre 2019 e 2020 de Tratador. Em 2020 com o começo da pândemia resolvi trocar de área e ingressei na Programação.
                </strong>
                </p>
            </History>
        </Div>
    )
}

export default Contact;

const Div = styled.div`
    background: #3b3838d4;
    position: absolute;
    top: 50px;
    left: 145px;
    width: 440px;
    height: 780px;
    border-radius: 5px;

    @media (max-width: 1450px){
        right: 14%;
        left: unset;
    }

    @media (max-width:900px){
        margin: 0px;
        width: 300px;
        right: 10%;     
        height: 630px; 
    }

    @media (max-width:650px){
        right: 6%;     
    }

`
 const Img = styled.img`
 position: relative;
 top: 15px;
 left: 15px;
 border-radius: 50px;
 height: 90px;
 width: 90px;
 background: white;

    @media (max-width:900px){
        left: -10px;
        height: 65px;
        width: 65px;
    }    
 `

 const Network = styled.div`
    left: 120px;
    position: absolute;
    top: 35px;
    height: 75px;
    width: 281px;
    background: #ffffffad;
    
    @media (max-width:900px){
        left: 65px;
        top: 30px;
        height: 40px;
        width: 205px;
        display: flex;
        align-items: center;
    }

    #insta{
        color: #2a2a48;
        position: relative;
        left: -16px;
        top: 13px;
        height: 20px;
        width:20px;

        @media (max-width:900px){
            top: 2px;
            height: 15px;
            width: 15px;
        }
    }

    #linkedin{
        color: #2a2a48;
        position: relative;
        left: -52px;
        top: 13px;
        height: 20px;
        width:20px;

        @media (max-width:900px){
            top: 2px;
            height: 15px;
            width: 15px;
        }
    }

    #github{
        color: #2a2a48;
        position: relative;      
        left: -94px;
        top: 13px;
        height: 21px;
        width:21px;

        @media (max-width:900px){
            top: 2px;
            left: -104px;
            height: 15px;
            width: 15px;
        }
    }

    #curriculum{
        width: 28px;
        height: 28px;
        top: -46px;
        color: #2a2a48;
        position: relative;
        left: 110px;

        @media (max-width:900px){
            top: 2px;
            left: -150px;
            height: 19px;
            width: 19px;
        }
    }

    #email{
        width: 28px;
        height: 28px;
        top: -45px;
        color: #2a2a48;
        position: relative;      
        left: 69px;

        @media (max-width:900px){
            top: 2px;
            left: -197px;
            height: 19px;
            width: 19px;
        }
    }

    #phone{
        color: #2a2a48;
        position: relative;
        left: 35px;
        top: -49px;
        height: 21px;
        width:21px;

        @media (max-width:900px){
            top: 2px;
            left: -240px;
            height: 15px;
            width: 15px;
        }

    }
 `



 const Datas = styled.div`
    position: relative;
    top: 25px; 


    p   {  
        padding: 5px;
        height: 50px;
        border: solid 1px;
        width: 390px;
        box-sizing: border-box;
        margin-top: 5px;
        background: #ffffffad;

        @media (max-width:900px){
            top: 2px;
            width: 265px;
            height: 35px;
            font-size: 12px;
            margin-left: 3px;
        }
    }

    strong{
        font-size: 17px;

        @media (max-width:900px){
            font-size: 12px;
        }
    }
    
    `

const History = styled.div`
    border: solid 1px;
    position: relative;
    top: 30px;
    text-align: justify;
    width: 390px;
    left: 14px;
    background: #ffffffad;




    @media (max-width:900px){
        font-size: 12px;
        width: 265px;
        margin-left: 3px;
    }

    strong {
        @media (max-width:900px){
            font-size: 12px;
        }
    }

    
`