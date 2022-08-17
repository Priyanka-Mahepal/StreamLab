import React from "react";
import Homepage from "../components/HomePageSlider/Homepage";
import MultiCarousal from "../components/MultiCarousal/MultiCarousal";
import ScrollToTop from "../components/ScrollToTop";
import ThirdSlider from "../components/ThirdSlider/ThirdSlider";
import '../pages/common-css-slider.css'

const home = () => {
  return (
    <div>
      <ScrollToTop/>
      <Homepage movie_id={0} />
      <div className='common-css-slider' >
      <MultiCarousal cat_id={0}  />
      </div>
     
      <MultiCarousal cat_id={1} />
      {/* <MultiCarousal cat_id={0} /> */}
      <ThirdSlider />
      
      <div className='common-css-bottom' >
      <MultiCarousal cat_id={0}  />
      </div>
    </div>
  );
};
export default home;
