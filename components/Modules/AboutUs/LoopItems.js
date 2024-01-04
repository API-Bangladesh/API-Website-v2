import { useState, useEffect } from 'react';
import {FcBriefcase, FcBusinessContact } from 'react-icons/fc';

import Svg1 from "./Svg1";
import Svg2 from "./Svg2";
import Svg3 from "./Svg3";

const LoopItems = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 2);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='itemBox position-relative'>
      <div className={`itemIconBox ${activeIndex === 0 ? 'active' : ''}`}>
          <Svg1/>
      </div>
      <div className={`itemIconBox ${activeIndex === 1 ? 'active' : ''}`}>
        <Svg2/>
      </div>
      {/* <div className={`itemIconBox ${activeIndex === 2 ? 'active' : ''}`}>
        <Svg3/>
      </div> */}
    </div>
  );
};

export default LoopItems;
