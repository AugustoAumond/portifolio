import styled from 'styled-components';

function History (){

    return (
        <DivHistory>
            <div id="title">
                Conheça a visão Nerdweb e entenda nossa história
            </div>
            <div id="txt">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</div>
            <div id="button">
                <button>
                    <strong>
                        IR PARA SOBRE
                    </strong>
                </button>
            </div>
        </DivHistory>
    )
}

export default History;

const DivHistory = styled.div`
    position: absolute;
    top: 2853px;
    left: 300px;
    width: 1320px;
    height: 399px;
    background: transparent url('./assets/BG\ CONHEÇA.png') 0% 0% no-repeat padding-box;
    opacity: 1;

    @media (max-width: 1024px){
        top: 2150px;
        width: 1020px;
        left: 2px;
    }

    @media (max-width: 666px){
        width: 662px;
        top: 1730px;
        height: 250px;
    }

    #title {
        position: absolute;
        left: 109px;
        top: 71px;
        width: 551px;
        height: 81px;
        text-align: left;
        font: normal normal 900 32px/38px 'Open Sans', sans-serif;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;

        @media (max-width: 666px){
            font-size: 25px;
            left: 100px;
            top: 45px;
            font: normal normal 900 20px/24px 'Open Sans', sans-serif;
        }
    }

    #txt {
        position: absolute;
        top: 168px;
        left: 112px;
        width: 607px;
        height: 52px;
        text-align: left;
        font: normal normal 500 20px/26px 'Open Sans', sans-serif;
        font-size: 20px;
        letter-spacing: 0px;
        color: #71D8FF;
        opacity: 1;

        @media (max-width: 666px){
            left: 100px;
            width: 500px;
            top: 100px;
            font-size: 14px;
        }
    }

    #button {
        position: absolute;
        top: 250px;
        left: 77px;
        width: 246px;
        height: 59px;

        button {
            position: absolute;
            top: 10px;
            left: 112px;
            width: 176px;
            height: 39px;
            background: #0089BC 0% 0% no-repeat padding-box;
            opacity: 1;

            @media (max-width: 666px){
                left: 20px;
                width: 135px;
                height: 30px;
                top: -75px;
            }
        }

        strong {
            position: absolute;
            top: 9px;            
            left: 26px;
            width: 130px;
            height: 19px;
            text-align: left;
            font: normal normal 900 14px/19px 'Open Sans', sans-serif;
            letter-spacing: 0px;
            color: #FFFFFF;
            text-transform: uppercase;
            opacity: 1;

            @media (max-width: 666px){
                font-size: 10px;
                top: 3px;
            }
        }
    }
`