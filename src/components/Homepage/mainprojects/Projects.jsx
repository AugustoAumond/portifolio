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
width: 100%;
position: relative;
margin: 0 auto;
background: linear-gradient(360deg, #080325, gray);
`


