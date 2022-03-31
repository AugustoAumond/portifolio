import React from "react";
import styled from "styled-components";
import { useHistory } from 'react-router-dom';


function TelaDeResultados(props){
    const number = localStorage.getItem('counter');
    const hit = props.hit;
  
    // Adicionando no localstorage o histórico atual e removendo o numero de acerto e perguntas;
    function addHist (props){
        const hist = JSON.stringify({number: number, hit: hit});
        localStorage.setItem('currenthistoric', hist);
        localStorage.removeItem('counter');
        localStorage.removeItem('hit');
    }

    // Adicionando o histório e puxando para a pagina de entrada;
    const history = useHistory();
    const onStart = () => {
        addHist();
        history.push('/start')}; 

    const questions = props.questions;
    
    return(  
        <DivColunm>
            <Hits> <h1>{`Você acertou ${props.hit} de ${number}`}</h1> </Hits>
            {questions.map((questions, index)=>(
            <><Header>
                    <h2>Categoria: {questions?.category || "Carregando..."}  </h2>
            </Header>
            <Progress>
                <ProgressQuestions>
                    {index + 1}/ {number}
                </ProgressQuestions>
                <Progress2>
                </Progress2>
            </Progress>

             <Question>
                <h2>{questions?.question || "Carregando..."}</h2>
            </Question>
            <DivRadioQuestions>
                {questions.answers.map((answer, i) => (                    
                    <DivRadio key={i} checked={answer===questions.correct_answer}>
                    <InputRadio type='radio' checked={answer === questions.result} />
                    <DivAlternativa> {answer}  </DivAlternativa>
                </DivRadio>
                ))}
            </DivRadioQuestions></>
            ))}
            
            <ButtonNext onClick={(()=> onStart())}> Ir para página inicial </ButtonNext>

        </DivColunm>
)};

export default TelaDeResultados;

const DivColunm = styled.div`
rowl-direction: colunm;
`

const Hits = styled.div`
display: flex;
height: 570px;
justify-content: center;
align-content: center;
align-items: center;
`

const  Header = styled.div`
display: flex;
justify-content: center;
`

const Progress = styled.div`
display: flex;
height: 65px;
justify-content: space-between;
align-items: center;
margin-bottom: 9px;
`

const ProgressQuestions = styled.div`
display: flex;
width: 25%;
height: 12px;
margin-left: 10%;
margin-top: 35px;
border-radius: 10px;
`

const Progress2 = styled.div`
display: flex;
width: 150px;
height: 12px;
margin-right: 10%;
margin-top: 35px;
border-radius: 10px;
border: solid 1px;
`

const Question = styled.div`
display: flex;
text-align: center;
height: 5%;
width: 65%;
margin-top: 25px;
margin-left: auto;
margin-right: auto;
justify-content: center;
`

const DivRadioQuestions = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin-top: 55px;
margin-left: 10%;
`

const DivRadio = styled.div`
display: flex;
background: ${props => props.checked ? 'red' : 'white'};
width: 95%;
align-items: center;
`

const InputRadio = styled.input`
display: flex;
height: 30px;
margin-left: 5px;
border: solid 1px;
cursor:pointer;
`

const DivAlternativa = styled.div`
margin-left: 10px;`

const ButtonNext = styled.button`
display: flex;
background: #294232;
font-size: 20px;
color: white;
width: 90%;
height: 45px;
margin-left: auto;
margin-right: auto;
margin-top: 50px;
align-items: center;
border: 2px solid black;
box-shadow: 2px 2px 4px 2px black;
justify-content: center;
cursor: pointer;
`
