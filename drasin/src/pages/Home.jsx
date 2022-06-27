import React from 'react';

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col} from "reactstrap";

import trolleyImg from "../assets/images/trolley4.jpg";
import "../styles/trolley-section.css";

import { Link } from "react-router-dom";

import Category from '../components/UI/category/Category.jsx';
import "../styles/home.css";

import featureImg01 from "../assets/images/service1.gif";
import featureImg02 from "../assets/images/service2.gif";
import featureImg03 from "../assets/images/service3.gif";

const featureData = [
  {
    title: 'Quick Delivery',
    imgUrl: featureImg02,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, doloribus."
  },
  {
    title: 'Easy Shopping',
    imgUrl: featureImg03,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, doloribus."
  },
  {
    title: 'Easy Pick Up',
    imgUrl: featureImg01,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, doloribus."
  },
]

const Home = () => {
  return <Helmet title="Home">
    <section>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className='trolley_content'>
              <h5 className='mb-3'>Easy way to make an order</h5>
              <h1 className='mb-4 trolley_title'><span>CAN'T PICKUP YOUR GOODS?</span> Just wait at <br /> your <span>
              door-step</span></h1>

              <p>Lorem, ipsum dolor sit amet consectetur 
              adipisicing elit. Et omnis unde, consectetur!
              </p>

              <div className='trolley_btns d-flex align-items-center 
              gap-5 mt-4'>
                <button className='order_btn d-flex align-items-center 
                justify-content-between'>Buy Now <i
                className='ri-arrow-right-s-line'></i></button>

                <button className='all_products-btn'>
                <Link to="/products">See all products</Link>
                </button>
              </div>

              <div className=' trolley_service d-flex align-items-center gap-5 mt-5'>
                <p className='d-flex align-items-center gap-2'>
                <span className='shipping_icon'><i
                className='ri-car-line'></i></span>No shipping charges</p>

                <p className='d-flex align-items-center gap-2'>
                <span className='shipping_icon'>
                <i className='ri-shield-check-line'></i>
                </span>{" "}
                100% secure checkout</p>
              </div>
            </div>
          </Col>

          <Col lg='6' md='6'>
            <div className='trolley_img'>
              <img src={trolleyImg} alt="trolley-img" className='w-100' />
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section className='pt-0'>
      <Category/>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h5 className='feature_subtitle mb-4'>What we serve</h5>
            <h2 className='feature_title'>Just sit back at home</h2>
            <h2 className='feature_title'>
              we will <span>take care</span>
            </h2>
            <p className='mb-1 mt-4 feature_text'>Lorem ipsum dolor sit 
            amet consectetur adipisicing elit. Perferendis, beatae?</p>
            <p className='feature_text'>Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Fugiat, possimus.{" "}
            </p>
          </Col>

          {featureData.map((item, index) => (
            <Col lg='4' md='4' key={index}>
              <div className='feature_item'>
                <img src={item.imgUrl} alt="feature-img" />
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
         
        </Row>
      </Container>
    </section>
  </Helmet>
};

export default Home;
