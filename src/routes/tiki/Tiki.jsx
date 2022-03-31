import React from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';

import BackgroundandTitles from './../../components/tiki/background/Background';
import DivEvents from './../../components/tiki/divevents/DivEvents';
import Register from './../../components/tiki/divregister/DivRegister';


function Tiki() {

  const history = useHistory();

  const Back = () => {
    history.push('/');
  }

    return (
    
      <Body>
        <BackgroundandTitles/>
        <DivEvents/>
        <Register/> 
        <ButtonVoltar onClick={(()=> Back())}> Voltar página inicial</ButtonVoltar>  
      </Body>   
  );
}
export default Tiki;


const Body = styled.div`
`

const ButtonVoltar = styled.button`
height: 50px;
width: 250px;
position: absolute;
top: 3269px;
left: 1135px;
border-radius: 15px;
background: #26093A;
border: 1px white;
font-size: 22px;
color: white;
cursor: pointer;
`
