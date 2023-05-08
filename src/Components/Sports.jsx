import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import red_big from "../assets/red_big.png";
import s_1 from "../assets/s_1.png";
import s_2 from "../assets/s_2.png";
import s_3 from "../assets/s_3.png";
import s_4 from "../assets/s_4.png";
import star from "../assets/star.png";
import aero from "../assets/aero.png";
import dil from "../assets/dil.png";
import img_1 from "../assets/img_1.png";
import img_2 from "../assets/img_2.png";
import img_3 from "../assets/img_3.png";
import img_4 from "../assets/img_4.png";
import img_5 from "../assets/img_5.png";

const Sports = () => {
  const [first, setfirst] = React.useState(1);
  function increase() {
    setfirst(first + 1);
  }
  function decrease() {
    if (first == 1) {
      setfirst(first);
    } else {
      setfirst(first - 1);
    }
  }
  return (
    <div>
      <Container className=" pt-lg-5 ">
        <Row className="pt-5">
          <Col xl={6} xs={12} className="px-5"data-aos="fade-down-right"data-aos-duration="3000">
            <div className="">
              <span className="">
                <img src={red_big} className="h-100 w-100" />
              </span>
              <div className="pt-4 d-flex justify-content-evenly align-items-center">
                <span>
                  <img className="w-100 pe-2 pointer" src={s_1}data-aos="flip-left" data-aos-duration="3000" />
                </span>
                <span>
                  <img className="w-100 px-2 pointer" src={s_2}data-aos="flip-left" data-aos-duration="3000" />
                </span>
                <span>
                  <img className="w-100 px-2 pointer" src={s_3}data-aos="flip-left" data-aos-duration="3000" />
                </span>
                <span>
                  <img className="w-100 ps-2 pointer" src={s_4}data-aos="flip-left" data-aos-duration="3000" />
                </span>
              </div>
            </div>
          </Col>
          <Col xl={6} xs={12} data-aos="fade-up-left"data-aos-duration="3000">
            <div className=" d-flex flex-column justify-content-between h-100 pb-4 pt-md-5 pt-xl-0 pt-4 pt-md-5">
              <div>
                <p className=" ff_Poppins fw_600 clr_black fs_30">
                  PREMIUM MENS SPORTS LATHER KEDS
                </p>
                <div className=" d-flex align-items-sm-center flex-column flex-sm-row">
                  <img className=" w-25" src={star} />
                  <p className=" ff_Poppins fw_400 fs_20 mb-0 ms-sm-2 mt-2 mt-sm-0 clr_light_black">
                    ( 5 Customer Review )
                  </p>
                </div>
                <p className=" ff_Poppins fw_400 fs_20 pt-4 clr_grey">
                  Sed nec ultricies felis, vitae facilisis ipsum. Morbi id
                  turpis euismod, rhoncus tortor quis, lobortis sapien. Sed
                  imperdiet nulla in leo ullamcorper, in finibus elit porta. Sed
                  eget congue neque, mattis finibus neque. In vel dolor ac augue
                  pretium
                </p>
              </div>
              <div>
                <div className=" d-flex align-items-sm-center flex-column flex-sm-row">
                  <div className="d-flex align-items-center">
                    <p className=" fw_500 mb-0 fs_20 clr_black ff_Poppins pe-3">
                      Qty:
                    </p>
                    <div className=" qut_box d-flex align-items-center justify-content-around px-3">
                      <p
                        className=" fw_400 fs_20 clr_grey_1 ff_Sans  mb-0 pointer me-3"
                        onClick={decrease}
                      >
                        -
                      </p>
                      <p className=" fw_400 fs_20 clr_grey_1 ff_Sans  mb-0">
                        {first}
                      </p>
                      <p
                        className=" fw_400 fs_20 clr_grey_1 ff_Sans  mb-0 pointer ms-3"
                        onClick={increase}
                      >
                        +
                      </p>
                    </div>
                  </div>
                  <button
                    className=" add_btn ff_Poppins bg_green d-inline-block text-center ms-sm-3 mt-3 mt-sm-0 text-white fw_500 fs_20"
                  >
                    Add to Cart
                  </button>
                </div>
                <form action="/action_page.php" className=" mt-3">
                  <div className="pb-2 d-flex align-items-center">
                    <p className="mb-0 fw_500 mb-0 fs_20 text-black ff_poppins pe-3">
                      Size:
                    </p>
                    <div className="input_box ">
                      <select
                        id="parcel_2"
                        className=" border-0 ff_Poppins fw_500 fs_18 clr_grey_1 w-100 "
                        name="parcel"
                      >
                        <option value="To">S</option>
                        <option value="To">M</option>
                        <option value="To">L</option>
                      </select>
                    </div>
                  </div>
                </form>
                <div className=" d-flex align-items-center mt-2">
                  <p className="mb-0 pe-3 fw_500 mb-0 fs_20 text-black ff_poppins">
                    Color:
                  </p>
                  <div className="mt-3 d-flex">
                    <p className="red_1 pointer"></p>
                    <p className="red_2 ms-3 pointer"></p>
                    <p className="red_3 ms-3 pointer"></p>
                    <p className="red_4 ms-3 pointer"></p>
                  </div>
                </div>
                <div className=" d-flex align-items-center pt-3 pb-4">
                  <p className=" mb-0 ff_poppins fw_300 fs_16 clr_compair">
                    <img className=" pointer" src={aero} />
                    <span className="ff_poppins fw_400 fs_16 clr_black ms-2">
                      Compare
                    </span>
                  </p>
                  <p className=" mb-0 ff_poppins fw_300 fs_16 clr_compair ps-4">
                    <img className=" pointer" src={dil} />
                    <span className="ff_poppins fw_400 fs_16 clr_black ms-2">
                      Wishlist
                    </span>
                  </p>
                </div>
                <hr className=" shoes_line mb-4" />
                <div>
                  <a href="#">
                    <img src={img_1} alt="" />
                  </a>
                  <a href="#">
                    <img className="ms-4" src={img_2} alt="" />
                  </a>
                  <a href="#">
                    <img className="ms-4" src={img_3} alt="" />
                  </a>
                  <a href="#">
                    <img className="ms-4" src={img_4} alt="" />
                  </a>
                  <a href="#">
                    <img className="ms-4" src={img_5} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Sports;
