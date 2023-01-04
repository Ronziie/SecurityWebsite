import React, { useEffect } from 'react'
import { useState } from 'react'
import '../Main.css'
import { Sidebar, Menu, MenuItem, useProSidebar} from 'react-pro-sidebar';
import { ImExit } from 'react-icons/im'
import { TbDeviceAnalytics } from 'react-icons/tb'
import { BiSupport } from 'react-icons/bi'
import { MdNotificationsActive } from 'react-icons/md'
import { SiGooglemaps } from 'react-icons/si'
import { CgProfile } from 'react-icons/cg'
import { RiDashboardFill } from 'react-icons/ri'
import { GiHamburgerMenu } from 'react-icons/gi'
import image from '../images/sidebar-4.jpg'
import { useNavigate } from 'react-router-dom';


export default function SidebarMenu() {

    const [isMobile, setIsMobile] = useState(false)

    const { collapseSidebar } = useProSidebar();
    let navigate = useNavigate();

    const returnHome = () => {
      return navigate("/")
    }

    //function collapseSidebar if 

    useEffect(() => {
      window.addEventListener('resize', handleResize);
    })


    const handleResize = () => {
      if (window.innerWidth > 450) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }

  return (
    <div  className='sidebarmenu' style={{ display: 'flex', height: '100vh', overflowY: 'scroll inital' }}>
      {
      
      isMobile ? 
      <div className='true' style={{height: '100%', display: 'flex', overflowY:'scroll inital', position:"fixed" }}>
              <Sidebar image={image}>
                    <Menu>
                      <MenuItem style={{ marginBottom:"50px"}}> 
                      <RiDashboardFill />  Dashboard
                      </MenuItem>

                      <MenuItem style={{marginTop:"50px", marginBottom:"50px"}}> 
                        <CgProfile /> User Profile
                      </MenuItem>

                      <MenuItem style={{marginTop:"50px", marginBottom:"50px"}}> 
                          <SiGooglemaps /> Maps
                      </MenuItem>

                      <MenuItem style={{marginTop:"50px", marginBottom:"50px"}}> 
                          <MdNotificationsActive /> Notifications
                      </MenuItem>

                      <MenuItem style={{marginTop:"50px", marginBottom:"50px"}}> 
                        <BiSupport/> R-Support
                      </MenuItem>

                      <MenuItem style={{marginTop:"50px", marginBottom:"50px"}}>
                      <TbDeviceAnalytics  />  Analytics
                      </MenuItem>
                      
                      <MenuItem style={{marginTop:"250px", marginBottom:"50px", bottom: "0"}} onClick={returnHome}> 
                      <ImExit />  Sign Out
                      </MenuItem>
                    </Menu>               
            </Sidebar>
            <div style={{fontSize:"30px", color:"white"}}>
              <GiHamburgerMenu onClick={() => {collapseSidebar()}}/>
            </div>
     </div> :
      
      
      <div className='false' style={{height: '100%', display: 'flex', overflowY:'scroll inital', position: "fixed"}}>
            <Sidebar defaultCollapsed={true} collapsedWidth="60px" image={image}>
                <Menu>
                  <MenuItem style={{marginTop:"50px", marginBottom:"50px"}}> 
                    <RiDashboardFill />  Dashboard
                  </MenuItem>

                  <MenuItem style={{marginTop:"50px", marginBottom:"50px"}}> 
                    <CgProfile /> User Profile
                  </MenuItem>

                  <MenuItem style={{marginTop:"50px", marginBottom:"50px"}}> 
                      <SiGooglemaps /> Maps
                  </MenuItem>

                  <MenuItem style={{marginTop:"50px", marginBottom:"50px"}}> 
                      <MdNotificationsActive /> Notifications
                  </MenuItem>

                  <MenuItem style={{marginTop:"50px", marginBottom:"50px"}}> 
                    <BiSupport/> R-Support
                  </MenuItem>

                  <MenuItem style={{marginTop:"50px", marginBottom:"50px"}}>
                    <TbDeviceAnalytics  />  Analytics
                  </MenuItem>
                  
                  <MenuItem style={{marginTop:"250px", marginBottom:"50px"}} onClick={returnHome}> 
                    <ImExit  />  Sign Out
                  </MenuItem>
                </Menu>             
            </Sidebar>
      </div>
      
      }
    </div>

    
  
  )
}
