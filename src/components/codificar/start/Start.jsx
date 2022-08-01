import React from "react";
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';

import Header from "./header/Header";
import InputQuestions from "./input_questions/Input_Questions";
import TabelResults from "./tabel_results/Tabel_Results";

function Start(){ 
    let history = useHistory();

     function Back(){
         history.push('/');
     }
    

    return ( 
        <DivStart>
            <Header/>

            <InputQuestions/>
            
            <TabelResults/>

            <div id="centralize">
                <button id="back" onClick={(()=> Back())}> 
                    Voltar para página inicial
                </button>
            </div>
            
        </DivStart>
    )
}

export default Start;

const DivStart = styled.div`
max-width: 1375px;
min-width: 375px;
height: 100vh;
background: #294232;

    #centralize{
        positon: relative;
        top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        background: #294232;
    }

    #back {
        position: unset;
        height: 50px;
        max-width: 250px;
        border-radius: 10px;
        background: white;
        border: solid 1px white;
        font-size: 20px;
        color: #294232;
        font-weight: 700;
        cursor: pointer;
        margin: 0 auto;

        @media (max-width: 600px){
            height: 35px;
            font-size: 16px;
        }
    }
`




