import styled from 'styled-components';


function Products (){

    return (
        <DivProducts>
            <TittleProducts>
                <p id="title1">Conheça todos</p>
                <p id="title2">produtos Nerdweb</p>
            </TittleProducts>   

            <Trio>
                <div class="sites">
                    <img src={`${process.env.PUBLIC_URL}/img/nerdweb/LAPTOP.png`} alt=""/>
                    <p>Sites</p>
                </div>

                <div class="e-commercer">
                    <img src={`${process.env.PUBLIC_URL}/img/nerdweb/PHONE.png`} alt=""/>
                    <p>E-COMMERCE</p>
                </div>

                <div class="redes">
                    <img src={`${process.env.PUBLIC_URL}/img/nerdweb//SHOP.png`} alt=""/>
                    <p>REDES</p>
                </div>
            </Trio>

            <Trio1>
                <div class="sites1">
                    <img src={`${process.env.PUBLIC_URL}/img/nerdweb/LAPTOP.png`}  alt=""/>
                    <p>Sites</p>
                </div>

                <div class="e-commercer1">
                    <img src={`${process.env.PUBLIC_URL}/img/nerdweb/PHONE.png`} alt=""/>
                    <p>E-COMMERCE</p>
                </div>

                <div class="redes1">
                    <img src={`${process.env.PUBLIC_URL}/img/nerdweb//SHOP.png`} alt=""/>
                    <p>REDES</p>
                </div>
            </Trio1>

            <Trio2>
                <div class="sites2">
                    <img src={`${process.env.PUBLIC_URL}/img/nerdweb/LAPTOP.png`}  alt=""/>
                    <p>Sites</p>
                </div>

                <div class="e-commercer2">
                    <img src={`${process.env.PUBLIC_URL}/img/nerdweb/PHONE.png`} alt=""/>
                    <p>E-COMMERCE</p>
                </div>

                <div class="redes2">
                    <img src={`${process.env.PUBLIC_URL}/img/nerdweb//SHOP.png`} alt=""/>
                    <p>REDES</p>
                </div>
            </Trio2>
            
            <div id="line" ></div>

            <div id="line2" ></div>

            <button class="lookall"><strong>VER TODOS PRODUTOS</strong> </button>
        </DivProducts>
    )
}

export default Products;

const DivProducts = styled.div`
position: absolute;
top: 1295px;
left: 300px;
width: 1320px;
height: 348px;

    @media (max-width: 1024px){
        top: 900px;
        left: 0px;
        width: 0px;
    }

    @media (max-width: 666px){
        width: 666px;
        top: 720px;
    }

    #line {
        position: absolute;
        top: 265px;
        width: 424px;
        height: 7px;
        background: #0089BC 0% 0% no-repeat padding-box;
        opacity: 1;
        left: 35px;

        @media (max-width: 1024px){
            width: 312px;
            left: 0px;
        }

        @media (max-width: 666px){
            width: 220px;
            left: 0px;
            top: 185px;
        }
    }

    #line2 {
        position: absolute;
        top: 265px;
        left: 320px;
        width: 1050px;
        height: 7px;
        background: #E1E1E1 0% 0% no-repeat padding-box;
        mix-blend-mode: multiply;
        opacity: 1;

        @media (max-width: 1024px) {
            width: 712px;
            left: 312px;
        }

        @media (max-width: 666px){
            width: 446px;
            left: 220px;
            top: 185px;
        }
    }
    
    .lookall {
        position: absolute;
        top: 302px;
        left: 544px;
        width: 233px;
        height: 37px;
        background: #71D8FF 0% 0% no-repeat padding-box;
        opacity: 1;
        border: white;

        @media (max-width: 1024px){
            width: 154px;
            height: 27px;
            left: 435px;
            top: 290px;
        }

        @media (max-width: 666px) {
            width: 154px;
            height: 27px;
            left: 260px;
            top: 215px;
        }

        strong {
            position: absolute;
            left: 29px;
            top: 10px;
            width: 187px;
            height: 19px;
            text-align: center;
            font: normal normal 900 14px/19px 'Open Sans', sans-serif;
            letter-spacing: 0px;
            color: #033244;
            text-transform: uppercase;
            opacity: 1;

            @media (max-width: 1024px){
                font-size: 10px;
                left: -15px;
                top: 5px;
            }
        }
    }
`

