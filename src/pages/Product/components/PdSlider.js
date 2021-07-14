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
              src="/img/Product/pd-hero02.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>盈月杯新登場</h3>
              <p>專為亞洲女性設計尺寸，安心不易漏</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="product-carousel-img d-block w-100"
              src="/img/Product/pd-hero03.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>布衛生棉1+1組合 優惠中</h3>
              <p>限時組合包，入手好時機</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="product-carousel-img d-block w-100"
              src="/img/Product/pd-hero01.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>可重複利用的生理用品</h3>
              <p>拋開濕悶，體會月亮褲的乾爽迷人</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  )
}

export default Product
