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
            history.push('/nerdweb');
        }   else if (index === 3){
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
right: 300px;
background: ${props => props.index === 0 ? '#3b3838d4': (props.index === 1 ? '#26093ac7' : (props.index === 2 ? '#033244cc' : '#294232b8'))};

    @media (max-width: 1450px){
        top: 912px;
        right: 25%;
    }

    @media (max-width: 900px){
        right: 25%;
        width: 300px;
        height: 619px;
        top: 690px;
        left: none;
    }

    @media (max-width:500px){
        right: 10%;     
    }
`

const Title = styled.div`
color: white;
text-align: center;
position: relative;
top: 25px;

    h1 {
    @media (max-width: 900px){
        font-size: 22px;
    }
}
`

const Description = styled.div`
display: flex;
left: 50px;
top: -19px;
position: relative;
height: 285px;
width: 490px;
background: #ffffffad;

    @media (max-width: 900px){
        height: 285px;
        width: 220px;
        left: 14px;
        top: -225px;
    }

    ul {
        list-style: none;
        position: absolute;
        left: -47px;
    }

    li {
        font-size: 10px;
    }


`

const RouteProject = styled.div`
top: -22px;
right: 31px;
position: relative;
height: 346px;
width: 656px;

    img{
        width: 600px;
        height: 335px;
        position: absolute;
        left: 12px;
        border-radius: 20px;
        cursor: pointer;

        @media (max-width: 900px){
            width: 270px;
            height: 159px;
            top: -24px;
            left: 1px;
        }
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
display: ${props => props.index < 3 ? 'flex' : 'none'};

    #right {
        top: 302px;
        position: relative;
        height: 40px;
        width: 30px;
        left: 489px;
        color: white;

        @media (max-width: 900px){
            left: 191px;
            top: 84px;
            width: 39px;
            font-size: 8px;
        }
    }

    #arrowright {  
        top: 260px;
        position: relative;
        height: 40px;
        width: 30px;
        left: 565px;
        cursor: pointer;
        color: white;

        @media (max-width: 900px){
            top: 62px;
            left: 244px;
            height: 17px;
            width: 17px;
        }
    }
`

const DivLeft = styled.div`
display: ${props => props.index > 0 ? 'flex' : 'none'};

    #arrowleft {
        top: ${props => props.index === 3 ? '269px' : '184px'};
        position: relative;
        height: 40px;
        width: 30px;
        color: ${props => props.index === 0 ? '#06060b;' : 'white'};
        left: -11px;
        cursor: pointer;

        @media (max-width: 900px){
            top: ${props => props.index === 3 ? '62px' : '-23px'};
            left: -17px;
            height: 17px;
            width: 17px;
        }
    }

    #left{
        position: relative;
        top: ${props => props.index === 3 ? '314px' : '229px;'};
        height: 40px;
        width: 30px;
        color: ${props => props.index === 0 ? '#06060b;' : 'white'};
        left: -84px;

        @media (max-width: 900px){
            top: ${props => props.index === 3 ? '84px' : '-1px;'};
            left: -69px;
            width: 39px;
            font-size: 8px;
        }
    }

`

