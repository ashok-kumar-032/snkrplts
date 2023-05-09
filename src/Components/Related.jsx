import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import rela_1 from "../assets/rela_1.png";
import black_start from "../assets/black_start.png";
import re from "../assets/re..png";
import off from "../assets/off.png";
import new_1 from "../assets/new_1.png";

const Related = () => {
  return (
    <section className='pb-5 pt-2 mb-5'>
        <Container>
        <p className='fw_600 fs_30 ff_Poppins clr_black'>RELATED PRODUCT</p>

            <Row className='mt-4'>
                <Col xl={3} lg={4} md={6} xs={12}>
                    <div className='related_box position-relative'data-aos="flip-left" data-aos-duration="3000">
                            <span className=''>
                                <img className=' w-100' src={rela_1} alt="" />
                                <img className=' position-absolute off' src={off} alt="" />
                                <p className='clr_white fs_14 fw_400 ff_Poppins bg_grey_1 position-absolute new d-flex align-items-center justify-content-center'>NEW</p>
                            </span>
                            <div className=' d-flex justify-content-between px-3 py-4'>
                                <div>
                                    <p className='fw_500 fs_18 ff_Poppins clr_grey_1 mt-2'>Quickiins Mens Shoes</p>
                                    <p className='fw_500 fs_18 ff_Poppins clr_light_grey_1 mt-2'>$90.00 <span className='fw_500 fs_18 ff_Poppins clr_red'>$70.00</span></p>
                                    <img src={black_start} alt="" />
                                </div>
                                <div className='mt-3'>
                                    <button className=' border-0 bg-white'><svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_776_387)">
<path d="M24.5 0.386963C11.2452 0.386963 0.5 11.1321 0.5 24.387C0.5 37.6418 11.2452 48.387 24.5 48.387C37.7548 48.387 48.5 37.6418 48.5 24.387C48.5 11.1321 37.7548 0.386963 24.5 0.386963ZM12.4033 10.5266L16.6748 11.8684C17.2403 12.0541 17.6169 12.5792 17.6826 13.1164L17.9228 15.4689L37.2646 17.6281C38.0952 17.789 38.6788 18.5388 38.5625 19.3097L37.3613 26.0772C37.2084 26.7851 36.6222 27.2704 35.9697 27.2784H18.7871L18.4502 29.1974H34.7686C35.6218 29.2274 36.2468 29.8772 36.2568 30.6358C36.2214 31.5014 35.5238 32.0679 34.7686 32.0772H16.7217C15.8114 32.002 15.1432 31.2806 15.2832 30.3985L16.0508 26.1739L14.8496 14.3645L11.539 13.3098C11.155 13.1818 10.8668 12.9411 10.6748 12.5891C10.3115 11.8278 10.6508 10.9849 11.2988 10.6203C11.6687 10.4281 12.0299 10.4041 12.4033 10.5266ZM18.9072 32.9065C20.1499 32.9065 21.1572 33.9138 21.1572 35.1565C21.1572 36.3991 20.1499 37.4065 18.9072 37.4065C17.6647 37.4065 16.6572 36.3991 16.6572 35.1565C16.6572 33.9138 17.6646 32.9065 18.9072 32.9065ZM32.1142 32.9065C33.3568 32.9065 34.3642 33.9138 34.3642 35.1565C34.3642 36.3991 33.3568 37.4065 32.1142 37.4065C30.8716 37.4065 29.8642 36.3991 29.8642 35.1565C29.8642 33.9138 30.8716 32.9065 32.1142 32.9065Z" fill="#28A745"/>
</g>
<defs><clipPath id="clip0_776_387">
<rect width="48" height="48" fill="white" transform="translate(0.5 0.386963)"/>
</clipPath>
</defs>
</svg></button>
 </div>
                            </div>
                        </div>
                </Col>
                <Col xl={3} lg={4} md={6} xs={12} className='mt-4 mt-md-0'>
                    <div className='related_box position-relative'data-aos="flip-left" data-aos-duration="3000">
                            <span className=''>
                                <img className=' w-100' src={re} alt="re" />
                                  <img className=' position-absolute off' src={off} alt="" />
                                
                                    <p className='clr_white fs_14 fw_400 ff_Poppins bg_grey_1 position-absolute new d-flex align-items-center justify-content-center'>NEW</p>
                               
                            </span>
                            <div className=' d-flex justify-content-between px-3 py-4'>
                                <div>
                                    <p className='fw_500 fs_18 ff_Poppins clr_grey_1 mt-2'>Quickiins Mens Shoes</p>
                                    <p className='fw_500 fs_18 ff_Poppins clr_light_grey_1 mt-2'>$90.00 <span className='fw_500 fs_18 ff_Poppins clr_red'>$70.00</span></p>
                                    <img src={black_start} alt="" />
                                </div>
                                <div className='mt-3'>
                                    <button className=' border-0 bg-white'><svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_776_387)">
