import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/logo.png";
import logo_2 from "../assets/logo_2.png";
import { BiMenu } from "react-icons/bi";

const Mynav = () => {
  const [first, setfirst] = useState(true);
  function clickshow() {
    setfirst(!first);
  }
  if (!first) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <div>
      <Container>
        <div className="py-3 d-flex justify-content-between align-items-center">
          <span>
            <img className="w-100 d-xl-block d-none pointer" src={logo} />
          </span>
          <span>
            <img className="w-100" src={logo_2} />
          </span>
        </div>
      </Container>
      <div className="box_nav pt-3">
        <Container>
          <div className="py-3 d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center justify-content-center ">
              <img className="w_100 z-10 d-xl-none pointer" src={logo} />
            </div>
            <ul
              className={first? "nav_show d-flex gap-2 align-items-center": "nav_show d-flex showw gap-2 mb-0 align-items-center ps-0"}
            >
              <li><a className="fw_400 fs_18 ff_Roboto clr_black mb-0 ms-xl-3 home"href="#">HOME</a></li>
              <li><a className="fw_400 fs_18 ff_Roboto clr_black mb-0 ms-xl-3 home"
                  href="#"
                >
                  SNEAKERS KOPEN
                </a>
              </li>
              <li>
                <a
                  className="fw_400 fs_18 ff_Roboto clr_black mb-0 ms-xl-3 home"
                  href="#"
                >
                  INTERVIEWS
                </a>
              </li>
              <li>
                <a
                  className="fw_400 fs_18 ff_Roboto clr_black mb-0 ms-xl-3 home"
                  href="#"
                >
                  SALE
                </a>
              </li>
              <li>
                <a
                  className="fw_400 fs_18 ff_Roboto clr_black mb-0 ms-xl-3 home"
                  href="#"
                >
                  SNEAKER VAN DE DAG
                </a>
              </li>
              <li>
                <a
                  className="fw_400 fs_18 ff_Roboto clr_black mb-0 ms-xl-3 home"
                  href="#"
                >
                  SNEAKER FORUM
                </a>
              </li>
              <li>
                <a
                  className="fw_400 fs_18 ff_Roboto clr_black mb-0 ms-xl-3 home"
                  href="#"
                >
                  BLOG
                </a>
              </li>
            </ul>
            <div className="z-10 d-xl-none">
              <h3 className="clr_orange menu" onClick={clickshow}>
                <BiMenu />
              </h3>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Mynav;