const TittleProducts = styled.div`
    position: absolute;
    left: 404px;
    width: 513px;
    height: 43px;

    @media (max-width: 1024px){
        left: 300px;
    }

    @media (max-width:666px) {
        left: 180px;    
    }

#title1 {
    position: absolute;
    height: 43px;
    text-align: left;
    font: normal normal 900 32px/43px 'Open Sans', sans-serif;
    letter-spacing: 0px;
    width: 275px;
    left: 0px;
    color: #033244;


    @media (max-width: 1024px){
        font-size: 24px;
        top: 25px;
    }

    @media (max-width: 666px){
        font-size: 20px;
        top: 35px;
    }
}

#title2 {
    position: absolute;
    height: 43px;
    text-align: left;
    font: normal normal 900 32px/43px 'Open Sans', sans-serif;
    letter-spacing: 0px;
    width: 335px;
    left: 225px;
    color: #00AEEF;

    @media (max-width: 1024px){
        font-size: 24px;
        top: 25px;
        left: 203px;
    }

    @media (max-width: 666px){
        font-size: 20px;
        left: 170px;
        top: 35px;
    }
}
`

const Trio = styled.div`
    position: absolute;
    width: 406px;
    height: 132px;
    top: 103px;
    left: 20px;

    .sites {
        position: absolute;
        width: 122px;
        height: 132px;
        background: #dfdfdf 0% 0% no-repeat padding-box;
        mix-blend-mode: multiply;
        opacity: 1;

        @media (max-width: 1024px) {
            width: 100px;
            height: 95px;
        }

        @media (max-width: 666px) {
            width: 60px;
            height: 73px;
        }
        
        img {
            position: absolute;
            top: -10px;
            width: 110px;
            height: 81px;
            opacity: 1;
            left: -10px;

            @media (max-width: 1024px) {
                top: 6px;
                left: 8px;
                width: 85px;
                height: 65px;
            }

            @media (max-width: 666px) {
                width: 45px;
                height: 45px;
            }
        }
    

        p {
            position: absolute;
            top: 80px;
            height: 19px;
            text-align: center;
            font: normal normal 500 14px/19px 'Open Sans', sans-serif;
            letter-spacing: 0px;
            color: #676767;
            text-transform: uppercase;
            opacity: 1;
            width: 40px;
            left: 30px;

            @media (max-width: 1024px) {
                font-size: 14px;
                top: 60px;
            }

            @media (max-width: 666px){
                left: 12px;
                font-size: 10px;
                top: 43px;
            }
        }
    }
    
        .e-commercer {
            position: absolute;
            width: 122px;
            height: 132px;
            background: #dfdfdf 0% 0% no-repeat padding-box;
            mix-blend-mode: multiply;
            opacity: 1;
            left: 148px;

            @media (max-width: 1024px) {
                width: 100px;
                height: 95px;
                left: 110px;
            }

            @media (max-width: 666px) {
                width: 60px;
                height: 73px;
                left: 70px;
            }

            img {
                position: absolute;
                top: 1px;
                width: 110px;
                height: 81px;
                opacity: 1;
                left: -5px;

                @media (max-width: 1024px) {
                    top: 6px;
                    left: 8px;
                    width: 85px;
                    height: 65px;
                }  

                @media (max-width: 666px) {
                    width: 45px;
                    height: 45px;
                }
            }

            p {
                position: absolute;
                height: 19px;
                text-align: center;
                font: normal normal 500 14px/19px 'Open Sans', sans-serif;
                letter-spacing: 0px;
                color: #676767;
                text-transform: uppercase;
                opacity: 1;
                left: 4px;
                width: 90px;
                top: 85px;

                @media (max-width: 1024px) {
                    font-size: 14px;
                    top: 60px;
                }

                @media (max-width: 666px){
                    left: -20px;
                    font-size: 8px;
                    top: 43px;
                    width: 100px;
                }
            }
        }

        .redes {
            position: absolute;
            width: 122px;
            height: 132px;
            background: #dfdfdf 0% 0% no-repeat padding-box;
            mix-blend-mode: multiply;
            opacity: 1;
            left: 296px;

            @media (max-width: 1024px) {
                width: 100px;
                height: 95px;
                left: 220px;
            }

            @media (max-width: 666px) {
                width: 60px;
                height: 73px;
                left: 140px;
            }

            img {
                position: absolute;
                top: -10px;
                width: 110px;
                height: 81px;
                opacity: 1;
                left: -8px;

                @media (max-width: 1024px) {
                    top: 6px;
                    left: 8px;
                    width: 85px;
                    height: 65px;   
                }

                @media (max-width: 666px) {
                    width: 45px;
                    height: 45px;
                }
            }

            p {
                position: absolute;
                top: 80px;
                height: 19px;
                text-align: center;
                font: normal normal 500 14px/19px 'Open Sans', sans-serif;
                letter-spacing: 0px;
                color: #676767;
                text-transform: uppercase;
                opacity: 1;
                left: 30px;

                @media (max-width: 1024px) {
                    font-size: 14px;
                    top: 60px;
                }

                @media (max-width: 666px){
                    left: 12px;
                    font-size: 10px;
                    top: 43px;
                }
            }
        }
`