<path d="M24.5 0.386963C11.2452 0.386963 0.5 11.1321 0.5 24.387C0.5 37.6418 11.2452 48.387 24.5 48.387C37.7548 48.387 48.5 37.6418 48.5 24.387C48.5 11.1321 37.7548 0.386963 24.5 0.386963ZM12.4033 10.5266L16.6748 11.8684C17.2403 12.0541 17.6169 12.5792 17.6826 13.1164L17.9228 15.4689L37.2646 17.6281C38.0952 17.789 38.6788 18.5388 38.5625 19.3097L37.3613 26.0772C37.2084 26.7851 36.6222 27.2704 35.9697 27.2784H18.7871L18.4502 29.1974H34.7686C35.6218 29.2274 36.2468 29.8772 36.2568 30.6358C36.2214 31.5014 35.5238 32.0679 34.7686 32.0772H16.7217C15.8114 32.002 15.1432 31.2806 15.2832 30.3985L16.0508 26.1739L14.8496 14.3645L11.539 13.3098C11.155 13.1818 10.8668 12.9411 10.6748 12.5891C10.3115 11.8278 10.6508 10.9849 11.2988 10.6203C11.6687 10.4281 12.0299 10.4041 12.4033 10.5266ZM18.9072 32.9065C20.1499 32.9065 21.1572 33.9138 21.1572 35.1565C21.1572 36.3991 20.1499 37.4065 18.9072 37.4065C17.6647 37.4065 16.6572 36.3991 16.6572 35.1565C16.6572 33.9138 17.6646 32.9065 18.9072 32.9065ZM32.1142 32.9065C33.3568 32.9065 34.3642 33.9138 34.3642 35.1565C34.3642 36.3991 33.3568 37.4065 32.1142 37.4065C30.8716 37.4065 29.8642 36.3991 29.8642 35.1565C29.8642 33.9138 30.8716 32.9065 32.1142 32.9065Z" fill="#28A745"/>
</g>
<defs>
<clipPath id="clip0_776_387">
<rect width="48" height="48" fill="white" transform="translate(0.5 0.386963)"/>
</clipPath>
</defs>
</svg></button>
                                            </div>
                            </div>
                        </div>
                </Col>
                <Col xl={3} lg={4} md={6} xs={12} className=' mt-4 mt-lg-0'>
                    <div className='related_box position-relative'data-aos="flip-left" data-aos-duration="3000">
                            <span className=''>
                                <img className=' w-100' src={rela_1} alt="" />
                                  <img className=' position-absolute off' src={off} alt="" />
                                <p className='clr_white bg_grey_1 position-absolute new d-flex align-items-center justify-content-center'>NEW</p>
                            </span>
                            <div className=' d-flex justify-content-between px-3 py-4'>
                                <div>
                                    <p className='fw_500 fs_18 ff_Poppins clr_grey_1 mt-2'>Quickiins Mens Shoes</p>
                                    <p className='fw_500 fs_18 ff_Poppins clr_light_grey_1 mt-2'>$90.00 <span className='fw_500 fs_18 ff_Poppins clr_red'>$70.00</span></p>
                                    <img src={black_start} alt="" />
                                </div>
                                <div className='mt-3'>
                                    <button className=' border-0 bg-white'><svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_776_387)">
