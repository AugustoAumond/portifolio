import React, {useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

function UltimosResultados(props){
    let [i, setI] = useState();
    let [historic, setHistoric] = useState([]);

    //Resetando a pagina de entrada para atualizar após remover um item;
    const history = useHistory();
    const onStart = () => {
        history.push('/start')}; 

    
    //Pegar o historico atual, o histórico completo, e tratar os dados setando na tela o histórico;
    useEffect (()=>{
        const currentHistoric = JSON.parse(localStorage.getItem('currenthistoric'));
        let Allhistoric = JSON.parse(localStorage.getItem('historic'));
        if (currentHistoric !== null) {
             if (Allhistoric === null || Allhistoric === undefined){
                Allhistoric = [currentHistoric];
                localStorage.setItem('historic', JSON.stringify(Allhistoric));
            }else {
                Allhistoric.push(currentHistoric);
                JSON.stringify(localStorage.setItem('historic', JSON.stringify(Allhistoric)));
            }  
            document.querySelector('#remove').style.display = 'flex'; 
        } 

        if (Allhistoric){
            document.querySelector('#remove').style.display = 'flex'; 
        }
        
        setHistoric(JSON.parse(localStorage.getItem('historic')));
        localStorage.removeItem('currenthistoric');   
    }, [])
    

    //Função para remover algum histórico;
    const onRemove = (hist) => {
        let newHistoric = hist;
        newHistoric.forEach((e, index)=>{
            if (i===index){
                newHistoric.splice(index, 1);         
                if (newHistoric[0] === undefined){
                    localStorage.removeItem('historic');
                    document.querySelector('#remove').style.display = 'none';
                    onStart();  
                }else {
                    
                    setHistoric(newHistoric);  
                    JSON.stringify(localStorage.setItem('historic', JSON.stringify(historic))); 
                    setI();
                    onStart();      
                }
            }                                    
        })        
    }

    //Comentário central baseado nos acertos do usuário;
    function Comments(number, hit){
        let result = (hit / number) * 10;
        if (result >= 8){
            return "Execelente Resultado! Você sabe tudo!"
        }   
        else if (result < 8 && result >= 6 ){
            return "Bom trabalho! Um pouco mais você chega a perfeição!"
        }
            else if ((result < 6)  &&  (result >= 4)){ 
                return "Você deu azar, as perguntas eram muito dificeis mesmo."
        }else {
            return "Acontece nas melhores famílias."   
        }            
    }

    return (
        <DivLastResults>
            <ul>
            {historic !== null ?     
            historic?.map((event, index) => (
                <DivHistoric key={index}>
                    <DivCheck type='radio' name={'check'} changecolor={i} value={index} onClick={(e)=> setI(index)} checked={i===index}/>
                    <Comment>
                        {Comments(event.number, event.hit)}
                    </Comment>
                    <HistoricDatas>
                        {event.hit} / {event.number}
                    </HistoricDatas>     
                </DivHistoric> 
            ))
            
             : 
            <NoResult> 
                <h2>
                    Não há histórico disponível no momento
                </h2> 
            </NoResult>
            }
            </ul>
            <div id="endButton">
                <button id="remove"  onClick={(()=> onRemove(historic))}> 
                    Remover 
                </button>
            </div>   
        </DivLastResults>       
    )
}
    
export default UltimosResultados;

const DivLastResults = styled.div`
width: 100%;
max-width: 1375px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

#endButton {
    display: flex;
    width: 100%;
    justify-content: flex-end;
}

    #remove {
        display: none;
        justify-content: center;
        align-items: center;
        margin: 40px;
        color: gray;
        font-weight: 700;
        background: white;
        border: solid 1px;
        border-radius: 5px;
        height: 40px;
        width: 20%;
        max-width: 150px;
        cursor: pointer;
        transition: 0.5s;
    }

    #remove:hover {      
        background: gray;
        color: white;   
    }

    ul {
        width: 100%;
    }
`

const DivHistoric = styled.li`
    display: flex;
    background: ${props => props.changecolor  ? '#294232' : '#32ab32'};
    border: solid 2px;
    height: 40px;
    border-radius: 10px;
    text-align: center;
    width: 85%;
    margin: 0 auto;
    max-width: 550px;
    margin-bottom: 10px;
`

const DivCheck = styled.input`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

const Comment = styled.div`
    display: flex;
    width: 75%;
    align-items: center;
    justify-content: center;
`

const HistoricDatas = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const NoResult = styled.div`
    margin: 30px;
    text-align: center;
`