const Trio1 = styled.div `
    position: absolute;
    width: 406px;
    height: 132px;
    top: 103px;
    left: 465px;
    
    @media (max-width: 1024px){
        left: 350px;  
    }  
    
    @media (max-width: 666px){
        left: 230px;
    }

    .sites1 {
        position: absolute;
        width: 122px;
        height: 132px;
        background: #dfdfdf 0% 0% no-repeat padding-box;
        mix-blend-mode: multiply;
        opacity: 1;

        @media (max-width: 1024px) {
            width: 100px;
            height: 95px;
        }

        @media (max-width: 666px) {
            width: 60px;
            height: 73px;
        }
        
        img {
            position: absolute;
            top: -10px;
            width: 110px;
            height: 81px;
            opacity: 1;
            left: -10px;

            @media (max-width: 1024px) {
                top: 6px;
                left: 8px;
                width: 85px;
                height: 65px;
            }

            @media (max-width: 666px) {
                width: 45px;
                height: 45px;
            }
        }

        p {
            position: absolute;
            top: 80px;
            height: 19px;
            text-align: center;
            font: normal normal 500 14px/19px 'Open Sans', sans-serif;
            letter-spacing: 0px;
            color: #676767;
            text-transform: uppercase;
            opacity: 1;
            width: 40px;
            left: 30px;

            @media (max-width: 1024px) {
                font-size: 14px;
                top: 60px;
            }

            @media (max-width: 666px){
                left: 12px;
                font-size: 10px;
                top: 43px;
            }
        }
    }
        .e-commercer1 {
            position: absolute;
            width: 122px;
            height: 132px;
            background: #dfdfdf 0% 0% no-repeat padding-box;
            mix-blend-mode: multiply;
            opacity: 1;
            left: 148px;

            @media (max-width: 1024px) {
                width: 100px;
                height: 95px;
                left: 110px;
            }

            @media (max-width: 666px) {
                width: 60px;
                height: 73px;
                left: 70px;
            }

            img {
                position: absolute;
                top: 1px;
                width: 110px;
                height: 81px;
                opacity: 1;
                left: -5px;

                @media (max-width: 1024px) {
                    top: 6px;
                    left: 8px;
                    width: 85px;
                    height: 65px;
                }  

                @media (max-width: 666px) {
                    width: 45px;
                    height: 45px;
                }
            }

            p {
                position: absolute;
                height: 19px;
                text-align: center;
                font: normal normal 500 14px/19px 'Open Sans', sans-serif;
                letter-spacing: 0px;
                color: #676767;
                text-transform: uppercase;
                opacity: 1;
                left: 4px;
                width: 90px;
                top: 85px;

                @media (max-width: 1024px) {
                    font-size: 14px;
                    top: 60px;
                }

                @media (max-width: 666px){
                    left: -20px;
                    font-size: 8px;
                    top: 43px;
                    width: 100px;
                }
            }
        }

        .redes1 {
            position: absolute;
            width: 122px;
            height: 132px;
            background: #dfdfdf 0% 0% no-repeat padding-box;
            mix-blend-mode: multiply;
            opacity: 1;
            left: 296px;

            @media (max-width: 1024px) {
                width: 100px;
                height: 95px;
                left: 220px;
            }

            @media (max-width: 666px) {
                width: 60px;
                height: 73px;
                left: 140px;
            }

            img {
                position: absolute;
                top: -10px;
                width: 110px;
                height: 81px;
                opacity: 1;
                left: -8px;

                @media (max-width: 1024px) {
                    top: 6px;
                    left: 8px;
                    width: 85px;
                    height: 65px;   
                }

                @media (max-width: 666px) {
                    width: 45px;
                    height: 45px;
                }
            }

            p {
                position: absolute;
                top: 80px;
                height: 19px;
                text-align: center;
                font: normal normal 500 14px/19px 'Open Sans', sans-serif;
                letter-spacing: 0px;
                color: #676767;
                text-transform: uppercase;
                opacity: 1;
                left: 30px;

                @media (max-width: 1024px) {
                    font-size: 14px;
                    top: 60px;
                }

                @media (max-width: 666px){
                    left: 12px;
                    font-size: 10px;
                    top: 43px;
                }
            }
        }
`

