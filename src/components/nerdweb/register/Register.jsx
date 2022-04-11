import styled from 'styled-components';

function Register(){

    return (
        <DivRegister>
            <h1 id="title">
                Novidades e descontos especiais
            </h1>
            <p id="txt">
                Descubra com a gente uma vida nova, saudável, cheia de sabor e desconto!
            </p>

            <input class="name" type="text" placeholder="Name"/>
            <input class="email" placeholder="E-mail"/>
            <div class="button">
                <button id="register" onclick="Enviar()">
                    <p id="cadastrar"> CADASTRAR </p>
                </button>
            </div>
        </DivRegister>

    )
}

export default Register;

const DivRegister = styled.div`
    position: absolute;
    top: 3704px;
    left: 300px;
    width: 1320px;
    height: 262px;
    background: #F3F3F3 0% 0% no-repeat padding-box;
    opacity: 1;

    @media (max-width: 1024px) {
        top: 2860px;
        width: 1024px;
        left: 0px;
    }

    @media (max-width: 666px){
        width: 666px;
        top: 2410px;
    }

    #title {
        position: absolute;
        top: 45px;
        left: 112px;
        width: 380px;
        height: 81px;
        font: normal normal 900 32px/38px 'Open Sans', sans-serif;
        background: #F3F3F3 0% 0% no-repeat padding-box;
        color: #033244;
        opacity: 1;

        @media (max-width: 1024px){
            left: 60px;
            font-size: 24px;
            width: 295px;
            top: 15px;
        }

        @media (max-width: 666px){
            left: 130px;
            font-size: 24px;
            width: 450px;
            top: -80px;
        }
    }

    #txt {
        position: absolute;
        top: 142px;
        left: 112px;
        width: 312px;
        height: 78px;
        text-align: left;
        font: normal normal 600 20px/26px 'Open Sans', sans-serif;
        letter-spacing: 0px;
        color: #0089BC;
        opacity: 1;

        @media (max-width: 1024px) {
            top: 90px;
            left: 60px;
            width: 295px;
        }

        @media (max-width: 666px){
            top: -43px;
            left: 70px;
            width: 560px;
            text-align: center;
        }
    }

    .name {  
        top: 40px;
        position: absolute;
        right: 112px;
        width: 672px;
        height: 44px;
        padding: 5px;
        border: 1px solid #005271;
        background: #F3F3F3 0% 0% no-repeat padding-box;
        border: 1px solid #0052716e;
        opacity: 1;

        @media (max-width: 1024px){
            right: 7px;
            width: 635px;
        }
    }

    .email {
        top: 104px;
        position: absolute;
        right: 112px;
        width: 672px;
        height: 44px;
        padding: 5px;
        border: 1px solid #005271;
        background: #F3F3F3 0% 0% no-repeat padding-box;
        border: 1px solid #0052716e;
        opacity: 1;

        @media (max-width: 1024px){
            right: 7px;
            width: 635px;
        }
    }

    .button {
        position: absolute;
        top: 156px;
        right: 625px;
        width: 183px;
        height: 71px;
        opacity: 1;

        #register {
            position: absolute;
            top: 24px;
            left: 11px;
            width: 160px;
            height: 45px;
            border: white;
            background: #71D8FF 0% 0% no-repeat padding-box;
            opacity: 1;
            cursor: pointer;

            @media (max-width: 1024px) {
                height: 40px;
                top: 30px;
                left: 380px;
                width: 140px;
            }

            @media (max-width: 666px){
                left: 400px;            
            }

            #cadastrar {
                position: absolute;
                top: -8px;
                left: 10px;
                text-align: left;
                font: normal normal 900 20px/26px 'Open Sans', sans-serif;
                letter-spacing: 0px;
                text-transform: uppercase;
                cursor: pointer;
                color: #0089BC;

                @media (max-width: 1024px) {   
                    font-size: 16px;
                    top: -7px;
                    left: 18px;

                }
            }
        }
    }
`

