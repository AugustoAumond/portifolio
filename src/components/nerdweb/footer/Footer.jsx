import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Footer(){

    return (
        <DivFooter>
            <img src={`${process.env.PUBLIC_URL}/img/nerdweb/Grupo 549.png`} alt=""/>

            <div id="divnerdweb">
                <h1 id="title">NERDWEB</h1>
                <p id="about"> Sobre </p>
                <p id="principles"> Nossos Princípios</p>
                <p id="employees"> Funcionários</p>
                <p id="workus"> Trabalhe Conosco</p>
            </div>
            
            <div id="help">
                <h1 id="title"> AJUDA</h1>
                <p id="deadline"> Prazos e Entregas</p>
                <p id="trade"> Trocas e Devoluções</p>
                <p id="privacity">Política de Privacidade</p>
            </div>

            <div id="attendance">
                <h1 id="title">ATENDIMENTO</h1>
                <p id="doubts"> Dúvidas Frequêntes</p>
                <p id="phone"> (41) 3333-3333</p>
                <p id="email">teste@nerdweb.com.br</p>
            </div>

            <div id="time">
                <h1 id="title">HORÁRIO DE ATENDIMENTO</h1>
                <p id="txttime">De segunda a sexta-feira das 08h00 às 12h00 e das 13h00 às 17h40</p>
            </div>

            <div id="line"></div>

            <div id="rights">2022 Nerdweb - Extreme Hosting, todos os direitos reservados.</div>

            <div id="network">
                <h1 id="title">Fique em sintonia com a gente</h1>
                <a href="https://www.facebook.com/nerdwebsolucoes"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://www.instagram.com/nerdweb/"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://www.linkedin.com/company/nerdweb/"><i class="fa-brands fa-linkedin-in"></i></a>
                <i class="fa-brands fa-twitter"></i>
                <a href="https://www.youtube.com/c/NerdwebBr"><i class="fa-brands fa-youtube"></i></a>  
            </div>
        </DivFooter>
    )
}

export default Footer;

