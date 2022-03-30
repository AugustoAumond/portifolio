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
            processedData.map((e, index) => {
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
      }, []);

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
        <DivColunm>
            <Header>
            <h2>Categoria: {questions[tab]?.category || "Carregando..."}  </h2> 
            </Header>

            <Progress>
                <ProgressQuestions>
                    {tab + 1} / {number}
                </ProgressQuestions>
                <Progress2>
                </Progress2>
            </Progress>

            <Question>
                <h2>{questions[tab]?.question || "Carregando..."}</h2>  
            </Question>

            <DivRadioQuestions>
                {questions[tab].answers.map((answer, index) => (
                    <DivRadio key={index} checked={value===answer}>
                        <InputRadio type='radio' name={questions[tab]?.category} onChange={ () => setValue(answer)} checked={value===answer} /> 
                        <DivAlternativa> {answer}  </DivAlternativa> 
                    </DivRadio>
                ))}
            </DivRadioQuestions>
            <ButtonNext onClick={(()=> onTab())}>{tab + 1 === questions.length? 'Resultado' : 'Próxima Pergunta'}</ButtonNext>

        </DivColunm>
       
    )

};

export default Questions;

const DivColunm = styled.div`
width: 743px;
position: absolute;
border: solid;
height: 650px;
left: 180px;
`

const  Header = styled.div`
display: flex;
justify-content: center;
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
text-align: center;
height: 50px;
width: 500px;
margin-top: 25px;
margin-left: auto;
margin-right: auto;
justify-content: center;
`

const DivRadioQuestions = styled.div`
flex-direction: column;
align-items: flex-start;
position: relative;
top: 15px;
`

const DivRadio = styled.div`
display: flex;
background: ${props => props.checked ? '#294232' : 'white'};
align-items: center;
border-radius: 15px;
`

const InputRadio = styled.input`
display: flex;
height: 20px;
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