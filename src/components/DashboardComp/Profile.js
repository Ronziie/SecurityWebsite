import React from 'react'
import '../../css/dashboard.css';
import SidebarMenu from '../SidebarMenu';
import { RxAvatar } from 'react-icons/rx'
import { Row, Col} from 'react-bootstrap';

export default function Profile() {
  return (
    <div className='full-admin-container'>
      <Row>
        <Col xs={1} sm={1} md={2} lg={2}><SidebarMenu /></Col>
{/*===============breakpoint=================== */}
        <Col xs={11} sm={11} md={10} lg={10}>
            <div className='admin-profile'>
              <div className='avatar-icon'>
                <RxAvatar />
              </div>
              <div className='User'> Users Name</div>
            </div>
            <div className='User-Options-1'>Change </div>
            <div className='User-Options-2'></div>
            <div className='User-Options-3'></div>
            <div className='User-Options-4'></div>
            
        </Col>
      </Row>

      


    
    </div>
  )
}