const DivFooter = styled.div`
    position: absolute;
    top: 4071px;
    width: 1920px;
    height: 468px;
    background: #283137 0% 0% no-repeat padding-box;
    opacity: 1;
    border-top: solid #00AEEF;

    @media (max-width: 1024px){
        top: 3126px;
        width: 1024px;
        left: 0px;
        height: 405px;
    }

    @media (max-width: 666px){
        width: 666px;
        top: 2700px;
        height: 310px;
    }

    img {
        position: absolute;
        top: 49px;
        left: 300px;
        width: 88px;
        height: 34px;
        opacity: 1;

        @media (max-width: 1024px) {
            top: 250px;
            left: 50px;
        }

        @media (max-width: 666px){
            top: 170px;
            left: 45px;
        }
    }

    #divnerdweb {
        position: absolute;
        top: 43px;
        left: 749px;
        width: 119px;
        height: 150px;
        opacity: 1;

        @media (max-width: 1024px) {
            left: 50px;
        }

        @media (max-width: 666px) {
            top: 10px;
            left: 30px;
        }

        #title {
            position: absolute;
            width: 94px;
            height: 24px;
            @include titlefooter ();   

            @media (max-width: 666px) {
                top: 10px;
                font-size: 14px;
            }
        }

        #about {
            position: absolute;
            top: 45px;
            width: 37px;
            height: 19px;
            @include itensfooter();

            @media (max-width: 666px) {
                font-size: 11px;
                top: 38px;
            }
        }

        #principles {
            position: absolute;
            top: 74px;
            width: 119px;
            height: 19px;
            @include itensfooter();

            @media (max-width: 666px) {
                font-size: 11px;
                top: 56px;
            }
        }

        #employees {
            position: absolute;
            top: 103px;
            width: 88px;
            height: 19px;
            @include itensfooter();

            @media (max-width: 666px) {
                font-size: 11px;
                top: 74px;
            }
        }

        #workus {
            position: absolute;
            top: 132px;
            width: 118px;
            height: 19px;
            @include itensfooter();

            @media (max-width: 666px) {
                font-size: 11px;
                top: 92px;
            }
        }
    }

    #help {
        position: absolute;
        top: 43px;
        right: 816px;
        width: 159px;
        height: 121px;
        opacity: 1;

        @media (max-width: 1024px) {
            left: 200px;
        }

        @media (max-width: 666px){
            left: 160px;
            top: 10px;
        }

        #title {
            position: absolute;
            width: 94px;
            height: 24px;
            @include titlefooter();

            @media (max-width: 666px) {
                top: 10px;
                font-size: 14px;
            }
        }

        #deadline {
            position: absolute;
            top: 44px;
            width: 118px;
            height: 19px;
            @include itensfooter();

            @media (max-width: 666px) {
                font-size: 11px;
                top: 38px;
            }
        }

        #trade {
            position: absolute;
            top: 74px;
            width: 138px;
            height: 19px;
            @include itensfooter();

            @media (max-width: 666px) {
                font-size: 11px;
                top: 56px;
            }
        }

        #privacity {
            position: absolute;
            top: 103px;
            width: 159px;
            height: 19px;
            @include itensfooter();

            @media (max-width: 666px) {
                font-size: 11px;
                top: 74px;
            }
        }
    }

    #attendance {
        position: absolute;
        top: 43px;
        right: 605px;
        width: 151px;
        height: 121px;

        @media (max-width: 1024px) {
            left: 375px;
        }

        @media (max-width: 666px){
            left: 300px;
            top: 10px;
        }

        #title {
            position: absolute;
            width: 139px;
            height: 24px;
            @include titlefooter();

            @media (max-width: 666px) {
                top: 10px;
                font-size: 14px;
            }
        }

        #doubts {
            position: absolute;
            top: 44px;
            width: 131px;
            height: 19px;
            @include itensfooter();

            @media (max-width: 666px) {
                font-size: 11px;
                top: 38px;
            }
        }

        #phone {
            position: absolute;
            top: 74px;
            width: 100px;
            height: 19px;
            @include itensfooter();

            @media (max-width: 666px) {
                font-size: 11px;
                top: 56px;
            }
        }

        #email {
            position: absolute;
            top: 103px;
            width: 151px;
            height: 19px;
            @include itensfooter();

            @media (max-width: 666px) {
                font-size: 11px;
                top: 74px;
            }
        }
    }

    #time {
        position: absolute;
        top: 43px;
        right: 300px;
        width: 257px;
        height: 103px;
        opacity: 1;

        @media (max-width: 1024px) {
            right: 75px;
        }

        @media (max-width: 666px){
            right: -30px;
            top: 10px;
        }

        #title {
            position: absolute;
            width: 300px;
            height: 24px;
            @include titlefooter();

            @media (max-width: 666px) {
                top: 10px;
                font-size: 14px;
            }
        }

        #txttime {
            position: absolute;
            top: 46px;
            width: 160px;
            height: 57px;
            text-align: left;
            font: 14px/19px 'Open Sans', sans-serif;
            letter-spacing: 0px;
            color: #b2eaffab;
            opacity: 1;

            @media (max-width: 666px) {
                font-size: 11px;
                top: 38px;
            }
        }
    }

    #line {
        position: absolute;
        top: 327px;
        left: 300px;
        width: 1320px;
        height: 2px;
        background: #E1E1E1 0% 0% no-repeat padding-box;
        opacity: 1;

        @media (max-width: 1024px){
            width: 924px;
            left: 50px;
            top: 300px;
        }

        @media (max-width: 666px){
            top: 215px;
            width: 566px;
            left: 50px;
        }
    }

    #rights {
        position: absolute;
        top: 349px;
        left: 300px;
        width: 424px;
        height: 19px;
        text-align: left;
        font: normal normal 500 14px/19px 'Open Sans', sans-serif;
        letter-spacing: 0px;
        color: #E1E1E1;
        opacity: 1;

        @media (max-width: 1024px){
            top: 305px;
            left: 50px;
        }

        @media(max-width: 666px){
            left: 50px;
            top: 220px;
            font-size: 10px;
        }
    }

    #network {
        position: absolute;
        top: 349px;
        left: 1308px;
        width: 312px;
        height: 71px;
        opacity: 1;

        @media (max-width: 1024px){
            left: 698px;
            top: 270px;
        }

        @media (max-width: 666px){
            left: 375px;
            top: 185px;
        }

        #title {
            position: absolute;
            width: 350px;
            height: 26px;
            text-align: left;
            font: 20px/26px 'Open Sans', sans-serif;
            letter-spacing: 0px;
            color: #71D8FF;
            opacity: 1;

            @media (max-width: 1024px) {
                font-size: 21px;
                top: 25px;
                left: -10px;
                width: 290px;
            }

            @media (max-width: 666px){
                font-size: 14px;
                left: 50px;
            }
        }

        .fa-facebook {
            position: absolute;
            color: #71D8FF;
            opacity: 1;
            font-size: 30px;
            top: 52px;

            @media (max-width: 1024px) {
                font-size: 24px;
                top: 75px;
            }

            @media (max-width: 666px){
                left: 60px;
                top: 65px;
            }
        }

        .fa-instagram {
            position: absolute;
            color: #71D8FF;
            opacity: 1;
            font-size: 30px;
            top: 52px;
            left: 59px;
            font-size: 35px;

            @media (max-width: 1024px) {
                font-size: 24px;
                top: 75px;
            }

            @media (max-width: 666px){
                left: 100px;
                top: 65px;
            }
        }

        .fa-linkedin-in {
            position: absolute;
            color: #71D8FF;
            opacity: 1;
            font-size: 30px;
            top: 52px;
            left: 120px;

            @media (max-width: 1024px) {
                font-size: 24px;
                top: 75px;
            }

            @media (max-width: 666px){
                left: 140px;
                top: 65px;
            }
        }

        .fa-twitter {
            position: absolute;
            color: #71D8FF;
            opacity: 1;
            font-size: 30px;
            top: 52px;
            left: 175px;

            @media (max-width: 1024px) {
                font-size: 24px;
                top: 75px;
            }

            @media (max-width: 666px){
                left: 180px;
                top: 65px;
            }
        }

        .fa-youtube {
            position: absolute;
            color: #71D8FF;
            opacity: 1;
            font-size: 30px;
            top: 52px;
            left: 233px;

            @media (max-width: 1024px) {
                font-size: 24px;
                top: 75px;
            }

            @media (max-width: 666px){
                left: 220px;
                top: 65px;
            }
        }
    }
}
`