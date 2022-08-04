import styled from "styled-components";

import Contact from '../../components/Homepage/contact/Contact';
import Projects from "../../components/Homepage/mainprojects/Projects";


function Homepage(){  


  return (  
    <BodyBox class="bodybox">

      <Contact/>

      <Projects/>

    </BodyBox>
  )
}

export default Homepage;

const BodyBox = styled.div`
  position: relative;
  border: solid 1px #80808085;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`






