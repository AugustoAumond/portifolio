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
            <Hits> 
                <h1>
                    {`Você acertou ${props.hit} de ${number}`}
                </h1> 
            </Hits>
            <DivQuestions>
                {questions.map((questions, index)=>(
                <Border>
                    <Header>
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
                        <h2 id="question">{questions?.question || "Carregando..."}</h2>
                    </Question>

                    <DivRadioQuestions>
                        {questions.answers.map((answer, i) => (                    
                            <DivRadio key={i} checked={answer===questions.correct_answer}>
                            <InputRadio type='radio' checked={answer === questions.result} />
                            <DivAlternativa> {answer}  </DivAlternativa>
                        </DivRadio>
                        ))}
                    </DivRadioQuestions>
                </Border>
                    ))}
            </DivQuestions>

            <ButtonNext>
                <button id="next" onClick={(()=> onStart())}> 
                    Ir para página inicial 
                </button>
            </ButtonNext>

        </DivColunm>
)};

export default TelaDeResultados;

const DivColunm = styled.div`
rowl-direction: colunm;
width: 100%;
background: #294232;
color: white;
`

const Hits = styled.div`
    display: flex;
    width: 100%;
    height: 370px;
    justify-content: center;
    align-content: center;
    align-items: center;
`

const DivQuestions = styled.div`
    max-width: 743px;
    min-width: 250px;
    border-radius: 15px;
    margin: 0 auto;

        @media (max-width: 850px){
            margin: 20px;
        }
`

const Border = styled.div`
    max-width: 743px;
    min-width: 250px;
    border: solid white;
    border-radius: 15px;
    height: 550px;
    margin: 10px;

        @media (max-width: 850px){
            margin: 20px;
        }
`

const  Header = styled.div`
display: flex;
justify-content: center;
margin: 10px;
text-align: center;

    @media (max-width: 650px){
        font-size: 14px;
    }
`

const Progress = styled.div`
display: flex;
height: 100px;
justify-content: space-between;
align-items: center;
margin-bottom: 9px;
`

const ProgressQuestions = styled.div`
position: relative;
left: 80px;
width: 300px;
height: 12px;
margin: 10px;
`

const Progress2 = styled.div`
position: relative;
top: 5px;
right: 55px;
width: 150px;
height: 12px;
border-radius: 10px;
border: solid 1px;
`

const Question = styled.div`
display: flex;
width: 100%;
margin-top: 25px;
justify-content: center;
align-items: center;

    #question {
        max-width: 500px;
        text-align: center;

        @media (max-width: 650px){
            font-size: 16px;
        }
    }   
`

const DivRadioQuestions = styled.ul`
flex-direction: column;
align-items: flex-start;
width: 80%;
margin: 30px;

    @media (max-width: 650px){
        font-size: 12px;
        width: 50%;
        margin: 5px;
    }
`

const DivRadio = styled.li`
display: flex;
background: ${props => props.checked ?  'red' : '#294232'};
align-items: center;
border-radius: 15px;
margin: 15px;
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

const ButtonNext = styled.div`
display: flex;
width: 85%;
background: #294232;
margin-top: 15px;
padding: 15px;

    #next{
        color: #294232;
        background: white;
        font-weight: 700;
        border-radius: 5px;
        border: 2px white;
        height: 40px;
        width: 40%;
        max-width: 350px;
        min-width: 140px;
        cursor: pointer;  
        transition: 2s;
        margin: 0 auto;
    }         

    #next:hover{
        background: #32ab326e;
        color: #32ab32;
    }
`
