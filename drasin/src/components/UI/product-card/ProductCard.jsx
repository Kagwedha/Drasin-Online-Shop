import React from 'react';

import "../../../styles/product-card.css";

import { Link } from 'react-router-dom';

const ProductCard = (props) => {

    const {id, title, image01, price} = props.item
  return (
    <div className='product_item'>
        <div className='product_img'>
            <img src={image01} alt="product-img" className='w-50' />
        </div>

        <div className='product_content'>
            <h5>
                <Link to={`/products/${id}`} >{title}</Link>
            </h5>
            <div className='d-flex align-items-center justify-content-between'>
                <span className='product_price'>N${price}</span>
                <button className='addToCart_btn'>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard