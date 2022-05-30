import styled from 'styled-components';

import Title from './title/Title';
import MainProjects from './projects/MainProjects';

function Projects(){

    return(
    <Div>

        <Title/> 

        <MainProjects/>

    </Div>
    )    
}
export default Projects;

const Div = styled.div`
height: 400px;
width: 80%;
position: relative;
top: 52px;
margin: 0 auto;
background: #293345;
border: solid white;

`


