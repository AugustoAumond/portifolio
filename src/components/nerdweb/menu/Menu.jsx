import styled from 'styled-components';

function MenuNerd (){
    return (
        <DivMenu>
            <p class="site">SITES</p>
            <i class="fa fa-angle-down" onclick="Open()" ></i>
            <p class="sociais">REDES SOCIAIS</p>
            <p class="comerce">E-COMMERCE</p>
            <p class="midia">MÍDIA ONLINE</p>
            <p class="landing">LANDING PAGES</p>
            <input class="imenu" placeholder="Digite sua pesquisa"/>
            <i class="fa fa-magnifying-glass"></i>  
        </DivMenu>
    )
}
export default MenuNerd;

const DivMenu = styled.div`
position: absolute;
top: 62px;
left: 0px;
width: 1920px;
height: 72px;
background: #033244 0% 0% no-repeat padding-box;
opacity: 1;

    @media (max-width: 1024px){
        width: 1024px;
        height: 75px;
    }

    @media (max-width: 666px){
        width: 666px;
        height: 50px;
    }

    .site{
        position: absolute;
        top: 15px;
        height: 16px;
        font: normal normal normal 14px/16px Archer;
        letter-spacing: 0px;
        color: #FFFFFF;
        text-transform: uppercase;
        opacity: 1;
        left: 300px;
        width: 37px;

        @media (max-width: 1024px) {
            font-size: 11px;
            left: 20px;
        }

        @media (max-width: 666px){
            font-size: 10px;
            left: 15px;
            top: 5px;
        }
    }

    .fa-angle-down {
        position: absolute;
        top: 29px;
        left: 346px;
        width: 10px;
        height: 5px;
        color: white;
        opacity: 1;
        cursor: pointer;

        @media (max-width: 1024px) {
            top: 27px;
            left: 55px;
        }

        @media (max-width: 666px){
            font-size: 10px;
            left: 50px;
            top: 17px;
        }
    }

    .sociais {
        position: absolute;
        top: 15px;
        height: 16px;
        font: normal normal normal 14px/16px Archer;
        letter-spacing: 0px;
        color: #FFFFFF;
        text-transform: uppercase;
        opacity: 1;
        left: 397px;
        width: 103px;  
        
        @media (max-width: 1024px) {
            font-size: 11px;
            left: 85px;
            top: 9px;
            width: 50px;
        }

        @media (max-width: 666px){
            font-size: 10px;
            left: 80px;
            top: 0px;
            width: 50px;
        }
    }

    .comerce {
        position: absolute;
        top: 15px;
        height: 16px;
        font: normal normal normal 14px/16px Archer;
        letter-spacing: 0px;
        color: #FFFFFF;
        text-transform: uppercase;
        opacity: 1;
        left: 532px;
        width: 94px;

        @media (max-width: 1024px) {
            font-size: 11px;
            left: 145px;
        }

        @media (max-width: 666px){
            font-size: 10px;
            left: 135px;
            top: 7px;
        }
    }

    .midia {
        position: absolute;
        top: 15px;
        height: 16px;
        font: normal normal normal 14px/16px Archer;
        letter-spacing: 0px;
        color: #FFFFFF;
        text-transform: uppercase;
        opacity: 1;
        left: 658px;
        width: 99px;

        @media (max-width: 1024px) {
            font-size: 11px;
            left: 233px;
            width: 10px;
            top: 8px;
        }

        @media (max-width: 666px){
            font-size: 10px;
            left: 218px;
            width: 10px;
            top: -3px;
        }
    }

    .landing {
        position: absolute;
        top: 15px;
        height: 16px;
        font: normal normal normal 14px/16px Archer;
        letter-spacing: 0px;
        color: #FFFFFF;
        text-transform: uppercase;
        opacity: 1;
        left: 790px;
        width: 111px;

        @media (max-width: 1024px) {
            font-size: 11px;
            left: 289px;
            width: 10px;
            top: 8px;
        }

        @media (max-width: 666px){
            font-size: 10px;
            left: 270px;
            width: 8px;
            top: -3px;
        }
    }

    .imenu {
        position: absolute;
        top: 10px;
        left: 1382px;
        width: 238px;
        height: 40px;
        background: #033244 0% 0% no-repeat padding-box;
        border: 1px solid #00AEEF;
        border-radius: 8px;
        opacity: 1;

        @media (max-width: 1024px){
            top: 19px;
            left: 855px;
            width: 140px;
            height: 23px;
        }

        @media (max-width: 666px){
            top: 12px;
            left: 520px;
            width: 130px;
            height: 18px;
        }
    }

    .fa-magnifying-glass {
        position: absolute;
        top: 25px;
        left: 1600px;
        width: 23px;
        height: 23px;
        color: white;
        opacity: 1;

        @media (max-width: 1024px) {
            top: 27px;
            left: 982px;
            font-size: 12px;    
        }

        @media (max-width: 666px){
            top: 18px;
            left: 642px;
            font-size: 10px;
        }
    } 

`