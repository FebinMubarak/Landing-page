import React from 'react'
import "./Home.css"
import Card from '../Card/Card';
import burj from "../../img/burj.png"
import Fade from 'react-reveal/Fade';



function Home() {
  return (
    <div className="homepage">
        <div className="container1">
        
       
        
        <Fade bottom duration={1500}>
        <p className='heading1'>Lorem Ipsum is simply dummy printing and <br/> text of the printing and typesetting industry remaining essentially</p>
        </Fade>
   <Fade left duration={2300}> <Card 
    
         heading={"The point of using Lorem Ipsum is that it has a more"}
         details={"Many desktop publishing packages and web page editors now use "}
         details2={"Lorem Ipsum  as their default model text, and a search for 'lorem ipsum' will uncover many web sites"}
    /></Fade>
    <Fade left duration={3000} ><img height="420" width="320" className='img1' src={burj} alt="" /></Fade>
    
    <Fade bottom duration={1500}><button className='button button1'>to scroll</button></Fade>
    
   <div style={{top:"23rem",position:"absolute"}}
     ><Fade left duration={2300} ><Card 
      heading={"Lorem Ipsum is not simply random text"}
        details={"It has roots in a piece of classical Latin literature from 45 BC"}
        details2={"Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of"}
    /></Fade ></div>
        
    
    </div>
    </div>
  )
}

export default Home