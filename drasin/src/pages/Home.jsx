import React, {useState, useEffect} from 'react';

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem} from "reactstrap";

import trolleyImg from "../assets/images/trolley4.jpg";
import "../styles/trolley-section.css";

import { Link } from "react-router-dom";

import Category from '../components/UI/category/Category.jsx';
import "../styles/home.css";

import featureImg01 from "../assets/images/service1.gif";
import featureImg02 from "../assets/images/service2.gif";
import featureImg03 from "../assets/images/service3.gif";

import products from "../assets/fake-data/products.js";

import productCategory1 from "../assets/images/caccessories.png";
import productCategory2 from "../assets/images/cautoparts.png";
import productCategory3 from "../assets/images/cclothes.png";

import ProductCard from '../components/UI/product-card/ProductCard.jsx';

import whyImg from "../assets/images/location.png";

import networkImg from "../assets/images/network.png";

import TestimonialSlider from '../components/UI/slider/TestimonialSlider.jsx';


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

  const [category, setCategory] = useState('All');
  const [allProducts, setAllProducts] = useState(products);

  const [winterClothes, setWinterClothes] = useState([])

  useEffect(()=>{
    const filteredClothes = products.filter(item=> item.category === 'Clothes')
    const sliceClothes = filteredClothes.slice(0,4)
    setWinterClothes(sliceClothes)
  }, [])

  useEffect(() => {

    if(category === 'All'){
      setAllProducts(products)
    }

    if(category === 'ACCESSORIES'){
      const filteredProducts = products.filter(item => item.category === 'Accessories')

      setAllProducts(filteredProducts)
    }
    if(category === 'AUTOPARTS'){
      const filteredProducts = products.filter(item => item.category === 'Autoparts')

      setAllProducts(filteredProducts)
    }
    if(category === 'CLOTHES'){
      const filteredProducts = products.filter(item => item.category === 'Clothes')

      setAllProducts(filteredProducts)
    }
  }, [category])


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
            <Col lg='4' md='4' key={index} className='mt-5'>
              <div className='feature_item text-center px-5 py-3'>
                <img src={item.imgUrl} alt="feature-img" className='w-25 mb-3'/>
                <h5 className='fw-bold mb-3'>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
         
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2>Popular Products</h2>
          </Col>

          <Col lg='12'>
            <div className='product_category d-flex align-items-center justify-content-center gap-3'>
              <button className= {`all_btn ${category === 'ALL' ? 
              'productBtnActive' : '' } `} 
              onClick={()=>setCategory('ALL')}>All</button>
              <button className={`d-flex align-items-center gap-2 ${category
              === 'ACCESSORIES' ? 'productBtnActive' : '' } `}
              onClick={()=>setCategory('ACCESSORIES')}>
              <img src={productCategory1} alt="" />Accessories</button>

              <button className={`d-flex align-items-center gap-2 ${category
              === 'AUTOPARTS' ? 'productBtnActive' : '' } `}
              onClick={()=>setCategory('AUTOPARTS')}>
              <img src={productCategory2} alt="" />Autoparts</button>

              <button className={`d-flex align-items-center gap-2 ${category
              === 'CLOTHES' ? 'productBtnActive' : '' } `}
              onClick={()=>setCategory('CLOTHES')}>
              <img src={productCategory3} alt="" />Clothes</button>

            </div>
          </Col>

          {allProducts.map((item)=>(
            <Col lg="3" md="4" key={item.id} className="mt-5">
              <ProductCard item={item}/>
            </Col>
          ))}
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <img src={whyImg} alt="why-drasin" className='w-50'/>
          </Col>

          <Col lg="6" md="6">
            <div className='why_drasin'>
              <h2 className='drasin-title mb-4'>
              Why <span>Drasin?</span></h2>
              <p className='drasin-desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, hic explicabo adipisci ut numquam nostrum tempora eum totam blanditiis! Iusto, id. Voluptas 
              itaque culpa omnis reiciendis eum esse neque obcaecati.</p>

              <ListGroup className='mt-5'>
                <ListGroupItem className='border-0 ps-0'>
                  <p className=' choose_us-title d-flex align-items-center gap-2'>
                  <i className='ri-checkbox-circle-line'></i> Good 
                  quality only</p>
                  <p className='choose_us-desc'>Lorem ipsum dolor sit amet 
                  consectetur adipisicing elit. Facere, ratione.</p>
                </ListGroupItem>

                <ListGroupItem className='border-0 ps-0'>
                <p className=' choose_us-title d-flex align-items-center gap-2'>
                <i className='ri-checkbox-circle-line'></i>Quality support</p>
                  <p className='choose_us-desc'>Lorem ipsum dolor sit amet 
                  consectetur adipisicing elit. Facere, ratione.</p>
                </ListGroupItem>

                <ListGroupItem className='border-0 ps-0'>
                <p className=' choose_us-title d-flex align-items-center gap-2'>
                <i className='ri-checkbox-circle-line'></i>Shop from any location{" "}</p>
                  <p className='choose_us-desc'>Lorem ipsum dolor sit amet 
                  consectetur adipisicing elit. Facere, ratione.</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section className='pt-0'>
      <Container>
        <Row>
          <Col lg="12" className='text-center mb-5'>
            <h2>Winter Clothes</h2>
          </Col>

          {
            winterClothes.map(item =>(
              <Col lg="3" md="4" key={item.id}>
                <ProductCard item={item}/>
              </Col>
            ))
          }
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className='testimonial'>
            <h5 className='testimonial_subtitle mb-4'>Testimonial</h5>
            <h2 className='testimonial_title mb-4'>
              What our <span>customers</span> are saying
            </h2>
            <p className='testimonial_desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, quas reiciendis odit molestias quisquam quis alias laudantium iure debitis perferendis numquam, possimus qui dolor 
            distinctio eum quibusdam harum? Aliquid, veritatis?</p>

            <TestimonialSlider/>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={networkImg} alt="testimonial-img"
            className='w-50' />
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
};

export default Home;
