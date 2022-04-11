import styled from 'styled-components';

function SelectionServices() {

    return (
        <DivSelection>
            <h1 id="title">Seleção de Serviços</h1>
            <h2 id="txt">Conheça nossa seleção especial</h2>
            <Card> 
                <img class="card1" src={`${process.env.PUBLIC_URL}/img/nerdweb/Imagem card serviço.png`} alt=""/>
                <div class="divcard1">
                    <h1>Serviço de teste de front-end</h1>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
                    <strong>CONHECER</strong>
                </div>
            </Card>

            <Card2> 
                <img class="card2" src={`${process.env.PUBLIC_URL}/img/nerdweb/Imagem card serviço-1.png`} alt=""/>
                <div class="divcard1">
                    <h1>Serviço de teste de front-end</h1>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
                    <strong>CONHECER</strong>
                </div>
            </Card2>

            <Card3> 
                <img class="card3" src={`${process.env.PUBLIC_URL}/img/nerdweb/Imagem card serviço-2.png`} alt=""/>
                <div class="divcard1">
                    <h1>Serviço de teste de front-end</h1>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
                    <strong>CONHECER</strong>
                </div>
            </Card3>
        </DivSelection>
    )
}

export default SelectionServices;

const DivSelection = styled.div`
    position: absolute;
    top: 2196px;
    left: 300px;
    width: 1320px;
    height: 581px;
    opacity: 1;

    @media (max-width: 1024px) {
        left: 0px;
        top: 1580px;
        width: 0px;
    }

    @media (max-width: 666px){
        width: 666px;
        top: 1260px;
    }

#title {
    position: absolute;
    left: 435px;
    width: 451px;
    height: 43px;
    text-align: center;
    font: normal normal 900 32px/43px 'Open Sans', sans-serif;
    letter-spacing: 0px;
    color: #2C3A2F;
    opacity: 1;

    @media (max-width: 1024px) {
        font-size: 26px;
        left: 360px;
    }

    @media (max-width:666px){
        font-size: 22px;
        left: 155px;
        top: 5px;
    }
}

#txt {
    position: absolute;
    top: 53px;
    left: 357px;
    width: 607px;
    height: 26px;
    text-align: center;
    font: 20px/26px 'Open Sans', sans-serif;
    letter-spacing: 0px;
    color: #0089BC;
    opacity: 1;

    @media (max-width: 1024px) {
        font-size: 20px;
        top: 40px;
        left: 285px;
    }

    @media (max-width: 666px){
        font-size: 17px;
        left: 80px;
    }
`

const Card = styled.div`
    position: absolute;
    top: 123px;
    height: 450px;
    width: 428px;

    @media (max-width: 1024px){
        left: 15px;
    }

    .card1 {
        position: absolute;
        width: 424px;
        height: 283px;

        @media (max-width: 1024px){
            width: 320px;
            height: 220px;
        }

        @media (max-width: 666px){
            width: 205px;
            height: 145px;     
        }
    }

    .divcard1 {
        position: absolute;
        top: 240px;
        width: 424px;
        height: 218px;
        background: #283137 0% 0% no-repeat padding-box;
        opacity: 1;

        @media (max-width: 1024px) {
            top: 200px;
            width: 320px;
            height: 185px;
        }

        @media (max-width: 666px){
            width: 205px;
            height: 175px;
            top: 130px;
        }

        h1 {
            position: absolute;
            top: 10px;
            left: 36px;
            width: 363px;
            height: 26px;
            text-align: left;
            font: normal normal 900 20px/26px 'Open Sans', sans-serif;
            letter-spacing: 0px;
            color: #FFFFFF;
            opacity: 1;

            @media (max-width: 1024px){
                width: 275px;
                top: -9px;
                font-size: 19px;
            }

            @media (max-width: 666px){
                top: -2px;
                font-size: 11px;
                left: 14px;
            }
        }

        p {
            position: absolute;
            top: 55px;
            left: 36px;
            width: 352px;
            height: 63px;
            text-align: left;
            font: normal normal 300 16px/21px 'Open Sans', sans-serif;
            letter-spacing: 0px;
            color: #e2f7ffab;
            opacity: 1;

            @media (max-width: 1024px){
                width: 290px;
                top: 59px;
                left: 32px;
                font-size: 12px;
            }

            @media (max-width: 666px){
                width: 186px;
                top: 20px;
                left: 10px;
                font-size: 11px;
                text-align: justify;
            }
        }

        strong {
            position: absolute;
            top: 173px;
            left: 36px;
            width: 78px;
            height: 19px;
            text-align: left;
            font: normal normal 900 14px/19px 'Open Sans', sans-serif;
            letter-spacing: 0px;
            color: #00AEEF;
            text-transform: uppercase;
            opacity: 1;

            @media (max-width: 1024px){
                top: 155px;
                font-size: 10px;
            }

            @media (max-width: 666px){
                left: 15px;
                top: 140px;
                font-size: 9px;
            }
        }
    }
`

const Card2 = styled.div`
.card2 {
    position: absolute;
    top: 123px;
    left: 448px;
    height: 450px;
    width: 428px;

    @media (max-width: 1024px){
        left: 350px;
    }

    @media (max-width: 666px){
        left: 235px;
    }

    .card2 {

        @media (max-width: 1024px){
            width: 320px;
            height: 220px;
            left: 380px;
        }

        @media (max-width: 666px){
            width: 205px;
            height: 145px;     
        }
    }
    
    .divcard1 {
        position: absolute;
        top: 240px;
        width: 424px;
        height: 218px;
        background: #283137 0% 0% no-repeat padding-box;
        opacity: 1;

        @media (max-width: 1024px) {
            top: 200px;
            width: 320px;
            height: 185px;
        }

        @media (max-width: 666px){
            width: 205px;
            height: 175px;
            top: 130px;
        }

        h1 {
            position: absolute;
            top: 10px;
            left: 36px;
            width: 363px;
            height: 26px;
            text-align: left;
            font: normal normal 900 20px/26px 'Open Sans', sans-serif;
            letter-spacing: 0px;
            color: #FFFFFF;
            opacity: 1;

            @media (max-width: 1024px){
                width: 275px;
                top: -9px;
                font-size: 19px;
            }

            @media (max-width: 666px){
                top: -2px;
                font-size: 11px;
                left: 14px;
            }
        }

        p {
            position: absolute;
            top: 55px;
            left: 36px;
            width: 352px;
            height: 63px;
            text-align: left;
            font: normal normal 300 16px/21px 'Open Sans', sans-serif;
            letter-spacing: 0px;
            color: #e2f7ffab;
            opacity: 1;

            @media (max-width: 1024px){
                width: 290px;
                top: 59px;
                left: 32px;
                font-size: 12px;
            }

            @media (max-width: 666px){
                width: 186px;
                top: 20px;
                left: 10px;
                font-size: 11px;
                text-align: justify;
            }
        }

        strong {
            position: absolute;
            top: 173px;
            left: 36px;
            width: 78px;
            height: 19px;
            text-align: left;
            font: normal normal 900 14px/19px 'Open Sans', sans-serif;
            letter-spacing: 0px;
            color: #00AEEF;
            text-transform: uppercase;
            opacity: 1;

            @media (max-width: 1024px){
                top: 155px;
                font-size: 10px;
            }

            @media (max-width: 666px){
                left: 15px;
                top: 140px;
                font-size: 9px;
            }
        }
    }
`

const Card3 = styled.div`
    position: absolute;
    top: 123px;
    left: 896px;
    height: 450px;
    width: 428px;

    @media (max-width: 1024px){
        left: 685px;
        width: 0px;
    }

    @media (max-width: 666px){
        left: 455px;
    }

    .card3 {
        @media (max-width: 1024px){
            width: 320px;
            height: 220px;
            left: 380px;
        }

        @media (max-width: 666px){
            width: 205px;
            height: 145px;     
        }
    }

    .divcard1 {
        position: absolute;
        top: 240px;
        width: 424px;
        height: 218px;
        background: #283137 0% 0% no-repeat padding-box;
        opacity: 1;

        @media (max-width: 1024px) {
            top: 200px;
            width: 320px;
            height: 185px;
        }

        @media (max-width: 666px){
            width: 205px;
            height: 175px;
            top: 130px;
        }

        h1 {
            position: absolute;
            top: 10px;
            left: 36px;
            width: 363px;
            height: 26px;
            text-align: left;
            font: normal normal 900 20px/26px 'Open Sans', sans-serif;
            letter-spacing: 0px;
            color: #FFFFFF;
            opacity: 1;

            @media (max-width: 1024px){
                width: 275px;
                top: -9px;
                font-size: 19px;
            }

            @media (max-width: 666px){
                top: -2px;
                font-size: 11px;
                left: 14px;
            }
        }

        p {
            position: absolute;
            top: 55px;
            left: 36px;
            width: 352px;
            height: 63px;
            text-align: left;
            font: normal normal 300 16px/21px 'Open Sans', sans-serif;
            letter-spacing: 0px;
            color: #e2f7ffab;
            opacity: 1;

            @media (max-width: 1024px){
                width: 290px;
                top: 59px;
                left: 32px;
                font-size: 12px;
            }

            @media (max-width: 666px){
                width: 186px;
                top: 20px;
                left: 10px;
                font-size: 11px;
                text-align: justify;
            }
        }

        strong {
            position: absolute;
            top: 173px;
            left: 36px;
            width: 78px;
            height: 19px;
            text-align: left;
            font: normal normal 900 14px/19px 'Open Sans', sans-serif;
            letter-spacing: 0px;
            color: #00AEEF;
            text-transform: uppercase;
            opacity: 1;

            @media (max-width: 1024px){
                top: 155px;
                font-size: 10px;
            }

            @media (max-width: 666px){
                left: 15px;
                top: 140px;
                font-size: 9px;
            }
        }
    }
`

