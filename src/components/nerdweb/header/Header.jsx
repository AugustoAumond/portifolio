import styled from 'styled-components'


function Header (){
    return (
        <Head>
            <img src={`${process.env.PUBLIC_URL}/img/nerdweb/logo.png`} id="logo" alt=""/>
            <p class="nerdweb">Nerdweb</p>
            <p class="services">Serviços</p>
            <p class="blog">Blog</p>
            <p class="attendance">Atendimento</p>
            <p class="day">Dia a Dia</p>
            <svg class="account_circle_black_24dp" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                <path id="Caminho_9" data-name="Caminho 9" d="M0,0H32V32H0Z" fill="none"/>
                <path id="Caminho_10" data-name="Caminho 10" d="M15.333,2A13.333,13.333,0,1,0,28.667,15.333,13.338,13.338,0,0,0,15.333,2ZM8.76,23.707c.573-1.2,4.067-2.373,6.573-2.373s6.013,1.173,6.573,2.373a10.567,10.567,0,0,1-13.147,0Zm15.053-1.933c-1.907-2.32-6.533-3.107-8.48-3.107s-6.573.787-8.48,3.107a10.667,10.667,0,1,1,16.96,0Zm-8.48-14.44A4.667,4.667,0,1,0,20,12,4.655,4.655,0,0,0,15.333,7.333Zm0,6.667a2,2,0,1,1,2-2A2,2,0,0,1,15.333,14Z" transform="translate(0.667 0.667)" fill="#00aeef"/>
            </svg>
            <svg class="shopping_cart_black_24dp" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                <path id="Caminho_11" data-name="Caminho 11" d="M0,0H32V32H0Z" fill="none"/>
                <path id="Caminho_12" data-name="Caminho 12" d="M20.4,16.667a2.654,2.654,0,0,0,2.333-1.373L27.507,6.64a1.328,1.328,0,0,0-1.16-1.973H6.613L5.36,2H1V4.667H3.667l4.8,10.12-1.8,3.253A2.671,2.671,0,0,0,9,22H25V19.333H9l1.467-2.667ZM7.88,7.333h16.2L20.4,14H11.04Zm1.12,16A2.667,2.667,0,1,0,11.667,26,2.663,2.663,0,0,0,9,23.333Zm13.333,0A2.667,2.667,0,1,0,25,26,2.663,2.663,0,0,0,22.333,23.333Z" transform="translate(0.333 0.667)" fill="#00aeef"/>
            </svg>
        </Head>
        )
    }
export default Header;

const Head = styled.div `
    position: absolute;
    top: 0px;
    left: 0px;
    width: 1920px;
    height: 62px;
    background: #ffffff10 0% 0% no-repeat padding-box;

    @media (max-width: 1024px){
        width: 1024px;
        height: 42px;
    }

    @media (max-width: 666px){
        width: 666px;
    }

    img {
        position: relative;
        top: 21px;
        left: 302px;
        width: 110px;
        height: 21px;

        @media (max-width: 1024px){
            position: relative;
            top: 12px;
            left: 15px;
            width: 60px;
            height: 12px;
        }        
    }

    .nerdweb{
        position: absolute;
        top: 10px;
        height: 16px;
        text-align: left;
        font: normal normal normal 14px/16px "ArchorPro";
        letter-spacing: 0px;
        color: #2C3A2F;
        opacity: 1;
        left: 471px;
        width: 54px;

        @media (max-width: 1024px) {
            font-size: 14px;
            left: 101px;
        }      

        @media (max-width: 666px){
            font-size: 10px;
            left: 82px;
        }
    }

    .services{
        position: absolute;
        top: 10px;
        height: 16px;
        text-align: left;
        font: normal normal normal 14px/16px "ArchorPro";
        letter-spacing: 0px;
        color: #2C3A2F;
        opacity: 1;
        left: 550px;
        width: 51px;  
        
        @media (max-width: 1024px) {
            font-size: 14px;
            left: 162px;
        }

        @media (max-width: 666px){
            font-size: 10px;
            left: 125px;
        }
}

    .blog{
        position: absolute;
        top: 10px;
        height: 16px;
        text-align: left;
        font: normal normal normal 14px/16px "ArchorPro";
        letter-spacing: 0px;
        color: #2C3A2F;
        opacity: 1;
        left: 629px;
        width: 27px; 
        
        @media (max-width: 1024px) {
        font-size: 14px;
        left: 222px;
        }

        @media (max-width: 666px){
            font-size: 10px;
            left: 167px;
        }
    }

    .attendance {
        position: absolute;
        top: 10px;
        height: 16px;
        text-align: left;
        font: normal normal normal 14px/16px "ArchorPro";
        letter-spacing: 0px;
        color: #2C3A2F;
        opacity: 1;        
        left: 686px;
        width: 78px;  
        
        @media (max-width: 1024px) {
            font-size: 14px;
            left: 263px;
        }

        @media (max-width: 666px){
            font-size: 10px;
            left: 193px;
        }
    }

    .day {
        position: absolute;
        top: 10px;
        left: 1410px;
        width: 60px;
        height: 15px;
        text-align: right;
        font: normal normal bold 12px/15px Archer;
        letter-spacing: 0.18px;
        color: #000000;
        text-transform: uppercase;
        opacity: 1;

        @media (max-width: 1024px) {   
            font-size: 12px;
            left: 855px;
            top: 14px;
        }

        @media (max-width: 666px){
            font-size: 10px;
            left: 535px;
            top: 9px;
        }
    }

    .account_circle_black_24dp {
        position: absolute;
        top: 15px;
        left: 1527px;
        opacity: 1;

        @media (max-width: 1024px) {
            width: 26px;
            left: 930px;
        }

        @media (max-width: 666px){
            font-size: 10px;
            left: 600px;
            top: 9px;
        }
    }

    .shopping_cart_black_24dp {
        position: absolute;
        top: 15px;
        left: 1589px;
        width: 32px;
        height: 32px;
        opacity: 1;

        @media (max-width: 1024px) {
            width: 26px;
            left: 975px;
        }

        @media (max-width: 666px){
            font-size: 10px;
            left: 630px;
            top: 9px;
        }
    }
`

