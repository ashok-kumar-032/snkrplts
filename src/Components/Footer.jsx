import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import footer_logo from "../assets/footer_logo.png";

const Footer = () => {
  return (
    <section>
      <div className="pt-3 pb-5 bg_black">
        <Container className="pb-4">
          <Row>
            <Col xl={4} xs={12} data-aos="fade-right"data-aos-duration="3000">
              <span>
                <img className=" pointer" src={footer_logo} alt="" />
              </span>
              <p className="fw_400 fs_16 ff_Poppins clr_footer max_w_450">
                Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis
                euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet
                nulla in leo ullamcorper, in finibus elit porta.{" "}
              </p>
              <div className="mt-4 pt-2">
                <span className="facbook effect">
                  <a href="#">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.897461 15.4679C0.897461 22.6714 6.12925 28.6614 12.9717 29.8761V19.4113H9.34946V15.387H12.9717V12.1668C12.9717 8.54447 15.3057 6.53289 18.6068 6.53289C19.6524 6.53289 20.7802 6.69348 21.8258 6.85407V10.5573H19.9748C18.2035 10.5573 17.8015 11.4423 17.8015 12.57V15.387H21.6652L21.0217 19.4113H17.8015V29.8761C24.6439 28.6614 29.8757 22.6726 29.8757 15.4679C29.8757 7.45416 23.3556 0.897827 15.3866 0.897827C7.41757 0.897827 0.897461 7.45416 0.897461 15.4679Z" fill="white"/>
</svg>

                  </a>
                </span>

                <span className="px-4 facbook effect">
                  <a href="#">
                    <svg width="36" height="35" viewBox="0 0 36 35"fill="none"xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18.1609 2.17334C9.75942 2.17334 2.94727 8.9855 2.94727 17.3869C2.94727 25.7884 
                                 9.75942 32.6005 18.1609 32.6005C26.5623 32.6005 33.3745 25.7884 33.3745 17.3869C33.3745 
                                  8.9855 26.5623 2.17334 18.1609 2.17334ZM25.4722 13.6413C25.4824 13.8009 25.4824 13.9673 
                                   25.4824 14.1303C25.4824 19.1154 21.6858 24.8579 14.748 24.8579C12.6086 24.8579 10.6254 
                                    24.2364 8.9546 23.1667C9.26023 23.2007 9.55227 23.2143 9.8647 23.2143C11.6306 23.2143 
                                     13.2538 22.6166 14.5476 21.6046C12.8904 21.5707 11.4981 20.484 11.0227 
                                      18.9898C11.6034 19.0747 12.1264 19.0747 12.724 18.9219C11.8707 18.7485 11.1038 
                                       18.2851 10.5534 17.6103C10.0031 16.9356 9.70335 16.0911 9.70509 
                                        15.2204V15.1728C10.2043 15.4547 10.7918 15.6279 11.4064 15.6516C10.8897 15.3073 
                                         10.466 14.8407 10.1727 14.2934C9.87952 13.746 9.72588 13.1348 9.72546 
                                          12.5138C9.72546 11.8109 9.90884 11.1691 10.2382 10.6121C11.1854 11.7781 12.3672 
                                           12.7316 13.707 13.4109C15.0468 
                                 14.0902 16.5146 14.4799 18.0148 14.5548C17.4817 11.9909 19.397 9.91597 21.6994 
                                  9.91597C22.7861 9.91597 23.7641 10.371 
                                 24.4534 11.1045C25.3058 10.9449 26.1208 10.6257 26.8475 10.1978C26.5657 11.0706 25.9748 
                                  11.8075 25.1904 12.2727C25.951 
                                 12.1912 26.6845 11.9807 27.3637 11.6852C26.8509 12.4391 26.2091 13.1081 25.4722 
                                  13.6413V13.6413Z" fill="white"/>
                    </svg>
                  </a>
                </span>
                <span className="facbook effect">
                  <a href="#">
                    <svg
                      width="36"
                      height="35"
                      viewBox="0 0 36 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.9353 2.17334C9.53384 2.17334 2.72168 8.9855 2.72168 17.3869C2.72168 25.7884 
                                 9.53384 32.6005 17.9353 32.6005C26.3367 32.6005 33.1489 25.7884 33.1489 17.3869C33.1489 
                                  8.9855 26.3367 2.17334 17.9353 2.17334ZM19.1748 21.1496C17.684 23.2482 14.6888 23.8595 
                                   12.3524 22.9596C10.0093 22.0665 8.34528 19.5909 8.54563 17.0677C8.59657 13.9809 11.4389 
                                    11.2743 14.5258 11.3796C16.0064 11.3117 17.3987 11.9535 18.5329 12.8602C18.0473 
                                     13.4103 17.5481 13.9401 17.0116 14.4325C15.6498 13.4918 13.7108 13.2236 12.349 
                                      14.3103C10.3998 15.6584 10.3115 18.8404 12.186 20.2904C14.0096 21.9442 17.4565 
                                       21.1224 17.9624 18.5891C16.8214 18.5721 15.6736 18.5891 14.5326 18.5517C14.5292 
                                        17.8691 14.5258 17.19 14.5292 16.5074C16.4377 16.5006 18.3496 16.4972 20.2615 
                                         16.5142C20.3735 18.1204 20.1596 19.8252 19.1748 21.1496ZM27.4098 18.2189C26.8393 
                                          18.2257 26.2688 18.2291 25.6983 18.2325C25.6915 18.803 25.6881 19.3735 25.6881 
                                           19.944H23.98C23.9732 19.3735 23.9732 18.8064 23.9698 18.2359C23.3993 18.2291 
                                            22.8288 18.2257 22.2582 18.2189V16.5176C22.8288 16.5108 23.3993 16.5074 
                                             23.9698 16.5074C23.9732 15.9369 23.98 15.3664 
                                            23.9834 14.7959H25.6881L25.6983 16.5074C26.2688 16.5142 26.8393 16.5142 
                                             27.4098 16.5176V18.2189Z" fill="white" />
                    </svg>
                  </a>
                </span>
              </div>
            </Col>
            <Col xl={8} xs={12}>
              <Row className="mt-5 pt-xl-5">
                <Col lg={3} md={4} sm={6} className=" d-flex justify-content-xl-end"data-aos="fade-up"data-aos-duration="3000">
                  <ul className="ps-0">
                    <li>
                      <p className="fw_600 fs_18 ff_Poppins  clr_white">
                        CUSTOM LINKS
                      </p>
                    </li>
                    <li className="mt-3">
                      <a
                        className="fw_400 fs_18 ff_Poppins f_hover effect clr_footer"
                        href="#"
                      >
                        Lorem ipsum
                      </a>
                    </li>
                    <li className="mt-3">
                      <a
                        className="fw_400 fs_18 ff_Poppins f_hover effect clr_footer"
                        href="#"
                      >
                        Lorem ipsum
                      </a>
                    </li>
                  </ul>
                </Col>
                <Col lg={3} md={4} sm={6} className=" d-flex justify-content-xl-end"data-aos="fade-down"data-aos-duration="3000" >
                  <ul className="ps-0">
                    <li>
                      <p className="fw_600 fs_18 ff_Poppins clr_white">
                        PRODUCTS
                      </p>
                    </li>
                    <li className="mt-3">
                      <a
                        className="fw_400 fs_18 ff_Poppins f_hover effect clr_footer"
                        href="#"
                      >
                        Lorem ipsum
                      </a>
                    </li>
                    <li className="mt-3">
                      <a
                        className="fw_400 fs_18 ff_Poppins f_hover effect clr_footer"
                        href="#"
                      >
                        Lorem ipsum
                      </a>
                    </li>
                    <li className="mt-3">
                      <a
                        className="fw_400 fs_18 ff_Poppins f_hover effect clr_footer"
                        href="#"
                      >
                        Lorem ipsum
                      </a>
                    </li>
                  </ul>
                </Col>
                <Col lg={3} md={4} sm={6} className=" d-flex justify-content-xl-end"data-aos="fade-up"data-aos-duration="3000">
                  <ul className="ps-0">
                    <li>
                      <p className="fw_600 fs_18 ff_Poppins clr_white text-nowrap">
                        OUR COMPANY
                      </p>
                    </li>
                    <li className="mt-3">
                      <a
                        className="fw_400 fs_18 ff_Poppins f_hover effect clr_footer"
                        href="#"
                      >
                        Lorem ipsum
                      </a>
                    </li>
                    <li className="mt-3">
                      <a
                        className="fw_400 fs_18 ff_Poppins f_hover effect clr_footer"
                        href="#"
                      >
                        Lorem ipsum
                      </a>
                    </li>
                  </ul>
                </Col>
                <Col lg={3} md={4} sm={6} className=" d-flex justify-content-xl-end"data-aos="fade-down"data-aos-duration="3000">
                  <ul className="ps-0">
                    <li>
                      <p className="fw_600 fs_18 ff_Poppins clr_white text-nowrap">
                        YOUR ACCOUNT
                      </p>
                    </li>
                    <li className="mt-3">
                      <a
                        className="fw_400 fs_18 ff_Poppins f_hover effect clr_footer"
                        href="#"
                      >
                        Lorem ipsum
                      </a>
                    </li>
                    <li className="mt-3">
                      <a
                        className="fw_400 fs_18 ff_Poppins f_hover effect clr_footer"
                        href="#"
                      >
                        Lorem ipsum
                      </a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div className=" bg_light_black text-center py-4"data-aos="flip-down"data-aos-duration="3000">
        <p className="fw_400 fs_18 ff_Poppins clr_footer mb-0">
          © Copyright SNKRPLTS 2021.{" "}
        </p>
      </div>
    </section>
  );
};

export default Footer;