const Trio2 = styled.div`
    position: absolute;
    width: 406px;
    height: 132px;
    top: 103px;
    left: 910px;

    @media (max-width: 1024px){
        left: 680px;  
        width: 0px;
    }

    @media (max-width: 666px){
        left: 440px;
    }

    .sites2 {
        position: absolute;
        width: 122px;
        height: 132px;
        background: #dfdfdf 0% 0% no-repeat padding-box;
        mix-blend-mode: multiply;
        opacity: 1;

        @media (max-width: 1024px) {
            width: 100px;
            height: 95px;
        }

        @media (max-width: 666px) {
            width: 60px;
            height: 73px;
        }
        
        img {
            position: absolute;
            top: -10px;
            width: 110px;
            height: 81px;
            opacity: 1;
            left: -10px;

            @media (max-width: 1024px) {
                top: 6px;
                left: 8px;
                width: 85px;
                height: 65px;
            }

            @media (max-width: 666px) {
                width: 45px;
                height: 45px;
            }
        }
    }
    
        p {
            position: absolute;
            top: 80px;
            height: 19px;
            text-align: center;
            font: normal normal 500 14px/19px 'Open Sans', sans-serif;
            letter-spacing: 0px;
            color: #676767;
            text-transform: uppercase;
            opacity: 1;
            width: 40px;
            left: 30px;

            @media (max-width: 1024px) {
                font-size: 14px;
                top: 60px;
            }

            @media (max-width: 666px){
                left: 12px;
                font-size: 10px;
                top: 43px;
            }
        }
        
        .e-commercer2 {
            position: absolute;
            width: 122px;
            height: 132px;
            background: #dfdfdf 0% 0% no-repeat padding-box;
            mix-blend-mode: multiply;
            opacity: 1;
            left: 148px;

            @media (max-width: 1024px) {
                width: 100px;
                height: 95px;
                left: 110px;
            }

            @media (max-width: 666px) {
                width: 60px;
                height: 73px;
                left: 70px;
            }

            img {
                position: absolute;
                top: 1px;
                width: 110px;
                height: 81px;
                opacity: 1;
                left: -5px;

                @media (max-width: 1024px) {
                    top: 6px;
                    left: 8px;
                    width: 85px;
                    height: 65px;
                }  

                @media (max-width: 666px) {
                    width: 45px;
                    height: 45px;
                }
            }

            p {
                position: absolute;
                height: 19px;
                text-align: center;
                font: normal normal 500 14px/19px 'Open Sans', sans-serif;
                letter-spacing: 0px;
                color: #676767;
                text-transform: uppercase;
                opacity: 1;
                left: 4px;
                width: 90px;
                top: 85px;

                @media (max-width: 1024px) {
                    font-size: 14px;
                    top: 60px;
                }

                @media (max-width: 666px){
                    left: -20px;
                    font-size: 8px;
                    top: 43px;
                    width: 100px;
                }
            }
        }

        .redes2 {
            position: absolute;
            width: 122px;
            height: 132px;
            background: #dfdfdf 0% 0% no-repeat padding-box;
            mix-blend-mode: multiply;
            opacity: 1;
            left: 296px;

            @media (max-width: 1024px) {
                width: 100px;
                height: 95px;
                left: 220px;
            }

            @media (max-width: 666px) {
                width: 60px;
                height: 73px;
                left: 140px;
            }

            img {
                position: absolute;
                top: -10px;
                width: 110px;
                height: 81px;
                opacity: 1;
                left: -8px;

                @media (max-width: 1024px) {
                    top: 6px;
                    left: 8px;
                    width: 85px;
                    height: 65px;   
                }

                @media (max-width: 666px) {
                    width: 45px;
                    height: 45px;
                }
            }

            p {
                position: absolute;
                top: 80px;
                height: 19px;
                text-align: center;
                font: normal normal 500 14px/19px 'Open Sans', sans-serif;
                letter-spacing: 0px;
                color: #676767;
                text-transform: uppercase;
                opacity: 1;
                left: 30px;

                @media (max-width: 1024px) {
                    font-size: 14px;
                    top: 60px;
                }

                @media (max-width: 666px){
                    left: 12px;
                    font-size: 10px;
                    top: 43px;
                }
            }
        }
`