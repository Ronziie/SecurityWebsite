import React from 'react'
import '../Main.css'
import Footer2 from './Footer2'
import { motion } from 'framer-motion';
import Particles from "./Particles";
import Navbar from "./Navbar";


export default function Portfolio() {
  return (

    <motion.div initial={{ width: 0 }} animate={{ width: "100%"}} exit={{ x: window.innerWidth, transition: { duration: 0.4}}}>
      <Navbar />
        <div className='about-us'>
          <div className='about-us-image' style={{width:"100%", height:"200px", backgroundColor:"red"}}>
          <img src={require("../docassesment.png")} alt="#" style={{width:"100%", height:"300px"}}></img>
          </div>
          <div className='about-us-title'>About Us</div>
          <div className='about-us-content' style={{overflowY:"scroll", height: "600px"}}>

            <p className='about-us-text' style={{overflowY: "scroll"}}>
                G3 Security Services is a dynamic and innovative company committed to providing innovative security solutions to both our clients and candidates. Our company's operations are based on British Standards, BS7858 for Vetting member of staff, BS7499 for providing Security officers and mobile patrol services.
                <br></br>
                            <br></br>

                We pride ourselves in providing a full range of Security Management Services and committed to continually improve the contents and quality. Well qualified and experienced professionals are dedicated for the growth and improvement of the security services.

                We have the highest standards of integrity and excellence at every level. To us, integrity and professionalism are of the utmost importance.
                <br></br>
                <br></br>
                As a firm committed to excellence, we maintain highest industry standards for security officer's training, honour, loyalty and character. All of our security officers are highly trained and are subject to constant site supervision and random inspections. Our Security officers can also assist in undertaking Additional duties such as, reception, stock control and administration, dispute management & so on.

                We believe that our most important asset is our staff and for this we are always seeking the very best people from the market. 
                <br></br>
                <br></br>
                To get the best personnel we offer attractive rates of pay, benefits and genuine incentive for staff to work and make a career. We always nurture our staff and give them better opportunity to develop their skills and knowledge so that they may develop a successful career in security industry. G3 security follows a fair and square policy of recruitment subject to our Equal Opportunity policy.

                We have developed one of the most comprehensive approaches to client services through our monthly Report System. Our operations manger organizes regular meetings with clients at designated intervals for the review of our security plan on sites. Our approach is to discuss individual needs with each and every client and then to design and implement a quality system plan that fully meets the requirements of their specific area of concern.
            </p>
          </div>
        </div>
        <Particles />
        <Footer2 />
    </motion.div>
    
  )
}
