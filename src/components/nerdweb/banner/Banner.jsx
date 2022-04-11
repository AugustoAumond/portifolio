import styled from 'styled-components';

function Banner(){
    return (
        <DivBanner>
            <div class="banner"></div>  

            <i class="fa-solid fa-angle-left"></i>

            <i class="fa-solid fa-angle-right"></i>

        </DivBanner>
    )
}

export default Banner;

const DivBanner = styled.div`
.banner {
    background-image: url(${process.env.PUBLIC_URL}/img/nerdweb/banner.png);
    position: absolute;
    top: 133px;
    left: 0px;
    width: 1920px;
    height: 653px;
    opacity: 1;

        @media (max-width: 1024px) {
            background-image: url('./assets/painel1024.png');
            width: 1024px; 
            height: 345px;
        }

        @media (max-width: 666px){
            width: 666px;
            top: 110px;
        }
    }

    .fa-angle-left{
        position: absolute;
        top: 867px;
        height: 11px;
        width:7px;
        color: #005271 ;
        background: 0% 0% no-repeat padding-box;
        opacity: 1;
        left: 732px;

        @media (max-width: 1024px){
            left: 420px;
            top: 555px;
        }
        
        @media (max-width: 666px){
            left: 320px;
            top: 480px;
            font-size: 12px;
        }
    }

    .fa-angle-right{
        position: absolute;
        top: 867px;
        height: 11px;
        width:7px;
        color: #005271 ;
        background: 0% 0% no-repeat padding-box;
        opacity: 1;
        left: 777px;  
        
        @media (max-width: 1024px){
            left: 470px;
            top: 555px;
        }

        @media (max-width: 666px){
            left: 350px;
            top: 480px;
            font-size: 12px;
        }
    }
`