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
    display: flex;
    position: relative;
    left: -55px;
    top: -23px;
    height: 910px;
    width: 100%;
    margin: 15px;

    @media (max-width: 1450px){
      height: 1750px;
    }

    @media (max-width: 900px){
      height: 1435px;
    }
  }
`

const DivContact = styled.div`
width: 100%;
margin: auto;`






