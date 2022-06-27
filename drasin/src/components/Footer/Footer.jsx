import React from 'react';

import { Container, Row, Col, ListGroup, ListGroupItem} from "reactstrap";
import logo from "../../assets/images/logo3.jpg";

import "../../styles/footer.css";

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className='footer_logo text-start'>
              <img src={logo} alt="logo" />
              <h5>Drasin Buy</h5>
              <p>Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Eos, quia ab. Excepturi amet, deserunt
              distinctio ducimus ipsum.</p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className='footer_title'>Delivery Time</h5>
            <ListGroup className='deliver_time-list'>
              <ListGroupItem className='delivery_time-item border-0 ps-0'>
                <span>Sunday - Thursday</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>
            </ListGroup>

            <ListGroup>
              <ListGroupItem className='delivery_time-item border-0 ps-0'>
                <span>Friday - Saturday</span>
                <p>Off days</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
          <h5 className='footer_title'>Contact</h5>
            <ListGroup className='deliver_time-list'>
              <ListGroupItem className='delivery_time-item border-0 ps-0'>
                <p>Location: 1617 Willan Street, Windhoek West, Windhoek, Namibia</p>
              </ListGroupItem>
              <ListGroupItem className='delivery_time-item border-0 ps-0'>
                <span>Phone: +264814624991</span>
              </ListGroupItem>
            </ListGroup>

            <ListGroup>
              <ListGroupItem className='delivery_time-item border-0 ps-0'>
                <span>Email: drasin@gmail.com</span>
                
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className='footer_title'>Newsletter</h5>
            <p>Subscribe to our newsletter</p>
            <div className='newsletter'>
              <input type="email" placeholder='Enter your email' />
              <span>
                <i className='ri-send-plane-line'></i>
              </span>
            </div>
          </Col>
        </Row>

        <Row className='mt-5'>
          <Col lg='6' md='6'>
            <p className='copyright_text'>Copyright - 2022, website made by Helena Shikongo. All
            Rights Reserved.</p>
          </Col>
          <Col lg='6' md='6'>
            <div className='social_links d-flex align-items-center gap-4 justify-content-end'>
              <p className='m-0'>Follow: </p>
              <span><Link to=''><i 
              className='ri-facebook-line'></i></Link></span>

              <span><Link to=''><i
              className='ri-twitter-line'></i></Link></span>

              <span><Link to=''><i
              className='ri-instagram-line'></i></Link></span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer