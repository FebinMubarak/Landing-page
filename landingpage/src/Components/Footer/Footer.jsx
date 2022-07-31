import React from 'react'
import Card from "../Card/Card"
import "./Footer.css"
import home from "../../img/home.png"
import home2 from "../../img/home2.png"

function Footer() {
  return (
    <div className='footer'>
        <div className='footerheading'>
         <Card 
             heading={"There are many variations of passages of Lorem Ipsum"}
             details={"but the majority have suffered alteration in some form"}
             details2={"randomised words which don't look"}
         />
         </div>
         <div className="footerheading2">
            <Card
               heading={"Richard McClintock, a Latin professor at Hampden "}
               details={" All the Lorem Ipsum generators on the Internet tend "}
               details2={"to repeat predefined chunks as necessary"}
            
            />
         </div>
         <img className='img3' src={home} alt="" />
         <img className='img4' src={home2} alt="" />
    </div>
  )
}

export default Footer