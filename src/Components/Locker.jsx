import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import foot from '../assets/foot.png'
import foot_1 from '../assets/foot_1.png'
import Slider from "react-slick";
const Locker = () => {
     var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1, responsive: [{
 
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        infinite: true
      }
 
    }, {
 
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        dots: true
      }
 
    }, {
 
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        dots: true
      }
 
    }]
  };
    return (
        <section className='py-5'>
            <Container>
                <div className='text-center text-lg-start'>
                    <p className='fw_500 fs_25 ff_Poppins clr_black'>You can buy the Nike Air Max 97 Men's Shoe - White here:</p>
                </div>
                <Slider {...settings}>
                    {/* 1 */}
                    <div className='p-2'>
                          <div className='foot_box'data-aos="flip-left" data-aos-duration="3000">
                            <span className=''>
                                <img className=' w-100 border_1 p-4' src={foot} alt="" />
                            </span>
                            <div className=' p-3'>
                                <div className=' d-flex justify-content-between align-items-center mt-3'>
                                    <p className=' fw_400 fs_16 ff_Poppins clr_light_grey'>Price: <span className='fw_600 fs_20 ff_Poppins clr_black ms-3'>€179,99</span></p>
                                    <p className='fw_400 fs_10 bg_green ff_Poppins clr_white Best'>Best Price</p>
                                </div>
                                <p className='fw_400 fs_16 clr_light_grey ff_Poppins'>Size:</p>
                                 <div className=' d-flex justify-content-between gap-3'>
                                    <button className='w-100 fw_500 fs_16 clr_black ff_Poppins box_41 effect' href="#">41</button>
                                    <button className=' w-100 fw_500 fs_16 clr_black ff_Poppins box_41 effect' href="#">42</button>
                                    <button className=' w-100 fw_500 fs_16 clr_black ff_Poppins box_41 effect' href="#">43</button>
                                </div>
                                <div className=' d-flex justify-content-between gap-3 mt-3'>
                                    <button className=' w-100 fw_500 fs_16 clr_black ff_Poppins box_41 effect' href="#">44</button>
                                    <button className=' w-100 fw_500 fs_16 clr_black ff_Poppins box_41 effect' href="#">45</button>
                                    <button className=' w-100 fw_500 fs_16 clr_black ff_Poppins box_41 effect' href="#">46</button>
                                </div>
                                <p className='fw_400 fs_16 clr_light_grey ff_Poppins mt-4 mb-2'>View this product as:</p>
                                <a className='fw_600 fs_16 clr_light_blue ff_Poppins' href="#">Foot Locker NL</a>
                            </div>
                        </div></div>
                        {/* 2 */}
                        <div className='p-2'>
                         <div className='foot_box'data-aos="flip-left" data-aos-duration="3000">
                            <span className=''>
                                <img className=' w-100 border_1 p-4' src={foot_1} alt="" />
                            </span>
                            <div className='p-3'>
                                <div className=' d-flex justify-content-between align-items-center mt-3'>
                                    <p className=' fw_400 fs_16 ff_Poppins clr_light_grey'>Price: <span className='fw_600 fs_20 ff_Poppins clr_black ms-3'>€179,99</span></p>
                                    <p className='fw_400 fs_10 bg_green ff_Poppins clr_white Best'>Best Price</p>
                                </div>
                                <p className='fw_400 fs_16 clr_light_grey ff_Poppins'>Size:</p>
                                <div className=' d-flex justify-content-between gap-3'>
                                    <button className=' w-100 fw_500 fs_16 clr_black ff_Poppins box_41 effect' href="#">41</button>
                                    <button className=' w-100 fw_500 fs_16 clr_black ff_Poppins box_41 effect' href="#">42</button>
                                    <button className=' w-100 fw_500 fs_16 clr_black ff_Poppins box_41 effect' href="#">43</button>
                                </div>
                                <div className=' d-flex justify-content-between mt-3 gap-3'>
                                    <button className=' w-100 fw_500 fs_16 clr_black ff_Poppins box_41 effect' href="#">44</button>
                                    <button className=' w-100 fw_500 fs_16 clr_black ff_Poppins box_41 effect' href="#">45</button>
                                    <button className=' w-100 fw_500 fs_16 clr_black ff_Poppins box_41 effect' href="#">46</button>
                                </div>
                                <p className='fw_400 fs_16 clr_light_grey ff_Poppins mt-4 mb-2'>View this product as:</p>
                                <a className='fw_600 fs_16 clr_light_blue ff_Poppins' href="#">Foot Locker NL</a>
                            </div>
                        </div>
                        </div>
                        {/* 3 */}
                         <div className='p-2'>
                     <div className='foot_box'data-aos="flip-left" data-aos-duration="3000">
                            <span className=''>
                                <img className=' w-100 border_1 p-4' src={foot} alt="" />
                            </span>
                            <div className=' p-3'>
                                <div className=' d-flex justify-content-between align-items-center mt-3'>
                                    <p className=' fw_400 fs_16 ff_Poppins clr_light_grey'>Price: <span className='fw_600 fs_20 ff_Poppins clr_black ms-3'>€179,99</span></p>
                                    <p className='fw_400 fs_10 bg_green ff_Poppins clr_white Best'>Best Price</p>
                                </div>
                                <p className='fw_400 fs_16 clr_light_grey ff_Poppins'>Size:</p>
                                 <div className=' d-flex justify-content-between gap-3'>
                                    <button className=' w-100 fw_500 fs_16 clr_black ff_Poppins box_41 effect' href="#">41</button>
                                    <button className=' w-100 fw_500 fs_16 clr_black ff_Poppins box_41 effect' href="#">42</button>
                                    <button className=' w-100 fw_500 fs_16 clr_black ff_Poppins box_41 effect' href="#">43</button>
                                </div>
                                <div className=' d-flex justify-content-between mt-3 gap-3'>
                                    <button className=' w-100 fw_500 fs_16 clr_black ff_Poppins box_41 effect' href="#">44</button>
                                    <button className=' w-100 fw_500 fs_16 clr_black ff_Poppins box_41 effect' href="#">45</button>
                                    <button className=' w-100 fw_500 fs_16 clr_black ff_Poppins box_41 effect' href="#">46</button>
                                </div>
                                <p className='fw_400 fs_16 clr_light_grey ff_Poppins mt-4 mb-2'>View this product as:</p>
                                <a className='fw_600 fs_16 clr_light_blue ff_Poppins' href="#">Foot Locker NL</a>
                            </div>
                        </div>   </div>
                        {/* 4 */}
                         <div className='p-2'>
                         <div className='foot_box'data-aos="flip-left" data-aos-duration="3000">
                            <span className=''>
                                <img className=' w-100 border_1 p-4' src={foot_1} alt="" />
                            </span>
                            <div className=' p-3'>
                                <div className=' d-flex justify-content-between align-items-center mt-3'>
                                    <p className=' fw_400 fs_16 ff_Poppins clr_light_grey'>Price: <span className='fw_600 fs_20 ff_Poppins clr_black ms-3'>€179,99</span></p>
                                    <p className='fw_400 fs_10 bg_green ff_Poppins clr_white Best'>Best Price</p>
                                </div>
                                <p className='fw_400 fs_16 clr_light_grey ff_Poppins'>Size:</p>
                                <div className=' d-flex justify-content-between gap-3'>
                                    <button className=' w-100 fw_500 fs_16 clr_black ff_Poppins box_41 effect' href="#">41</button>
                                    <button className=' w-100 fw_500 fs_16 clr_black ff_Poppins box_41 effect' href="#">42</button>
                                    <button className=' w-100 fw_500 fs_16 clr_black ff_Poppins box_41 effect' href="#">43</button>
                                </div>
                                <div className=' d-flex justify-content-between mt-3 gap-3'>
                                    <button className=' w-100 fw_500 fs_16 clr_black ff_Poppins box_41 effect' href="#">44</button>
                                    <button className=' w-100 fw_500 fs_16 clr_black ff_Poppins box_41 effect' href="#">45</button>
                                    <button className=' w-100 fw_500 fs_16 clr_black ff_Poppins box_41 effect' href="#">46</button>
                                </div>
                                <p className='fw_400 fs_16 clr_light_grey ff_Poppins mt-4 mb-2'>View this product as:</p>
                                <a className='fw_600 fs_16 clr_light_blue ff_Poppins' href="#">Foot Locker NL</a>
                            </div>
                        </div></div>
                </Slider>   
            </Container>
        </section >
    )
}

export default Locker