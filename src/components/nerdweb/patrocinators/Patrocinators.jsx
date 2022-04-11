import styled from 'styled-components';

function Patrocinators(){

    return (
        <DivPatrocinators>
            <h1 id="title">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            </h1>
            <p id="txt">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. <strong> At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren</strong>, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur <strong> sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et.</strong>
            </p>

            <img class="wcg" src={`${process.env.PUBLIC_URL}/img/nerdweb/selo-wgc.png`} alt=""/>

            <img class='vegan' src={`${process.env.PUBLIC_URL}/img/nerdweb/principle-2.png`} alt=""/>

            <img class='organic' src={`${process.env.PUBLIC_URL}/img/nerdweb/principle-3.png`} alt=""/>
        </DivPatrocinators>
    )
}

export default Patrocinators;

const DivPatrocinators = styled.div`
    position: absolute;
    top: 3332px;
    left: 300px;
    width: 1320px;
    height: 292px;
    opacity: 1;

    @media (max-width: 1024px){
        top: 2565px;
        left: -49px;
        width: 1024px;
    }

    @media (max-width: 666px) {
        top: 1985px;
        left: -60px;
        width: 666px;
        text-align: justify;
    }

    #title {
        position: absolute;
        left: 112px;
        top: 41px;
        width: 536px;
        height: 42px;
        text-align: left;
        font: normal normal 900 16px/21px 'Open Sans', sans-serif;
        letter-spacing: 0px;
        color: #2C3A2F;
        opacity: 1;

        @media (max-width: 666px){
            font-size: 12px;
            width: 400px;
        }
    }

    #txt {
        position: absolute;
        top: 100px;
        left: 112px;
        width: 536px;
        height: 164px;
        text-align: left;
        letter-spacing: 0px;
        color: #2C3A2F;
        opacity: 1;
        font-weight: 100;

        @media (max-width: 666px){
            font-size: 12px;
            width: 400px;
            top: 110px;
        }
    }

    strong {
        text-align: left;
        font: normal normal bold 15px/24px 'Open Sans', sans-serif;
        letter-spacing: 0px;
        color: #2C3A2F;

        @media (max-width: 666px){
            font-size: 12px;
        }
    }

    .wcg {
        position: absolute;
        right: 448px;
        top: 84px;
        opacity: 1;

        @media (max-width: 1024px){
            right: 240px;
            width: 115px;
        }

        @media (max-width: 666px){
            right: -15px;
            width: 90px;
            top: 35px;
        }
    }

    .vegan {
        position: absolute;
        right: 246px;
        top: 84px;
        background: transparent 0% 0% no-repeat padding-box;
        opacity: 1;

        @media (max-width: 1024px){
            right: 110px;
            width: 115px;
        }

        @media (max-width: 666px){
            right: -15px;
            width: 90px;
            top: 140px;
        }
    }

    .organic {
        position: absolute;
        right: 45px;
        top: 84px;
        background: transparent 0% 0% no-repeat padding-box;
        opacity: 1;

        @media (max-width: 1024px){
            width: 115px;
            right: -31px;
        }

        @media (max-width: 666px){
            width: 90px;
            right: -15px;
            top: 240px;
        }   
    }
`