<path d="M24.5 0.386963C11.2452 0.386963 0.5 11.1321 0.5 24.387C0.5 37.6418 11.2452 48.387 24.5 48.387C37.7548 48.387 48.5 37.6418 48.5 24.387C48.5 11.1321 37.7548 0.386963 24.5 0.386963ZM12.4033 10.5266L16.6748 11.8684C17.2403 12.0541 17.6169 12.5792 17.6826 13.1164L17.9228 15.4689L37.2646 17.6281C38.0952 17.789 38.6788 18.5388 38.5625 19.3097L37.3613 26.0772C37.2084 26.7851 36.6222 27.2704 35.9697 27.2784H18.7871L18.4502 29.1974H34.7686C35.6218 29.2274 36.2468 29.8772 36.2568 30.6358C36.2214 31.5014 35.5238 32.0679 34.7686 32.0772H16.7217C15.8114 32.002 15.1432 31.2806 15.2832 30.3985L16.0508 26.1739L14.8496 14.3645L11.539 13.3098C11.155 13.1818 10.8668 12.9411 10.6748 12.5891C10.3115 11.8278 10.6508 10.9849 11.2988 10.6203C11.6687 10.4281 12.0299 10.4041 12.4033 10.5266ZM18.9072 32.9065C20.1499 32.9065 21.1572 33.9138 21.1572 35.1565C21.1572 36.3991 20.1499 37.4065 18.9072 37.4065C17.6647 37.4065 16.6572 36.3991 16.6572 35.1565C16.6572 33.9138 17.6646 32.9065 18.9072 32.9065ZM32.1142 32.9065C33.3568 32.9065 34.3642 33.9138 34.3642 35.1565C34.3642 36.3991 33.3568 37.4065 32.1142 37.4065C30.8716 37.4065 29.8642 36.3991 29.8642 35.1565C29.8642 33.9138 30.8716 32.9065 32.1142 32.9065Z" fill="#28A745"/>
</g>
<defs>
<clipPath id="clip0_776_387">
<rect width="48" height="48" fill="white" transform="translate(0.5 0.386963)"/>
</clipPath>
</defs>
</svg></button>
                                            </div>
                            </div>
                        </div>
                </Col>
                <Col xl={3} lg={4} md={6} xs={12} className='mt-4 mt-xl-0'>
                    <div className='related_box position-relative'data-aos="flip-left" data-aos-duration="3000">
                            <span className=''>
                                <img className=' w-100' src={re} alt="" />
                                  <img className=' position-absolute off' src={off} alt="" />
                                <p className='clr_white fs_14 fw_400 ff_Poppins bg_grey_1 position-absolute new d-flex align-items-center justify-content-center'>NEW</p>
                            </span>
                            <div className=' d-flex justify-content-between px-3 py-4'>
                                <div>
                                    <p className='fw_500 fs_18 ff_Poppins clr_grey_1 mt-2'>Quickiins Mens Shoes</p>
                                    <p className='fw_500 fs_18 ff_Poppins clr_light_grey_1 mt-2'>$90.00 <span className='fw_500 fs_18 ff_Poppins clr_red'>$70.00</span></p>
                                    <img src={black_start} alt="" />
                                </div>
                                <div className='mt-3'>
                                    <button className=' border-0 bg-white'><svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_776_387)">
