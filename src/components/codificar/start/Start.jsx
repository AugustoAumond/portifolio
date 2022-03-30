import React, {Fragment, useState} from "react";
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';

import UltimosResultados from "../ultimos_resultados/UltimosResultados";

function Start(){ 
    let [counter,setCounter] = useState();

     // Rota para pagina das questões e setar o número de questões a ser respondidas;
     let history = useHistory();

     const onQuestions = () => {  
        JSON.stringify(localStorage.setItem('counter', counter));
        if (localStorage.getItem('counter') === undefined || localStorage.getItem('counter') === 0){
            window.alert('Você não inseriu o número de questões que deseja responder')    
        }
        history.push('questions')
     }; 

     const cancel = () => {
        setCounter('');
     }

     function Back(){
         history.push('/');
     }
    

    return ( 
        <Fragment>
            <DivHeader>
               <DivTitulo> 
                   <h1>Aplicativo de Questionário </h1> 
                </DivTitulo>

                <DivDescription>
                    <h3> Venha aprender e se divertir com o aplicativo de perguntas sobre conhecimentos gerais! </h3>
                </DivDescription>
                <NumberQuestions>
                   <TitleChoiceQuestions>
                        <h3 id="title">Escolha o número de perguntas que deseja responder</h3>
                    </TitleChoiceQuestions>
                    
                    <DivInput>
                        Quantas perguntas deseja responder?
                        <InputQuestions value={counter} onChange={((e)=> setCounter(e.currentTarget.value))} type='number'  placeholder="Você pode escolher até 50 questões!"/> 
                    </DivInput>
                        
                        
                    <DivButtons>
                        <BTNStart 
                            onClick={() => onQuestions()}> 
                         Start 
                         </BTNStart>
                        <BTNCancel onClick={(()=> cancel())}> 
                            Cancel 
                        </BTNCancel>
                    </DivButtons>
               </NumberQuestions>
            </DivHeader>

            <TabelResults>
                <h2 id="lastresult"> Seus últimos resultados </h2>
                <UltimosResultados />
            </TabelResults>
            <ButtonBack onClick={(()=> Back())}> Voltar para página inicial</ButtonBack>
        </Fragment>
    )
}

export default Start;


const DivHeader = styled.div`
top: 10px;
left: 1px;
position: absolute;
color: white;
height: 280px;
width: 1350px;
background: #294232;
flex-direction: column;
`
const DivTitulo = styled.div`
display: flex;
text-align: initial;
width: 400px;
height: 175px;
margin: 7px;
`

const DivDescription = styled.div`
display: flex;
width: 600px;
margin-top: -76px;
margin-left: 5px;
`

const NumberQuestions = styled.div`
flex-direction: column;
background: white;
color: black;
width: 900px;
height: 180px;
margin: auto;
margin-bottom: -80px;
border-radius: 26px;
border: solid 1px;
-webkit-box-pack: center;
justify-content: center;
`

const TitleChoiceQuestions = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;

    #title{
        position: relative;
        left: -50px;
        top: -15px;
    }
`

const DivInput = styled.div`
position: relative;
left: 30px;
top: -20px;
font-size: 16px;
margin: 5px;
justify-content: flex-start;
`

const InputQuestions = styled.input`
width: 700px;
height: 30px;
padding: 15px;
border-radius: 5px;
margin-left: 10px;
`

const DivButtons = styled.div`
display: flex;
justify-content: space-evenly;
margin-top: 15px;
`

const BTNStart = styled.button`
background: #294232;
color: White;
border: solid 1px;
border-radius: 5px;
height: 40px;
width: 350px;
cursor: pointer;
position: relative;
top: -35px;
`

const BTNCancel = styled.button`
color: gray;
border: solid 1px;
border-radius: 5px;
height: 40px;
width: 350px;
cursor: pointer;
position: relative;
top: -35px;
`

const TabelResults = styled.div`
position: relative;
left: 275px;
top: 425px;  

    #lastresult{       
        top: 25px;
        position: relative;
        left: 235px;
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
