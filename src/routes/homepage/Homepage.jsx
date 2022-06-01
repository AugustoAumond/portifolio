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
  display: block;
  position: relative;
  left: -55px;
  top: -23px;
  width: 100%;
  margin: 15px;
  height: 1750px;

`

const DivContact = styled.div`
width: 100%;
margin: auto;`






