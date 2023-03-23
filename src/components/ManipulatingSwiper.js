import React, { useState, useRef } from 'react';
import Swiper from 'swiper';
 
const ManipulatingSwiper = () => {
  const [swiper, setSwiper] = useState(null);
 
  const ref = useRef(null);
 
  const goNext = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      swiper.slideNext();
    }
  };
 
  const goPrev = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      swiper.slidePrev();
    }
  };
 
  return (
    <div>
      <Swiper ref={ref}>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
        <div>Slide 4</div>
        <div>Slide 5</div>
      </Swiper>
      <button onClick={goPrev}>Prev</button>
      <button onClick={goNext}>Next</button>
    </div>
  );
};
 
export default ManipulatingSwiper;