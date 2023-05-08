import React from "react";
import top from "../assets/top.png";

const BackToTop = () => {
  const [backTop, setBackTop] = React.useState(false);
  const moveToTop = () => {
    document.documentElement.scrollTop = 0;
  };
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 100) {
      setBackTop(true);
    } else {
      setBackTop(false);
    }
  });
  return (
    <>
      <div>
        {backTop ? (
          <img
            onClick={moveToTop}
            className="position-fixed bottom-0 end-0 me-4 mb-4 w_10 top"
            src={top}
            alt=""
          />
        ) : (
          //   <button
          //     onClick={moveToTop}
          //     className="btn btn-primary position-fixed bottom-0 end-0 me-4 mb-4"
          //   >
          //     top
          //   </button>
          ""
        )}
        <div></div>
      </div>
    </>
  );
};

export default BackToTop;
