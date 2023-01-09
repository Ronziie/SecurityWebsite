import React from 'react'
import '../Main.css';
import Footer2 from './Footer2';
import Particles from './Particles';
import { Carousel } from 'react-bootstrap';
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';
import { FaMedal } from 'react-icons/fa';
import { GoChecklist } from 'react-icons/go';
import { TbCertificate } from 'react-icons/tb';
import { GiPoliceOfficerHead } from 'react-icons/gi';
import { TfiTimer } from 'react-icons/tfi';
import { BsGraphDown } from 'react-icons/bs';
import { motion } from 'framer-motion';
import Navbar from './Navbar';



export default function Services() {
  return (
    <motion.div className='services-container' initial={{ width: 0 }} animate={{ width: "100%"}} exit={{ x: window.innerWidth, transition: { duration: 0.4} }}>
      <Navbar />
      <div className='Carousel-1'>
          <Carousel>
            <Carousel.Item>
              <img
              className='carousel-container' 
              src={require("../images/guards talking.jpg")} 
              alt='slide1'
              style={{width: '100%', height: '300px'}}
              />
            </Carousel.Item>

            <Carousel.Item>
              <img 
              className='carousel-container' 
              src={require("../images/healthcareguards.png")} 
              alt='slide2'
              style={{width: '100%', height: '300px'}}/>
            </Carousel.Item>

            <Carousel.Item>
              <img
              className='carousel-container' 
              src={require("../images/Male-security.jpg")} 
              alt='slide3'
              style={{width: '100%', height: '300px'}}
              />
            </Carousel.Item>
          </Carousel>
      </div>

      <motion.div className='services-description' initial={{ opacity: 0 }} animate={{ opacity: 1}} exit={{ opacity: 0}}>
        <div className='services-description-title'>
                  <h1>Looking for a Professional Security Solution for your Business?</h1>
        </div>
        <div className='services-description-caption'>
          
              
            <p> Founded in 1993, we Support Services provides professional security solutions across the UK. We work closely with the public and private sectors, and are expert suppliers to a wide range of industries.

                We'll work directly with you to create a bespoke security package that ticks all the boxes, ensuring we always address your security concerns. Our mission is to provide first-class security solutions, at a reasonable price, that always ensure your business, assets and people are properly protected.

                If you're looking for a motivated, reliable and customer-oriented security company in the UK, choose Churchill Support Services today.
            </p>

        </div>
      </motion.div>

      <motion.div className='service-card' animate={{scale: [1,2,2,1,1], rotate:[0,0,270,270,0], borderRadius:["20%", "20%", "50%", "50%", "20%"],}}>
        <Row>
          <Col style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <Card style={{ width: '18rem', borderRadius: '10px', borderColor: 'white', borderWidth:'5px'}}>
              <Card.Img variant="top" src={require("../images/card-sec-guard.jpg")} />
              <Card.Body>
                <Card.Title>Security Guards</Card.Title>
                <Card.Text>
                  Our SIA-licensed security guards and officers are trained to the very best standards and offer a comprehensive portfolio of services.
                </Card.Text>
                <Button variant="primary">More</Button>
              </Card.Body>
            </Card>
          </Col>


          <Col style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <Card style={{ width: '18rem', borderRadius: '10px', borderColor: 'white', borderWidth:'5px'}}>
              <Card.Img variant="top" src={require("../images/events-sec.jpg")} />
              <Card.Body>
                <Card.Title>Event Security</Card.Title>
                <Card.Text>
                  We understand that your security needs are as individual as the occasion itself and we pledge to create a bespoke security solution.
                </Card.Text>
                <Button variant="primary">More</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <Card style={{ width: '18rem',height:'27rem', borderRadius: '10px', borderColor: 'white', borderWidth:'5px'}}>
              <Card.Img variant="top" src={require("../images/vaultsec.jpg")} />
              <Card.Body>
                <Card.Title>Lock and Unlock Service</Card.Title>
                <Card.Text>
                  No matter what schedule your business keeps, we can deploy a lock and unlock service that suits your business needs.  
                </Card.Text>
                <Button variant="primary">More</Button>
              </Card.Body>
            </Card>
          </Col>

        </Row>


      </motion.div>
      <motion.div className='service-card-2' animate={{scale: [1,2,2,1,1], rotate:[0,0,270,270,0], borderRadius:["20%", "20%", "50%", "50%", "20%"],}}>
        <Row>
          <Col style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <Card style={{ width: '18rem', borderRadius: '10px', borderColor: 'white', borderWidth:'5px'}}>
                <Card.Img variant="top" src={require("../images/cctvguard.jpg")} />
                <Card.Body>
                  <Card.Title>CCTV Systems</Card.Title>
                  <Card.Text>
                    With our diverse range of CCTV and imaging services, we can equip your business with a full CCTV security solution that will safeguard your site, assets and people against crime.
                  </Card.Text>
                  <Button variant="success">More</Button>
                </Card.Body>
            </Card>
          </Col>


          <Col style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <Card style={{ width: '18rem', borderRadius: '10px', borderColor: 'white', borderWidth:'5px'}}>
                <Card.Img variant="top" src={require("../images/dogsec.jpg")} />
                <Card.Body>
                  <Card.Title>Canine Security</Card.Title>
                  <Card.Text>
                    Our security dogs act as an extra pair of eyes and ears on your site. With a greater sense of smell and hearing than humans.
                  </Card.Text>
                  <Button variant="success">More</Button>
                </Card.Body>
            </Card>
          </Col>


          <Col style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <Card style={{ width: '18rem', borderRadius: '10px', borderColor: 'white', borderWidth:'5px'}}>
                <Card.Img variant="top" src={require("../images/response.jpg")} />
                <Card.Body>
                  <Card.Title>Alarm Response</Card.Title>
                  <Card.Text>
                      provides you with a rapid response and deployment of OM security officers whenever and wherever an alarm activation is indicated day or night whether false or not.
                  </Card.Text>
                  <Button variant="success">More</Button>
                </Card.Body>
            </Card>
          </Col>
        </Row>

        
      </motion.div>

      <div className='security-benefits-container'>
        
        <div className='security-inner-container'>
          <Row>
            <div className='security-inner-title'>Security Business Benefits</div>
            <Col>
              <div className='SBB'>
                <div className='SBB-icon'>
                  <FaMedal />
                </div>
                <h2 style={{fontSize: "20px", fontWeight: "bold", color:"white"}}>Highly Trained Experts</h2>
                <p style={{color:"white"}}>Churchill Support Services deploys only the highest-trained SIA licensed officers. We're in the top 1% of ACS approved contractors and are SafeContractor approved.</p>
              </div>
            </Col>

            <Col>
              <div className='SBB'>
                <div className='SBB-icon'>
                  <GoChecklist />
                </div>
                <h2 style={{fontSize: "20px", fontWeight: "bold", color:"white"}}>Huge Skill Set on Offer</h2>
                <p style={{color:"white"}}>Whether it is patrolling, customer service or surveillance you require, Churchill Support Services has got you covered with a wide range of skills to offer.</p>
              </div>
            </Col>

            <Col>
              <div className='SBB'>
                <div className='SBB-icon'>
                  <TbCertificate />
                </div>
                <h2 style={{fontSize: "20px", fontWeight: "bold", color:"white"}}>Tailored to Your Needs</h2>
                <p style={{color:"white"}}>Relax in the knowledge that your solution will be tailored to your specific security requirements, guaranteeing you a personalised, first-class service.</p>
              </div>
            </Col>
          </Row> 

          <Row>
            <Col>
              <div className='SBB'>
                <div className='SBB-icon'>
                  <GiPoliceOfficerHead />
                </div>
                <h2 style={{fontSize: "20px", fontWeight: "bold", color:"white"}}>Deter Criminals</h2>
                <p style={{color:"white"}}>An important visual deterrent, the presence of security guards will significantly minimise the chance of vandalism, trespassing theft and other crime.</p>
              </div>
            </Col>

            <Col>
              <div className='SBB'>
                <div className='SBB-icon'>
                  <TfiTimer/>
                </div>
                <h2 style={{fontSize: "20px", fontWeight: "bold", color:"white"}}>Rapid Response Solution</h2>
                <p style={{color:"white"}}>As well as an effective visual deterrent, security guards can also act as a rapid response solution to any potential or genuine threats.</p>
              </div>
            </Col>

            <Col>
              <div className='SBB'>
                <div className='SBB-icon'>
                  <BsGraphDown />
                </div>
                <h2 style={{fontSize: "20px", fontWeight: "bold", color:"white"}}>Keep Costs Down</h2>
                <p style={{color:"white"}}>Our security guards multi-role capabilities such as concierge duties and risk assessment mean you can keep costs down without compromising on vital services.</p>
              </div>
            </Col>
          </Row>

        </div>

      </div>
      <Particles />
      <Footer2 />


    
    </motion.div>
  )
}
