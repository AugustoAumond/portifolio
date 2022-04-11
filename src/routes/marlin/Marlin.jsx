//import axios from 'axios';
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom'

import Menu from './../../components/marlin/menu/Menu';
import Header from './../../components/marlin/header/Header';
import Hospitais from './../../components/marlin/hospitals/Hospitals'
import KnowMore from './../../components/marlin/know_more/Knowmore';

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
      <ButtonBack onClick={(()=> Back())}> Voltar para página inicial</ButtonBack>
    </DivBody>
  )
}

export default Marlin;


const DivBody = styled.div`

width: 100%;
height: 100vh;
margin: 0px;
`

const ButtonBack = styled.button`
height: 50px;
width: 250px;
position: relative;
top: -525px;
left: 613px;
border-radius: 15px;
background: #F7B53D;
border: 1px white;
font-size: 20px;
color: white;
cursor: pointer;

  @media(max-width:666px){
    top: 40px;
    left: 83px;
  }
`






