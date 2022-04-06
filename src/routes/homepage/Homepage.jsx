import styled from "styled-components";
import './../../Styles/GlobalStyles.css';

import Contact from '../../components/Homepage/contact/Contact';
import Projects from "../../components/Homepage/mainprojects/MainProjects";


function Homepage(){  


  return (  
    <BodyBox id="bodybox">
      <img id="background" src={`${process.env.PUBLIC_URL}/img/background2.jpg`} alt="" />
      <Contact/>
      <Projects/>      
    </BodyBox>
  )
}

export default Homepage;

const BodyBox = styled.div`
  #background{
    position: relative;
    left: -55px;
    top: -23px;
    height: 910px;
    width: 1470px;
  }
`