<path d="M24.5 0.386963C11.2452 0.386963 0.5 11.1321 0.5 24.387C0.5 37.6418 11.2452 48.387 24.5 48.387C37.7548 48.387 48.5 37.6418 48.5 24.387C48.5 11.1321 37.7548 0.386963 24.5 0.386963ZM12.4033 10.5266L16.6748 11.8684C17.2403 12.0541 17.6169 12.5792 17.6826 13.1164L17.9228 15.4689L37.2646 17.6281C38.0952 17.789 38.6788 18.5388 38.5625 19.3097L37.3613 26.0772C37.2084 26.7851 36.6222 27.2704 35.9697 27.2784H18.7871L18.4502 29.1974H34.7686C35.6218 29.2274 36.2468 29.8772 36.2568 30.6358C36.2214 31.5014 35.5238 32.0679 34.7686 32.0772H16.7217C15.8114 32.002 15.1432 31.2806 15.2832 30.3985L16.0508 26.1739L14.8496 14.3645L11.539 13.3098C11.155 13.1818 10.8668 12.9411 10.6748 12.5891C10.3115 11.8278 10.6508 10.9849 11.2988 10.6203C11.6687 10.4281 12.0299 10.4041 12.4033 10.5266ZM18.9072 32.9065C20.1499 32.9065 21.1572 33.9138 21.1572 35.1565C21.1572 36.3991 20.1499 37.4065 18.9072 37.4065C17.6647 37.4065 16.6572 36.3991 16.6572 35.1565C16.6572 33.9138 17.6646 32.9065 18.9072 32.9065ZM32.1142 32.9065C33.3568 32.9065 34.3642 33.9138 34.3642 35.1565C34.3642 36.3991 33.3568 37.4065 32.1142 37.4065C30.8716 37.4065 29.8642 36.3991 29.8642 35.1565C29.8642 33.9138 30.8716 32.9065 32.1142 32.9065Z" fill="#28A745"/>
</g>
<defs>
<clipPath id="clip0_776_387">
<rect width="48" height="48" fill="white" transform="translate(0.5 0.386963)"/>
</clipPath>
</defs>
</svg></button>
                                            </div>
                            </div>
                        </div>
                </Col>
                    
                <Col xl={3} lg={4} md={6} xs={12} className='mt-4'>
                    <div className='related_box position-relative'data-aos="flip-left" data-aos-duration="3000">
                            <span className=''>
                                <img className=' w-100' src={rela_1} alt="" />
                                  <img className=' position-absolute off' src={off} alt="" />
                                <p className='clr_white fs_14 fw_400 ff_Poppins bg_grey_1 position-absolute new d-flex align-items-center justify-content-center'>NEW</p>
                            </span>
                            <div className=' d-flex justify-content-between px-3 py-4'>
                                <div>
                                    <p className='fw_500 fs_18 ff_Poppins clr_grey_1 mt-2'>Quickiins Mens Shoes</p>
                                    <p className='fw_500 fs_18 ff_Poppins clr_light_grey_1 mt-2'>$90.00 <span className='fw_500 fs_18 ff_Poppins clr_red'>$70.00</span></p>
                                    <img src={black_start} alt="" />
                                </div>
                                <div className='mt-3'>
                                    <button className=' border-0 bg-white'><svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_776_387)">
