import React from "react";
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';

import UltimosResultados from "../ultimos_resultados/UltimosResultados";

import Header from "./header/Header";
import InputQuestions from "./input_questions/Input_Questions";

function Start(){ 
    let history = useHistory();

     function Back(){
         history.push('/');
     }
    

    return ( 
        <DivStart>
            <Header/>

            <InputQuestions/>
            
            <TabelResults>
                <h2 id="lastresult"> Seus últimos resultados </h2>
                <UltimosResultados />
            </TabelResults>
            <ButtonBack onClick={(()=> Back())}> Voltar para página inicial</ButtonBack>
        </DivStart>
    )
}

export default Start;

const DivStart = styled.div`
max-width: 1375px;`

const TabelResults = styled.div`  

    #lastresult{       

    }
`

const ButtonBack = styled.button`
height: 50px;
width: 250px;
position: absolute;
top: 786px;
left: 570px;
border-radius: 15px;
background: #294232;
border: 1px white;
font-size: 20px;
color: white;
cursor: pointer;
`
