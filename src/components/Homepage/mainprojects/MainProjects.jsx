import { useState } from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';

import {ImArrowRight, ImArrowLeft} from 'react-icons/im'

import {projects} from './MainProjects.action';

function MainProjects(){
    const [index, setIndex] = useState(0);
    const history = useHistory();

    const routes =  () => {
        if (index === 0){
            history.push('/marlin');
        } else if (index === 1){
            history.push('/tiki');
        }  else if (index === 2){
            history.push('/codificar');
        }      
    }   

    return(
    <Div index={index}>
        <Title>
            <h1>Principais Projetos</h1>
        </Title>
        <Project>  
        <RouteProject onClick={(()=>{routes()})}>
            <img src={projects[index].photo} alt="" /></RouteProject>   
            <Description>
                    <p>Ferramentas: </p> 
                    <strong>
                        {projects[index].discription}
                    </strong>
            </Description>    
        </Project>
            <DivRight index={index}>
                <ImArrowRight onClick={(()=> setIndex(index + 1))} index={index} id="arrowright"/>
                <h3 id='right'>Próximo Projeto</h3>
            </DivRight>
            <DivLeft index={index}>
                <ImArrowLeft onClick={(()=> setIndex(index - 1))} id='arrowleft'/>
                <h3 id='left' >Projeto Anterior</h3>
            </DivLeft>  
    </Div>
    )    
}
export default MainProjects;

const Div = styled.div`
height: 776px;
width: 650px;
position: absolute;
top: 52px;
left: 600px;
background: ${props => props.index === 0 ? '#3b3838d4': (props.index === 1 ? '#26093ac7' : '#294232b8')};

`

const Title = styled.div`
color: white;
text-align: center;
position: relative;
top: 25px;
`

const Description = styled.div`
display: flex;
left: 50px;
top: -19px;
position: relative;
height: 285px;
width: 490px;
background: #ffffffad;
`

const RouteProject = styled.div`
top: -22px;
right: 31px;
position: relative;
height: 346px;
width: 656px;

    img{
        width: 600px;
        position: absolute;
        left: 12px;
        border-radius: 20px;
        cursor: pointer;
    }
`

const Project = styled.div`
height: 200px;
position: relative;
top: 50px;
text-align: justify;


    div{
        display: flex;
    }

    p{  color: black;
        position: absolute;
        top: -6px;
    }

    strong{
        color: #0f0f46;
        font-size: 14px;

    }
`

const DivRight = styled.div`
display: ${props => props.index < 2 ? 'flex' : 'none'};

    #right {
        top: 302px;
        position: relative;
        height: 40px;
        width: 30px;
        left: 489px;
        color: ${props => props.index === 0 ? '#06060b;' : 'white'};
    }

    #arrowright {  
        top: 260px;
        position: relative;
        height: 40px;
        width: 30px;
        left: 565px;
        cursor: pointer;
        color: ${props => props.index === 0 ? '#06060b;' : 'white'};
    }
`

const DivLeft = styled.div`
display: ${props => props.index > 0 ? 'flex' : 'none'};

    #arrowleft {
        top: ${props => props.index === 2 ? '269px' : '184px'};
        position: relative;
        height: 40px;
        width: 30px;
        color: ${props => props.index === 0 ? '#06060b;' : 'white'};
        left: -11px;
        cursor: pointer;
    }

    #left{
        position: relative;
        top: ${props => props.index === 2 ? '314px' : '229px;'};
        height: 40px;
        width: 30px;
        color: ${props => props.index === 0 ? '#06060b;' : 'white'};
        left: -84px;
    }
`

