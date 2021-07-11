import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

function Product() {
  return (
    <>
      <div className="product-carousel container-fluid ">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="product-carousel-img d-block w-100"
              src="/img/Product/pd-hero03.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>輕盈有機棉 舒服好自在</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="product-carousel-img d-block w-100"
              src="/img/Product/pd-hero02.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>盈月杯新登場</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="product-carousel-img d-block w-100"
              src="/img/Product/pd-hero03.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>布衛生棉1+1組合 優惠中</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  )
}

export default Product
