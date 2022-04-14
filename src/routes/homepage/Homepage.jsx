import styled from "styled-components";
import './../../Styles/GlobalStyles.css';

import Contact from '../../components/Homepage/contact/Contact';
import Projects from "../../components/Homepage/mainprojects/MainProjects";


function Homepage(){  


  return (  
    <BodyBox class="bodybox">
      <div className="centralize">
        <Contact/>
        <Projects/> 
      </div>     
    </BodyBox>
  )
}

export default Homepage;

const BodyBox = styled.div`
  display: flex;
  position: relative;
  left: -55px;
  top: -23px;
  height: 1030px;
  width: 100%;
  margin: 15px;
  background: #9e9e9e;

    @media (max-width: 1450px){
      height: 1750px;
    }

    @media (max-width: 900px){
      height: 1435px;
    }

    .centralize {
      right: 5%;
      position: absolute;
      width: 1348px;
      height: 1000px;
    }

`

const DivContact = styled.div`
width: 100%;
margin: auto;`