<path d="M24.5 0.386963C11.2452 0.386963 0.5 11.1321 0.5 24.387C0.5 37.6418 11.2452 48.387 24.5 48.387C37.7548 48.387 48.5 37.6418 48.5 24.387C48.5 11.1321 37.7548 0.386963 24.5 0.386963ZM12.4033 10.5266L16.6748 11.8684C17.2403 12.0541 17.6169 12.5792 17.6826 13.1164L17.9228 15.4689L37.2646 17.6281C38.0952 17.789 38.6788 18.5388 38.5625 19.3097L37.3613 26.0772C37.2084 26.7851 36.6222 27.2704 35.9697 27.2784H18.7871L18.4502 29.1974H34.7686C35.6218 29.2274 36.2468 29.8772 36.2568 30.6358C36.2214 31.5014 35.5238 32.0679 34.7686 32.0772H16.7217C15.8114 32.002 15.1432 31.2806 15.2832 30.3985L16.0508 26.1739L14.8496 14.3645L11.539 13.3098C11.155 13.1818 10.8668 12.9411 10.6748 12.5891C10.3115 11.8278 10.6508 10.9849 11.2988 10.6203C11.6687 10.4281 12.0299 10.4041 12.4033 10.5266ZM18.9072 32.9065C20.1499 32.9065 21.1572 33.9138 21.1572 35.1565C21.1572 36.3991 20.1499 37.4065 18.9072 37.4065C17.6647 37.4065 16.6572 36.3991 16.6572 35.1565C16.6572 33.9138 17.6646 32.9065 18.9072 32.9065ZM32.1142 32.9065C33.3568 32.9065 34.3642 33.9138 34.3642 35.1565C34.3642 36.3991 33.3568 37.4065 32.1142 37.4065C30.8716 37.4065 29.8642 36.3991 29.8642 35.1565C29.8642 33.9138 30.8716 32.9065 32.1142 32.9065Z" fill="#28A745"/>
</g>
<defs>
<clipPath id="clip0_776_387">
<rect width="48" height="48" fill="white" transform="translate(0.5 0.386963)"/>
</clipPath>
</defs>
</svg></button>
                                            </div>
                            </div>
                        </div>
                </Col>
                <Col xl={3} lg={4} md={6} xs={12} className='mt-4'>
                    <div className='related_box position-relative'data-aos="flip-left" data-aos-duration="3000">
                            <span className=''>
                                <img className=' w-100' src={re} alt="" />
                                  <img className=' position-absolute off' src={off} alt="" />
                                <p className='clr_white fs_14 fw_400 ff_Poppins bg_grey_1 position-absolute new d-flex align-items-center justify-content-center'>NEW</p>
                            </span>
                            <div className=' d-flex justify-content-between px-3 py-4'>
                                <div>
                                    <p className='fw_500 fs_18 ff_Poppins clr_grey_1 mt-2'>Quickiins Mens Shoes</p>
                                    <p className='fw_500 fs_18 ff_Poppins clr_light_grey_1 mt-2'>$90.00 <span className='fw_500 fs_18 ff_Poppins clr_red'>$70.00</span></p>
                                    <img src={black_start} alt="" />
                                </div>
                                <div className='mt-3'>
                                    <button className=' border-0 bg-white'><svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_776_387)">
