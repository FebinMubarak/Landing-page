import React from 'react'
import "./Home.css"
import Card from '../Card/Card';
import burj from "../../img/burj.png"
import burj2 from "../../img/burj2.png"

function Home() {
  return (
    <div className="homepage">
        <div className="container1">
    <div className='heading1'>Lorem Ipsum is simply dummy printing and <br/> text of the printing and typesetting industry remaining essentially</div>

    <Card 
    
         heading={"The point of using Lorem Ipsum is that it has a more"}
         details={"Many desktop publishing packages and web page editors now use "}
         details2={"Lorem Ipsum  as their default model text, and a search for 'lorem ipsum' will uncover many web sites"}
    />
    <img className='img1' src={burj} alt="" />
    
    <button className='button button1'>Contact us</button>
    <div style={{top:"29rem",position:"absolute"}}
     ><Card 
        heading={"Lorem Ipsum is not simply random text"}
        details={"It has roots in a piece of classical Latin literature from 45 BC"}
        details2={"Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of"}
    /> </div>
    </div>
    </div>
  )
}

export default Home