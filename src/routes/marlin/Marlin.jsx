//import axios from 'axios';
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom'

import Menu from './../../components/marlin/menu/Menu';
import Header from './../../components/marlin/header/Header';
import Hospitais from './../../components/marlin/hospitals/Hospitals';
import KnowMore from '../../components/marlin/know_more/Knowmore';

import axios from 'axios';

function Marlin(){ 
  const [data, setData] = useState([]);

  const history = useHistory();

  const Back = () => {
    history.push('/');
  }

    useEffect(() => {
      async function fetchData() {
        await axios.get(`https://5cf9ae9df26e8c00146cff8d.mockapi.io/api/v1/hospital`)
      .then((e) => {
      
        setData(e.data)
         
      })
      .catch((e) => {
          setData([])
      })
    }
      fetchData();
    }, []);

  return ( 
    <DivBody class='DivBox'>
      <Menu/>
      <Header/>
      <Hospitais list={data}/> 
      <KnowMore/>
      <div id='align'>
        <ButtonBack onClick={(()=> Back())}> Voltar para página inicial</ButtonBack>
      </div>
      
    </DivBody>
  )
}

export default Marlin;


const DivBody = styled.div`
  width: 100%;
  position: relative;
  min-height: 100vh;
  margin: 0 auto;

  @media (max-width: 1366px){
    right: unset;
  }

  @media (max-width: 666px){
    min-width: 375px;
  }

  #align {
    width: 98%;
    display: flex;
    justify-content: center;
    align-items:center;
    margin: 50px;

    @media (max-width: 666px){
      margin: unset;
    }
  }
`

const ButtonBack = styled.button`
height: 50px;
width: 250px;
border-radius: 15px;
background: #F7B53D;
border: 1px white;
font-size: 20px;
color: white;
cursor: pointer;

  @media(max-width:666px){
    margin-top: 40px;
  }
`






