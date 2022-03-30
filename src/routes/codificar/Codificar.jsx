import React from 'react';
import styled from 'styled-components';

import { useHistory } from 'react-router-dom';

function Codificar () {

  const history = useHistory();

  const onStart = () => {
    history.push('/start'); 
  }
  
    return (
      <Body>
        <Title onClick={(() => onStart())}> <h1> 
        Questionario
           </h1> </Title>         
      </Body>
    );
  
}
export default Codificar;

const Body = styled.div`
background: #294232;
`

const Title = styled.div`
display: flex;
color: white;
height: 100vh;
align-items: center;
justify-content: center;
cursor: pointer;
`

