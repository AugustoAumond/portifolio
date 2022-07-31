import styled from 'styled-components'
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

function InputQuestion(){
    let [counter,setCounter] = useState();

    // Rota para pagina das questões e setar o número de questões a ser respondidas;
    let history = useHistory();

    const onQuestions = (counter) => {  
       if (counter === undefined || counter === 0){
           return window.alert('Você não inseriu o número de questões que deseja responder')    
       }
       JSON.stringify(localStorage.setItem('counter', counter));
       history.push('questions');
    }; 

    const cancel = () => {
       setCounter('');
    }

    return (
        <NumberQuestions>
            <TitleChoiceQuestions>
                <h3 id="title">Escolha o número de perguntas que deseja responder</h3>
            </TitleChoiceQuestions>
            
            <DivInput>
                Quantas perguntas deseja responder?
                <InputQuestions value={counter} onChange={((e)=> setCounter(e.currentTarget.value))} type='number'  placeholder="Você pode escolher até 50 questões!"/> 
            </DivInput>
                       
            <DivButtons>
                <button id='btnstart' 
                    onClick={() => onQuestions(counter)}> 
                    Start 
                </button>
                <BTNCancel id='cancel' onClick={(()=> cancel())}> 
                    Cancel 
                </BTNCancel>
            </DivButtons>
        </NumberQuestions>
    )
}
export default InputQuestion;

const NumberQuestions = styled.div`
flex-direction: column;
background: white;
color: black;
max-width: 1350px;
height: 210px;
margin: auto;
border-radius: 26px;
border: solid 1px #32ab326e;
justify-content: center;
margin: 0 auto;
margin-top: -90px;
z-index: 2;
`

const TitleChoiceQuestions = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
margin: 15px;

    #title{
        color: #294232;
    }
`

const DivInput = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-left: 20px;
font-size: 16px;
margin: 15px;
color: #294232;
`

const InputQuestions = styled.input`
max-width: 700px;
width: 30%;
height: 8px;
padding: 15px;
border-radius: 5px;
margin-left: 10px;
`

const DivButtons = styled.div`
display: flex;
justify-content: space-evenly;
margin-top: 15px;

    #btnstart {
    background: #294232;
    color: white;
    border: solid 1px;
    border-radius: 5px;
    height: 40px;
    width: 90%;
    max-width: 350px;
    cursor: pointer;  
    transition: 2s;  
    
        #btnstart:hover{
            background: #32ab326e;
            color: #294232;
        }
    }
}   
`

const BTNCancel = styled.button`
color: gray;
border: solid 1px;
border-radius: 5px;
height: 40px;
width: 90%;
max-width: 350px;
cursor: pointer;
`