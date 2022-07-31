import React from 'react'
import Card from "../Card/Card"
import "./Footer.css"
import home from "../../img/home.png"
import home2 from "../../img/home2.png"
import Fade from 'react-reveal/Fade';

function Footer() {
  return (
    <div className='footer'>
        <div className='footerheading'>
         <Fade bottom duration={1500}><Card 
             heading={"There are many variations of passages of Lorem Ipsum"}
             details={"but the majority have suffered alteration in some form"}
             details2={"randomised words which don't look"}
         /></Fade>
         </div>
         <div className="footerheading2">
         <Fade bottom duration={1600}><Card
               heading={"Richard McClintock, a Latin professor at Hampden "}
               details={" All the Lorem Ipsum generators on the Internet tend "}
               details2={"to repeat predefined chunks as necessary"}
            
            /></Fade>
         </div>
         <Fade left duration={2000}> <img  className='img3' src={home} alt="" /></Fade>
        <Fade right duration={2000}> <img className='img4' src={home2} alt="" /></Fade>
    </div>
  )
}

export default Footer