<path d="M24.5 0.386963C11.2452 0.386963 0.5 11.1321 0.5 24.387C0.5 37.6418 11.2452 48.387 24.5 48.387C37.7548 48.387 48.5 37.6418 48.5 24.387C48.5 11.1321 37.7548 0.386963 24.5 0.386963ZM12.4033 10.5266L16.6748 11.8684C17.2403 12.0541 17.6169 12.5792 17.6826 13.1164L17.9228 15.4689L37.2646 17.6281C38.0952 17.789 38.6788 18.5388 38.5625 19.3097L37.3613 26.0772C37.2084 26.7851 36.6222 27.2704 35.9697 27.2784H18.7871L18.4502 29.1974H34.7686C35.6218 29.2274 36.2468 29.8772 36.2568 30.6358C36.2214 31.5014 35.5238 32.0679 34.7686 32.0772H16.7217C15.8114 32.002 15.1432 31.2806 15.2832 30.3985L16.0508 26.1739L14.8496 14.3645L11.539 13.3098C11.155 13.1818 10.8668 12.9411 10.6748 12.5891C10.3115 11.8278 10.6508 10.9849 11.2988 10.6203C11.6687 10.4281 12.0299 10.4041 12.4033 10.5266ZM18.9072 32.9065C20.1499 32.9065 21.1572 33.9138 21.1572 35.1565C21.1572 36.3991 20.1499 37.4065 18.9072 37.4065C17.6647 37.4065 16.6572 36.3991 16.6572 35.1565C16.6572 33.9138 17.6646 32.9065 18.9072 32.9065ZM32.1142 32.9065C33.3568 32.9065 34.3642 33.9138 34.3642 35.1565C34.3642 36.3991 33.3568 37.4065 32.1142 37.4065C30.8716 37.4065 29.8642 36.3991 29.8642 35.1565C29.8642 33.9138 30.8716 32.9065 32.1142 32.9065Z" fill="#28A745"/>
</g>
<defs>
<clipPath id="clip0_776_387">
<rect width="48" height="48" fill="white" transform="translate(0.5 0.386963)"/>
</clipPath>
</defs>
</svg></button>
                                            </div>
                            </div>
                        </div>
                </Col>
                <Col xl={3} lg={4} md={6} xs={12} className='mt-4'>
                    <div className='related_box position-relative'data-aos="flip-left" data-aos-duration="3000">
                            <span className=''>
                                <img className=' w-100' src={rela_1} alt="" />
                                  <img className=' position-absolute off' src={off} alt="" />
                                <p className='clr_white fs_14 fw_400 ff_Poppins bg_grey_1 position-absolute new d-flex align-items-center justify-content-center'>NEW</p>
                            </span>
                            <div className=' d-flex justify-content-between px-3 py-4'>
                                <div>
                                    <p className='fw_500 fs_18 ff_Poppins clr_grey_1 mt-2'>Quickiins Mens Shoes</p>
                                    <p className='fw_500 fs_18 ff_Poppins clr_light_grey_1 mt-2'>$90.00 <span className='fw_500 fs_18 ff_Poppins clr_red'>$70.00</span></p>
                                    <img src={black_start} alt="" />
                                </div>
                                <div className='mt-3'>
                                    <button className=' border-0 bg-white'><svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_776_387)">
<path d="M24.5 0.386963C11.2452 0.386963 0.5 11.1321 0.5 24.387C0.5 37.6418 11.2452 48.387 24.5 48.387C37.7548 48.387 48.5 37.6418 48.5 24.387C48.5 11.1321 37.7548 0.386963 24.5 0.386963ZM12.4033 10.5266L16.6748 11.8684C17.2403 12.0541 17.6169 12.5792 17.6826 13.1164L17.9228 15.4689L37.2646 17.6281C38.0952 17.789 38.6788 18.5388 38.5625 19.3097L37.3613 26.0772C37.2084 26.7851 36.6222 27.2704 35.9697 27.2784H18.7871L18.4502 29.1974H34.7686C35.6218 29.2274 36.2468 29.8772 36.2568 30.6358C36.2214 31.5014 35.5238 32.0679 34.7686 32.0772H16.7217C15.8114 32.002 15.1432 31.2806 15.2832 30.3985L16.0508 26.1739L14.8496 14.3645L11.539 13.3098C11.155 13.1818 10.8668 12.9411 10.6748 12.5891C10.3115 11.8278 10.6508 10.9849 11.2988 10.6203C11.6687 10.4281 12.0299 10.4041 12.4033 10.5266ZM18.9072 32.9065C20.1499 32.9065 21.1572 33.9138 21.1572 35.1565C21.1572 36.3991 20.1499 37.4065 18.9072 37.4065C17.6647 37.4065 16.6572 36.3991 16.6572 35.1565C16.6572 33.9138 17.6646 32.9065 18.9072 32.9065ZM32.1142 32.9065C33.3568 32.9065 34.3642 33.9138 34.3642 35.1565C34.3642 36.3991 33.3568 37.4065 32.1142 37.4065C30.8716 37.4065 29.8642 36.3991 29.8642 35.1565C29.8642 33.9138 30.8716 32.9065 32.1142 32.9065Z" fill="#28A745"/>
</g>
<defs>
<clipPath id="clip0_776_387">
<rect width="48" height="48" fill="white" transform="translate(0.5 0.386963)"/>
</clipPath>
</defs>
</svg></button>
                                            </div>
                            </div>
                        </div>
                </Col>
                <Col xl={3} lg={4} md={6} xs={12} className='mt-4'>
                    <div className='related_box position-relative'data-aos="flip-left" data-aos-duration="3000">
                            <span className=''>
                                <img className=' w-100' src={re} alt="" />
                                  <img className=' position-absolute off' src={off} alt="" />
                                <p className='clr_white fs_14 fw_400 ff_Poppins bg_grey_1 position-absolute new d-flex align-items-center justify-content-center'>NEW</p>
                            </span>
                            <div className=' d-flex justify-content-between px-3 py-4'>
                                <div>
                                    <p className='fw_500 fs_18 ff_Poppins clr_grey_1 mt-2'>Quickiins Mens Shoes</p>
                                    <p className='fw_500 fs_18 ff_Poppins clr_light_grey_1 mt-2'>$90.00 <span className='fw_500 fs_18 ff_Poppins clr_red'>$70.00</span></p>
                                    <img src={black_start} alt="" />
                                </div>
                                <div className='mt-3'>
                                    <button className=' border-0 bg-white'><svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_776_387)">
