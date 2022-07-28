import styled from 'styled-components';

import {useMediaQuery} from 'react-responsive'


function Header () {
  const mobile = useMediaQuery({ query: '(max-width: 666px)' })

    return (
      <Head>  
        {mobile ? <img id="img" alt='' src={`${process.env.PUBLIC_URL}/img/marlin/Grupo309.png`} /> : <img id='img' alt='' src={`${process.env.PUBLIC_URL}/img/marlin/painel.png`}/>}
          <div id='text'>
            Conforto e qualidade para levar bem-estar com alto padrão de atendimento a seus funcionários.
            <div id="line"></div>   
          </div>
 
                  
          <p id='goldplan'>Conheça o plano Ouro da Porto Seguro Saúde.</p>
          <p id='starting'> A partir de </p>
          <p id='reais'> R$ </p>  
          <p id='fifty'> 255 </p> 
          <p id='sixty'> ,65* </p>  
          <button id='buttonver'><strong> VER MAIS</strong></button>
          <div id='littleletters'>*Valor referente ao plano Ouro Copar Q (ANS: 481.277/18-8) de 3 à 9 vidas, com 20% de copart. com faixa etária entre 0 e 18 anos. Sem IOF. Promoção válida até 30 de abril de 2021.</div>
        </Head>
    )
}

export default Header;

const Head = styled.div`
  position: relative;
  width: 100%;
  max-width: 1450px;
  height: 768px;
  margin: 0 auto;

  @media(max-width: 666px){
    width: 375px;
  }

  #img {
    width: 100%;
    max-width: 1450px;
    height: 768px;
  }

    #text{
      position: absolute;
      top: 206px;
      width: 431px;
      height: 275px;
      left: 32px;
      color: white;
      text-align: left;
      font: normal normal bold 40px/55px Open Sans;
      text-shadow: 0px 3px 6px #00000017;

      @media (max-width: 666px){   
        width: 337px;
        height: 215px;
        position: absolute;
        top: 277px;
        left: 25px;
        text-align: left;
        font: normal normal bold 30px/41px Open Sans;
        letter-spacing: 0px;
        color: #FFFFFF;
        text-shadow: 0px 3px 4px #00000082;
      }
    }

 

    #line {
      position: relative;
      top: 20px;
      width: 163px;
      border-bottom: solid 3px white;

      @media(max-width: 666px){
        width: 137px;
      }
    }

    #goldplan {
      position: absolute;
      top: 521px;
      left: 32px;
      width: 327px;
      height: 68px;
      font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-25)/var(--unnamed-line-spacing-34) var(--unnamed-font-family-open-sans);
      letter-spacing: var(--unnamed-character-spacing-0);
      color: var(--unnamed-color-ffffff);
      text-align: left;
      font: normal normal normal 28px/37px Open Sans;
      letter-spacing: 0px;
      color: #FFFFFF;
      opacity: 1;

      @media(max-width: 666px){
        display: none;
      }    
    }

    #starting {
      position: absolute;
      top: 609px;
      left: 33px;
      width: 102px;
      height: 30px;
      color: var(--unnamed-color-ffffff);
      text-align: left;
      font: italic normal normal 22px/34px Open Sans;
      letter-spacing: 0px;
      color: #FFFFFF;

      @media(max-width: 666px){
        top: 536px;
        left: 17px;
        width: 83px;
        height: 23px;
        text-align: left;
        font: italic normal normal 17px/26px Open Sans;
        letter-spacing: 0px;
        color: #FFFFFF;
      }  
    }

    #reais {
      position: absolute;
      top: 607px;
      left: 152px;
      width: 43px;
      height: 47px;
      text-align: left;
      font: normal normal bold 35px/54px Open Sans;
      letter-spacing: 0px;
      color: #FFFFFF;

      @media(max-width: 666px){
        top: 538px;
        left: 105px;
        width: 21px;
        height: 23px; 
        text-align: left;
        font: normal normal bold 17px/26px Open Sans;
        letter-spacing: 0px;
        color: #FFFFFF;       
      }  
    }

    #fifty {
      position: absolute;
      top: 598px;
      left: 199px;
      width: 92px;
      height: 74px;
      text-align: left;
      font: normal normal bold 54px/43px Open Sans;
      letter-spacing: 0px;
      color: #FFFFFF;


      @media(max-width: 666px){
        top: 524px;
        left: 133px;
        width: 57px;
        height: 45px;  
        text-align: left;
        font: normal normal bold 33px/26px Open Sans;
        letter-spacing: 0px;
        color: #FFFFFF;   
      }
    }


    #sixty {
      position: absolute;
      top: 609px;
      left: 291px;
      width: 59px;
      height: 41px;
      text-align: left;
      font: normal normal bold 30px/43px Open Sans;
      letter-spacing: 0px;
      color: #FFFFFF;

      @media(max-width: 666px){
        top: 531px;
        left: 193px;
        width: 36px;
        height: 24px;
        text-align: left;
        font: normal normal bold 18px/26px Open Sans;
        letter-spacing: 0px;
        color: #FFFFFF;
      }
    }


    #buttonver{
      position: absolute;
      color: white;
      font-size: 18px;
      top: 607px;
      left: 378px;
      width: 183px;
      height: 62px;
      background: #F7B53D 0% 0% no-repeat padding-box;
      box-shadow: 0px 3px 6px #0000008A;
      border-radius: 31px;
      border: white;
      opacity: 1;

      @media(max-width: 666px){
        top: 552px;
        left: 232px;
        width: 110px;
        height: 37px;
        text-align: center;
        font: normal normal 600 12px/18px Open Sans;
        letter-spacing: 1.5px;
        color: #FFFFFF;
      }  
    }

    #littleletters{
      position: absolute;
      top: 712px;
      left: 32px;
      width: 476px;
      height: 47px;
      text-align: left;
      font: normal normal normal 12px/15px Open Sans;
      letter-spacing: 0px;
      color: #FFFFFF;
      opacity: 0.5;

      @media(max-width: 666px){
        top: 607px;
        left: 16px;
        width: 317px;
        height: 31px;
        text-align: left;
        font: normal normal normal 8px/10px Open Sans;
        letter-spacing: 0px;
        color: #FFFFFF;
      }  
    }
  `