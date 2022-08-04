import React, { Fragment, useEffect, useState} from 'react';
import styled from 'styled-components';

import axios from "axios";

import TelaDeResultados from '../tela_de_resultados/TelaDeResultados';


function Questions(){
    const [questions, setQuestions] = useState([]);
    const [tab, setTab] = useState(0);
    const [value,setValue] = useState();
    const [hit, setHit] = useState(0);

    //Pegando o número de questões a ser respondidas
    const number= localStorage.getItem('counter');

    //Pegando as questão e já tratando as perguntas
    useEffect(() => {
        const loadData = async () => {
          try {
            const request = await axios.get(`https://opentdb.com/api.php?amount=${number}`);
            let processedData = request.data.results;
            processedData.forEach((e, index) => {
                if (e.correct_answer || e.incorrect_answers){
                    let answers = [ ];
        
                    processedData[index].answers = answers;
        
                    let correct = e.correct_answer ;
                    let incorrect = e.incorrect_answers;
        
                    answers.push(correct)
        
                    incorrect.map((e)=>{
                        answers.push(e);
                        return answers;
                    });          
                    
                answers.sort();    
                }
            })
            setQuestions(processedData);
          } catch (error) {
            console.info(error);
          }
        };
    
        loadData();
      }, [number]);

    //Validando as questões enquanto não carrega os dados importados api;
    if (questions.length === 0){
        return (
            <Fragment> Carregando </Fragment>
        )
    }

    //Mostrando na tela os resultados
    if (tab + 1 > questions.length){
        return (    
            <TelaDeResultados questions={questions} hit={hit} />
        )
    }

    //Pegando os acertos
    const onHits = () => {
        if (questions[tab].result === questions[tab].correct_answer){
              setHit(hit + 1);  
            }
        }
    //Interrompendo quando não há nenhuma opção marcada;
    const stopQuestions = (answer) => {
        if (value === undefined){
            window.alert('Marque uma opção para continuar!')        
        }
        else { 
            onHits();  
            setTab(tab + 1);
        }   
    }

    // Pular para próxima pergunta e setar as respostas no array;
    const onTab = () =>{
        if (tab + 1 > questions.length){
            onHits(hit + 1);
        }

        if (tab + 1 < questions.length) {
            const newQuestions = questions;
            newQuestions[tab].result = value;
            setQuestions(newQuestions);
            stopQuestions(questions);         
        };

        if (tab + 1 === questions.length){
            const newQuestions = questions;
            newQuestions[tab].result = value;
            stopQuestions(newQuestions); 
        } 
        setValue();
    }

    return (
        <ExternBorder>
            <DivColunm>
                <Header>
                    <h2>
                        Categoria: {questions[tab]?.category || "Carregando..."}  
                    </h2> 
                </Header>

                <Progress>
                    <ProgressQuestions>
                        {tab + 1} / {number}
                    </ProgressQuestions>
                    <Progress2>
                    </Progress2>
                </Progress>

                <Question>
                    <h2 id='question'>
                        {questions[tab]?.question || "Carregando..."}
                    </h2>  
                </Question>

                <DivRadioQuestions>
                    {questions[tab].answers.map((answer, index) => (
                        <DivRadio key={index} checked={value===answer}>
                            <InputRadio type='radio' name={questions[tab]?.category} onChange={ () => setValue(answer)} checked={value===answer} /> 
                            <DivAlternativa> {answer}  </DivAlternativa> 
                        </DivRadio>
                    ))}
                </DivRadioQuestions>
                <ButtonNext> 
                   <button id='next' onClick={(()=> onTab())}>
                        {tab + 1 === questions.length? 'Resultado' : 'Próxima Pergunta'}
                   </button>
                </ButtonNext>
            </DivColunm>
        </ExternBorder>
       
    )

};

export default Questions;
const ExternBorder = styled.div`
width: 100%;
height: 100vh;
background: #294232; 
color: white;
`

const DivColunm = styled.div`
position: relative;
top: 50px;
max-width: 743px;
min-width: 250px;
border: solid white;
border-radius: 15px;
height: 650px;
margin: 0 auto;

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
background: ${props => props.checked ?  '#32ab326e' : '#294232'};
align-items: center;
border-radius: 15px;
margin: 15px;
`

const InputRadio = styled.input`
height: 30px;
margin-left: 15px;
border: solid 1px;
cursor:pointer;
`

const DivAlternativa = styled.div`
margin-left: 10px;
`

const ButtonNext = styled.div`
display: flex;
width: 100%;
background: #294232;
border: none;
margin-top: 15px;

    #next{
        margin: 0 auto;
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
        transition: 0.5s;
    }         

    #next:hover{
        background: #32ab326e;
        color: #32ab32;
    }

    @media (max-width: 650px){
       #next{ 
            font-size: 14px;
            height: 30px;
        }
    }
`