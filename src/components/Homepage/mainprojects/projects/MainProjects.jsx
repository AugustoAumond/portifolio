import styled from 'styled-components';
import {useHistory} from 'react-router-dom';

import {projects} from './Projects.action';

function MainProjects (){
    const history = useHistory();

    const routes =  (index) => {
        if (index === 0){
            history.push('/marlin');
        } else if (index === 1){
            history.push('/tiki');
        }else if (index === 2){
            history.push('/codificar');
        }        
    }   

    return (
        <DivProjects>
            {projects.map((e, index)=>(
            <MainProject key={index}>
                <div onClick={(()=> routes(index))}>

                    <img src={`${e.photo}`}/>

                    <h3> {e.name} </h3>

                </div>
            </MainProject>
            ))}

        </DivProjects>
    )
}
export default MainProjects;

const DivProjects = styled.div`
display: flex;
align-items: center;
text-align: center;
animation: transition 6s;
margin: 0 auto;

    @keyframes transition{
        from {
            color: #ffffff00;
            width: 40%;
        };
        to {
            color: white;
            width: 100%;
        };
    }

    @media (max-width: 600px){
        flex-direction: column;
    }
`

const MainProject = styled.div`
position: relative;
flex: 1 1 200px;

    div {
        cursor: pointer;
    }

    img {
        width: 90%;
        max-width: 500px;
        cursor: pointer;

        @media (max-width: 600px){
            width: 80%;
        }
    }
    
    h3 {
        color: white;
        top: -12px;
        position: relative;
    }
`


