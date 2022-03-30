//import axios from 'axios';
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom'

import Header from './../../components/marlin/header/Header';
import Hospitais from './../../components/marlin/hospitals/Hospitals'
import KnowMore from './../../components/marlin/know_more/Knowmore';

import axios from 'axios';

const user = `${process.env.PUBLIC_URL}/imagens/Usuario.png`

function Marlin(){ 
  const [data, setData] = useState([]);

  const history = useHistory();

  const Back = () => {
    history.push('/');
  }

  useEffect (async () => {
      await axios.get(`https://5cf9ae9df26e8c00146cff8d.mockapi.io/api/v1/hospital`)
      .then((e) => {
      
        setData(e.data)
         
      })
      .catch((e) => {
          setData([])
      })
    }, [])

  return ( 
    <DivBody>
      <Header/>
      <Hospitais list={data}/> 
      <KnowMore/>
      <ButtonBack onClick={(()=> Back())}> Voltar para página inicial</ButtonBack>
    </DivBody>
  )
}

export default Marlin;


const DivBody = styled.div`
`

const ButtonBack = styled.button`
height: 50px;
width: 250px;
position: relative;
top: -665px;
left: 613px;
border-radius: 15px;
background: #F7B53D;
border: 1px white;
font-size: 20px;
color: white;
cursor: pointer;

  @media(max-width:666px){
    top: 0px;
    left: 83px;
  }
`






