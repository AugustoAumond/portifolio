import styled from 'styled-components';

function Workus (){

    return (
        <DivWorkus> 
            <div id="txt">
                <div id="title"> Faça parte do nosso time de nerds</div>
                <div id="txt">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                </div>

                <button id="button">
                    <p id="txtbutton">
                        CADASTRE-SE
                    </p>
                </button>
            </div>
        </DivWorkus>
    )
}

export default Workus;

const DivWorkus = styled.div`
position: absolute;
top: 1714px;
left: 300px;
width: 1320px;
height: 402px;
background: transparent url('./assets/bg\ time.png') 0% 0% no-repeat padding-box;
opacity: 1;

    @media (max-width: 1024px){
        top: 1260px;
        left: 2px;
        width: 1020px;
        height: 280px;
    }

    @media (max-width: 666px){
        width: 662px;
        top: 990px;
    }

    #txt {
        position: absolute;
        top: 82px;
        left: 77px;
        width: 646px;
        height: 248px;
        opacity: 1;

        @media (max-width: 666px){
            left: 45px;
        }

        #title {
            position: absolute;
            left: 35px;
            text-align: left;
            font: normal normal 900 32px/43px 'Open Sans', sans-serif;
            letter-spacing: 0px;
            color: #033244;
            opacity: 1;

            @media (max-width: 1024px){
                font-size: 26px;
            }
        }

        #txt {
            position: absolute;
            left: 35px;
            top: 63px;
            width: 533px;
            height: 72px;
            text-align: left;
            font: normal normal bold 18px/24px 'Open Sans', sans-serif;
            letter-spacing: 0px;
            color: #005271;
            opacity: 1;

            @media (max-width: 1024px){
                font-size: 15px;
                top: 50px;
            }
        }

        #button {
            position: absolute;
            top: 199px;
            left: 35px;
            width: 169px;
            height: 39px;
            background: var(--unnamed-color-71d8ff) 0% 0% no-repeat padding-box;
            background: #71D8FF 0% 0% no-repeat padding-box;
            opacity: 1;
            border: white;

            @media (max-width: 1024px){
                top: 150px;
            }

            @media (max-width: 666px){
                height: 30px;
                width: 135px;
                top: 140px;
            }

            #txtbutton {
                position: absolute;
                top: 1px;
                left: 36px;
                text-align: left;
                font: normal normal 900 14px/19px Roboto Slab;
                letter-spacing: 0px;
                color: #033244;
                text-transform: uppercase;
                opacity: 1;

                @media (max-width: 1024px){
                    top: -2px;
                }

                @media (max-width: 666px){
                    top: -7px;
                    left: 20px;
                }
            }
        }
    }
`