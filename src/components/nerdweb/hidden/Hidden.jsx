import styled from 'styled-components';

function Hidden (){

    return (
        <DivHidden>
            <div class="site">
                <h1 id="title"> Soluções Site </h1>
                <p id="briefing"> Briefing</p>
                <p id="search"> Pesquisa </p>
                <p id="criation"> Criação</p>
                <p id="placement"> Veiculação</p>
            </div>

            <div class="ecommerce" >
                <h1 id="comerce"> Soluções por E-commerce</h1>
                <p id="lorem"> lorem</p>
                <p id="ipsum"> ipsum</p>
                <p id="dolor"> dolor</p>
                <p id="google"> Google ads</p>
                <p id="analysis"> Análise de Mercado</p>
            </div>

            <div class="social" >
                <h1 id="title"> Soluções por Redes Sociais </h1>
                <p id="briefing">Briefing</p>
                <p id="search"> Pesquisa </p>
                <p id="criation"> Criação </p>
                <p id="placement"> Veiculação </p>
            </div>

            <div class="landpage">
                <h1 id="land"> Soluções por Landing Page </h1>
                <p id="content"> Conteúdo </p>
                <p id="report"> Relatório </p>
            </div>
        </DivHidden>

    )
}

export default Hidden;

const DivHidden = styled.div`
position: absolute;
top: 133px;
left: 300px;
width: 1317px;
height: 279px;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 2px 3px 6px #00000014;
opacity: 1;
border-top: solid #00AEEF;
z-index: 1;
display: none;

    @media (max-width: 1024px) {
        width: 590px;
        height: 190px;
        left: 35px;
    }

    @media (max-width: 666px){
        width: 600px;  
    }

    .site {
        position: absolute;
        top: 32px;
        left: 161px;
        width: 90px;
        height: 163px;

        @media (max-width: 1024px){
            left: 45px;
            top: 5px;
        }

        #title {   
            position: absolute;
            text-align: left;
            font: normal normal 800 18px/24px 'Open Sans', sans-serif;
            letter-spacing: 0px;
            color: #005271;
            opacity: 1;          
            width: 90px;
            height: 46px;

            @media (max-width: 1024px){
                font-size: 14px;
            }
        }

        #briefing {
            top: 70px;
            width: 57px;
            height: 18px;
            position: absolute;
            text-align: left;
            font: normal normal bold 14px/18px 'Open Sans', sans-serif;
            letter-spacing: 0px;
            color: #033244;
            opacity: 1;

            @media (max-width: 1024px){
                font-size: 12px;
                top: 58px;
            }
        }

        #search {
            top: 92px;
            width: 65px;
            height: 18px;
            position: absolute;
            text-align: left;
            font: normal normal bold 14px/18px 'Open Sans', sans-serif;
            letter-spacing: 0px;
            color: #033244;
            opacity: 1;

            @media (max-width: 1024px){
                font-size: 12px;
                top: 75px;
            }
        }

        #criation {
            top: 119px;
            width: 56px;
            height: 18px;
            position: absolute;
            text-align: left;
            font: normal normal bold 14px/18px 'Open Sans', sans-serif;
            letter-spacing: 0px;
            color: #033244;
            opacity: 1;

            @media (max-width: 1024px){
                font-size: 12px;
                top: 92px;
            }
        }

        #placement {
            top: 145px;
            width: 80px;
            height: 18px;
            position: absolute;
            text-align: left;
            font: normal normal bold 14px/18px 'Open Sans', sans-serif;
            letter-spacing: 0px;
            color: #033244;
            opacity: 1;

            @media (max-width: 1024px){
                font-size: 12px;
                top: 109px;
            }
        }
    }

    .ecommerce {
        position: absolute;
        top: 32px;
        left: 417px;
        width: 140px;
        height: 192px;
        opacity: 1;

        @media (max-width: 1024px) {
            top: 5px;
            left: 155px;
        }

        #comerce {
            position: absolute;
            text-align: left;
            font: normal normal 800 18px/24px 'Open Sans', sans-serif;
            letter-spacing: 0px;
            color: #005271;
            opacity: 1;

            @media (max-width: 1024px){
                font-size: 14px;
            }
        }

        #lorem {
            top: 70px;
            position: absolute;
            text-align: left;
            font: normal normal normal 14px/18px 'Open Sans', sans-serif;
            letter-spacing: 0px;
            color: #39393B;
            opacity: 1;

            @media (max-width: 1024px){
                font-size: 12px;
                top: 58px;
            }
        }

        #ipsum {
            top: 92px;
            position: absolute;
            text-align: left;
            font: normal normal normal 14px/18px 'Open Sans', sans-serif;
            letter-spacing: 0px;
            color: #39393B;
            opacity: 1;

            @media (max-width: 1024px){
                font-size: 12px;
                top: 75px;
            }
        }

        #dolor {
            top: 119px;
            position: absolute;
            text-align: left;
            font: normal normal normal 14px/18px 'Open Sans', sans-serif;
            letter-spacing: 0px;
            color: #39393B;
            opacity: 1;

            @media (max-width: 1024px){
                font-size: 12px;
                top: 92px;
            }
        }

        #google {
            top: 145px;
            position: absolute;
            text-align: left;
            font: normal normal normal 14px/18px 'Open Sans', sans-serif;
            letter-spacing: 0px;
            color: #39393B;
            opacity: 1;

            @media (max-width: 1024px){
                font-size: 12px;
                top: 109px;
            }
        }

        #analysis {
            top: 171px;
            position: absolute;
            text-align: left;
            font: normal normal normal 14px/18px 'Open Sans', sans-serif;
            letter-spacing: 0px;
            color: #39393B;
            opacity: 1;

            @media (max-width: 1024px){
                font-size: 12px;
                top: 126px;
            }
        }
    }

    .social {
        position: absolute;
        top: 32px;
        left: 686px;
        width: 134px;
        height: 163px;
        opacity: 1;

        @media (max-width: 1024px) {
            left: 305px;
            top: 5px;
        }

        #title {
            position: absolute;
            text-align: left;
            font: normal normal 800 18px/24px 'Open Sans', sans-serif;
            letter-spacing: 0px;
            color: #005271;
            opacity: 1;
            width: 150px;

            @media (max-width: 1024px){
                font-size: 14px;
            }
        }

        #briefing {
            top: 70px;
            width: 57px;
            height: 18px;
            position: absolute;
            text-align: left;
            font: normal normal normal 14px/18px 'Open Sans', sans-serif;
            letter-spacing: 0px;
            color: #39393B;
            opacity: 1;

            @media (max-width: 1024px){
                font-size: 12px;
                top: 58px;
            }
        }

        #search {
            top: 92px;
            width: 65px;
            height: 18px;
            position: absolute;
            text-align: left;
            font: normal normal normal 14px/18px 'Open Sans', sans-serif;
            letter-spacing: 0px;
            color: #39393B;
            opacity: 1;

            @media (max-width: 1024px){
                font-size: 12px;
                top: 75px;
            }
        }

        #criation {
            top: 119px;
            width: 56px;
            height: 18px;
            position: absolute;
            text-align: left;
            font: normal normal normal 14px/18px 'Open Sans', sans-serif;
            letter-spacing: 0px;
            color: #39393B;
            opacity: 1;

            @media (max-width: 1024px){
                font-size: 12px;
                top: 93px;
            }
        }

        #placement {
            top: 145px;
            width: 80px;
            height: 18px;
            position: absolute;
            text-align: left;
            font: normal normal normal 14px/18px 'Open Sans', sans-serif;
            letter-spacing: 0px;
            color: #39393B;
            opacity: 1;

            @media (max-width: 1024px){
                font-size: 12px;
                top: 109px;
            }
        }

        .landpage {
            position: absolute;
            right: 223px;
            top: 32px;
            width: 126px;
            height: 114px;

            @media (max-width: 1024px) {
                left: 445px;
                top: 5px;
            }

            #land {
                width: 150px;
                height: 46px;
                position: absolute;
                text-align: left;
                font: normal normal 800 18px/24px 'Open Sans', sans-serif;
                letter-spacing: 0px;
                color: #005271;
                opacity: 1;  

                @media (max-width: 1024px){
                    font-size: 14px;
                }
            }

            #content {
                top: 70px;
                width: 120px;
                height: 46px;
                position: absolute;
                text-align: left;
                font: normal normal normal 14px/18px 'Open Sans', sans-serif;
                letter-spacing: 0px;
                color: #39393B;
                opacity: 1;

                @media (max-width: 1024px){
                    font-size: 12px;
                    top: 58px;
                }
            }

            #report {
                top: 92px;
                width: 65px;
                height: 18px;
                position: absolute;
                text-align: left;
                font: normal normal normal 14px/18px 'Open Sans', sans-serif;
                letter-spacing: 0px;
                color: #39393B;
                opacity: 1;

                @media (max-width: 1024px){
                    font-size: 12px;
                    top: 75px;
                }
            }
        }
    `