<path d="M24.5 0.386963C11.2452 0.386963 0.5 11.1321 0.5 24.387C0.5 37.6418 11.2452 48.387 24.5 48.387C37.7548 48.387 48.5 37.6418 48.5 24.387C48.5 11.1321 37.7548 0.386963 24.5 0.386963ZM12.4033 10.5266L16.6748 11.8684C17.2403 12.0541 17.6169 12.5792 17.6826 13.1164L17.9228 15.4689L37.2646 17.6281C38.0952 17.789 38.6788 18.5388 38.5625 19.3097L37.3613 26.0772C37.2084 26.7851 36.6222 27.2704 35.9697 27.2784H18.7871L18.4502 29.1974H34.7686C35.6218 29.2274 36.2468 29.8772 36.2568 30.6358C36.2214 31.5014 35.5238 32.0679 34.7686 32.0772H16.7217C15.8114 32.002 15.1432 31.2806 15.2832 30.3985L16.0508 26.1739L14.8496 14.3645L11.539 13.3098C11.155 13.1818 10.8668 12.9411 10.6748 12.5891C10.3115 11.8278 10.6508 10.9849 11.2988 10.6203C11.6687 10.4281 12.0299 10.4041 12.4033 10.5266ZM18.9072 32.9065C20.1499 32.9065 21.1572 33.9138 21.1572 35.1565C21.1572 36.3991 20.1499 37.4065 18.9072 37.4065C17.6647 37.4065 16.6572 36.3991 16.6572 35.1565C16.6572 33.9138 17.6646 32.9065 18.9072 32.9065ZM32.1142 32.9065C33.3568 32.9065 34.3642 33.9138 34.3642 35.1565C34.3642 36.3991 33.3568 37.4065 32.1142 37.4065C30.8716 37.4065 29.8642 36.3991 29.8642 35.1565C29.8642 33.9138 30.8716 32.9065 32.1142 32.9065Z" fill="#28A745"/>
</g>
<defs>
<clipPath id="clip0_776_387">
<rect width="48" height="48" fill="white" transform="translate(0.5 0.386963)"/>
</clipPath>
</defs>
</svg></button>
                                            </div>
                            </div>
                        </div>
                </Col>
            </Row>
            <div className=' d-flex justify-content-end mt-5 pt-2'>
                <button className='fw_600 fs_24 ff_Poppins clr_white d-inline-block back_box_1 effect'>1</button>
                <button className='fw_600 fs_24 ff_Poppins clr_light_black d-inline-block back_box mx-2 effect'>2</button>
                <button className='fw_600 fs_24 ff_Poppins clr_light_black d-inline-block back_box effect'>3</button>
                <span><button className='mt-2 fw_400 fs_16 ff_Poppins clr_grey_1 d-inline-block next_box ms-3 effect'>Next >></button>
</span>
            </div>
        </Container>
    </section>
  )
}

export default Related