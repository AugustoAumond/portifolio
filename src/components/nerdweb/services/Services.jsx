import styled from 'styled-components';

function Service(){

    return (
        <DivServices>
            <Discovery>
                <p id="txtup">Descubra os serviços Nerdweb </p>
                <p id="txtdown">que mais combinam com a sua empresa </p>
                <button id="lookservices"><strong>VER SERVIÇOS</strong> </button>
            </Discovery>

            <div id="linecenter"></div>

            <Tittle>
                <svg class="alt_route_black_24dp" xmlns="http://www.w3.org/2000/svg" width="170" height="170" viewBox="0 0 170 170">
                    <g  transform="translate(0.155 0.155)">
                    <rect id="Retângulo_1345" data-name="Retângulo 1345" width="170" height="170" transform="translate(-0.155 -0.155)" fill="none"/>
                    <path id="Caminho_1175" data-name="Caminho 1175" d="M50.554,66.247l-9.96,9.96A51.072,51.072,0,0,1,28.039,55.586l13.607-3.437A37.5,37.5,0,0,0,50.554,66.247Zm8.557-36.191L31.055,2,3,30.055H24.182a105.068,105.068,0,0,0,1.333,15.22l13.607-3.437a92.687,92.687,0,0,1-.912-11.783Zm70.138,0L101.194,2,73.138,30.055H94.11c-.7,25.811-8.978,33.316-17.815,41.241a60.821,60.821,0,0,0-10.17,10.871,50.026,50.026,0,0,0-7.926-8.7l-9.89,9.89c6.523,5.962,10.8,10.8,10.8,23.847h0v35.069H73.138V107.208h0c0-14.168,4.98-18.657,12.555-25.46,9.679-8.7,21.6-19.5,22.444-51.692Z" transform="translate(18.72 12.706)" fill="#005271"/>
                    </g>
                </svg>
                <p id="title">Titulo</p>
                <p id="txt">Dolor sit amet, consetetur sadipscing elitr, sed</p>
            </Tittle>

            <ImgServices>
                <svg class="headset_mic_black_24dp" xmlns="http://www.w3.org/2000/svg" width="171" height="171" viewBox="0 0 171 171">
                    <path id="Caminho_1188" data-name="Caminho 1188" d="M0,0H171V171H0Z" fill="none"/>
                    <path id="Caminho_1189" data-name="Caminho 1189" d="M115.889,93.379V121.8H101.778V93.379h14.111m-84.667,0V121.8H24.167a7.1,7.1,0,0,1-7.056-7.106V93.379H31.222M66.5,1C31.434,1,3,29.637,3,64.955V114.7a21.214,21.214,0,0,0,21.167,21.318H45.333V79.167H17.111V64.955a49.39,49.39,0,1,1,98.778,0V79.167H87.667v56.849h28.222v7.106H66.5v14.212h42.333A21.214,21.214,0,0,0,130,136.015V64.955C130,29.637,101.566,1,66.5,1Z" transform="translate(19 6.333)" fill="#005271"/>
                </svg>
                <p id="title">Titulo</p>
                <p id="txt">Dolor sit amet, consetetur sadipscing elitr, sed</p>
            </ImgServices>

            <Exemple>
                <svg class="inventory_black_24dp" xmlns="http://www.w3.org/2000/svg" width="171" height="171" viewBox="0 0 171 171">
                    <g id="Grupo_529" data-name="Grupo 529">
                    <rect id="Retângulo_1350" data-name="Retângulo 1350" width="171" height="171" fill="none"/>
                    </g>
                    <g id="Grupo_531" data-name="Grupo 531" transform="translate(21.375 7.125)">
                    <g id="Grupo_530" data-name="Grupo 530">
                        <path id="Caminho_1194" data-name="Caminho 1194" d="M17.25,29.5H31.5v7.125a14.292,14.292,0,0,0,14.25,14.25H88.5a14.292,14.292,0,0,0,14.25-14.25V29.5H117V65.125h14.25V29.5A14.292,14.292,0,0,0,117,15.25H87.217a21.29,21.29,0,0,0-40.185,0H17.25A14.292,14.292,0,0,0,3,29.5v99.75A14.292,14.292,0,0,0,17.25,143.5H60V129.25H17.25ZM67.125,15.25A7.125,7.125,0,1,1,60,22.375,7.146,7.146,0,0,1,67.125,15.25Z" transform="translate(-3 -1)" fill="#005271"/>
                        <path id="Caminho_1195" data-name="Caminho 1195" d="M84.883,14.133a7.612,7.612,0,0,0-10.687,0L40.423,47.977l-16.1-16.031a7.612,7.612,0,0,0-10.687,0h0a7.612,7.612,0,0,0,0,10.688l21.731,21.66a7.1,7.1,0,0,0,10.046,0l39.4-39.472A7.547,7.547,0,0,0,84.883,14.133Z" transform="translate(48.71 66.023)" fill="#005271"/>
                    </g>
                    </g>
                </svg>
                <p id="title">Titulo</p>
                <p id="txt">Dolor sit amet, consetetur sadipscing elitr, sed</p>
            </Exemple>
        </DivServices>
    )
}

