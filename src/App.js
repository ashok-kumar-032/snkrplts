import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Mynav from "./Components/Mynav";
import Locker from "./Components/Locker";
import Desc from "./Components/Desc";
import Footer from "./Components/Footer";
import Sports from "./Components/Sports";
import BackToTop from "./Components/BackToTop";
import Loading from "./Components/Loading";
import Related from "./Components/Related";
import Pagination  from "./Components/Pagination";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App overflow-hidden">
      <Mynav />
      <Sports />
      <Locker />
      <Desc />
      <Related/>
      <Footer />
      <BackToTop />
      {/* <Pagination/> */}
      {/* <Loading/> */}
    </div>
  );
}

export default App;
