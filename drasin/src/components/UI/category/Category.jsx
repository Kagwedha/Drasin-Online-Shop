import React from 'react';

import { Container, Row, Col } from 'reactstrap';

import category1 from "../../../assets/images/caccessories.png";
import category2 from "../../../assets/images/cautoparts.png";
import category3 from "../../../assets/images/cclothes.png";
import category4 from "../../../assets/images/ccomputer.gif";
import category5 from "../../../assets/images/celectrical.gif";
import category6 from "../../../assets/images/celectronics.gif";
import category7 from "../../../assets/images/chomeappliances.gif";
import category8 from "../../../assets/images/cphones.gif";
import category9 from "../../../assets/images/cwearables.png";

import '../../../styles/category.css';

const categoryData = [
    {
        display: 'ACCESSORIES',
        imgUrl: category1
    },
    {
        display: 'AUTOPARTS',
        imgUrl: category2
    },
    {
        display: 'CLOTHES',
        imgUrl: category3
    },
    {
        display: 'COMPUTERS',
        imgUrl: category4
    },
    {
        display: 'ELECTRICALS',
        imgUrl: category5
    },
    {
        display: 'ELECTRONICS',
        imgUrl: category6
    },
    {
        display: 'HOME-APPLIANCES',
        imgUrl: category7
    },
    {
        display: 'PHONES',
        imgUrl: category8
    },
    {
        display: 'WEARABLES',
        imgUrl: category9
    },
]

const Category = () => {
    return(
        <Container>
            <Row>
                {categoryData.map((item, index) => (
                    <Col lg='3' md='4' sm='6' xs='6' className='mb-4'>
                        <div className='category_item d-flex align-items-center gap-3 mt-4'>
                            <div className='category_img'>
                                <img src={item.imgUrl} alt="category_item" />
                            </div>
                            <h6>{item.display}</h6>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Category