export default Service;

const DivServices = styled.div`
position: absolute;
top: 861px;
left: 300px;
width: 1320px;
height: 364px;
opacity: 1;

    @media (max-width: 1024px) {
        top: 567px;
        width: 920px;
        left: 100px;
    }

    @media (max-width: 666px){
        top: 465px;
        left: 15px;
        width: 0px;
    }
`

const Discovery = styled.div`
position: absolute;
top: 100px;
width: 312px;
height: 157px;
text-align: left;
font: normal normal 900 32px/38px 'Open Sans', sans-serif;
letter-spacing: 0px;
opacity: 1;

    #txtup {
        position: relative;
        height: 43px;
        text-align: left;
        font: normal normal 900 32px/38px 'Open Sans', sans-serif;
        letter-spacing: 0px;
        width: 325px;
        color: #033244;
        top: -30px;

        @media (max-width: 1024px) {
            font-size: 22px;
            width: 230px;
            top: 0px;
        }

        @media (max-width: 666px) {
            font-size: 20px;
            width: 230px;
            top: 0px;
            left: 15px;
        }
    }

    #txtdown {
        position: relative;
        height: 43px;
        text-align: left;
        font: normal normal 900 32px/38px 'Open Sans', sans-serif;
        letter-spacing: 0px;
        top: -12px;
        width: 360px;                  
        color: #00AEEF;

        @media (max-width: 1024px) {
            font-size: 22px;
            top: 5px;
            width: 250px;
        }

        @media (max-width: 666px) {
            font-size: 20px;
            width: 230px;
            top: 5px;
            left: 15px;
        }
    }

    #lookservices {
        position: relative;
        top: 20px;
        width: 181px;
        height: 36px;
        background: #71D8FF 0% 0% no-repeat padding-box;
        opacity: 1;
        border: 1px white;

        @media (max-width: 1024px) {
            top: 20px;
        }

        @media (max-width: 666px) {
            width: 115px;
            top: 15px;
            left: 50px;
        }

        strong {
            width: 103px;
            height: 19px;
            text-align: left;
            font: normal normal 900 14px/19px 'Open Sans', sans-serif;
            letter-spacing: 0px;
            color: #033244;
            text-transform: uppercase;
            opacity: 1;

            @media (max-width: 666px) {
                font-size: 11px;
            }
        }
    }

`

const Tittle = styled.div`
position: absolute;
top: 44px;
width: 284px;
height: 316px;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 1px 3px 10px #00000014;
opacity: 1;
left: 412px;

@media (max-width: 666px){
    top: 10px;
    left: 350px;
}

.alt_route_black_24dp {
    position: relative;
    left: 66px;
    opacity: 1;

    @media (max-width: 1024px){
        width: 130px;
        left: -30px;
    }

    @media (max-width: 666px){
        width: 75px;
        left: -30px;
    }
}

#title {
    position: relative;
    left: 42px;
    width: 223px;
    height: 21px;
    text-align: center;
    font: normal normal 900 16px/21px 'Open Sans', sans-serif;
    letter-spacing: 0px;
    color: #101912;
    opacity: 1; 

    @media (max-width: 1024px){
        left: -75px;
        top: -30px;
    }

    @media (max-width: 666px){
        top: -65px;
        font-size: 10px;
        left: -105px;
    }
}

#txt {
    position: relative;
    left: 42px;
    width: 223px;
    height: 40px;
    text-align: center;
    font: normal normal 500 15px/20px 'Open Sans', sans-serif; 
    letter-spacing: 0px;
    color: #101912;
    opacity: 1;
    top: 1px;

    @media (max-width: 1024px){
        left: -75px;
        top: -30px;
    }

    @media (max-width: 666px){
        left: -60px;
        top: -75px;
        font-size: 9px;
        width: 134px;
    }   
}
`

const ImgServices = styled.div`
    position: absolute;
    top: 44px;
    width: 284px;
    height: 316px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 1px 3px 10px #00000014;
    opacity: 1;
    left: 725px;
    width: 0px;

    @media (max-width:666px){
        left: 465px;
        top: 10px;
    }

    .headset_mic_black_24dp {
        position: relative;
        left: 66px;
        opacity: 1;

        @media (max-width: 1024px){
            width: 130px;
            left: -150px;
        }

        @media (max-width: 666px){
            width: 75px;
            left: -30px;
        }
    }

    #title {
        position: relative;
        left: 42px;
        width: 223px;
        height: 21px;
        text-align: center;
        font: normal normal 900 16px/21px 'Open Sans', sans-serif;
        letter-spacing: 0px;
        color: #101912;
        opacity: 1;   

        @media (max-width: 1024px){
            left: -196px;
            top: -30px;
        }

        @media (max-width: 666px){
            top: -65px;
            font-size: 10px;
            left: -105px;
        }
    }

    #txt {
        position: relative;
        left: 42px;
        width: 223px;
        height: 40px;
        text-align: center;
        font: normal normal 500 15px/20px 'Open Sans', sans-serif; 
        letter-spacing: 0px;
        color: #101912;
        opacity: 1;
        top: 1px;

        @media (max-width: 1024px){
            left: -196px;
            top: -30px;
        }

        @media (max-width: 666px){
            left: -60px;
            top: -75px;
            font-size: 9px;
            width: 134px;
        } 
    }
`

const Exemple = styled.div`
    position: absolute;
    top: 44px;
    width: 284px;
    height: 316px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 1px 3px 10px #00000014;
    opacity: 1;
    left: 1032px;
    width: 0px;

    @media (max-width:666px){
        left: 580px;
        top: 10px;
    }

    .inventory_black_24dp {
        position: relative;
        left: 66px;
        opacity: 1;

        @media (max-width: 1024px){
            width: 130px;
            left: -270px;  
        }

        @media (max-width: 666px){
            width: 75px;
            left: -30px;
        }
    }

    #title {
        position: relative;
        left: 42px;
        width: 223px;
        height: 21px;
        text-align: center;
        font: normal normal 900 16px/21px 'Open Sans', sans-serif;
        letter-spacing: 0px;
        color: #101912;
        opacity: 1; 

        @media (max-width: 1024px){
            left: -312px;
            top: -30px;
        }

        @media (max-width: 666px){
            top: -65px;
            font-size: 10px;
            left: -15px;
            width: 50px;
        
        }
    }

    #txt {
        position: relative;
        left: 42px;
        width: 223px;
        height: 40px;
        text-align: center;
        font: normal normal 500 15px/20px 'Open Sans', sans-serif; 
        letter-spacing: 0px;
        color: #101912;
        opacity: 1;
        top: 1px;

        @media (max-width: 1024px){
            left: -312px;
            top: -30px;
        }

        @media (max-width: 666px){
            left: -50px;
            top: -75px;
            font-size: 9px;
            width: 120px;
        } 
    }
`

