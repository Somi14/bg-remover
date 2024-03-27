import React from 'react'
import "./slider.scss";
import { useState } from 'react';
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import UploadHere from '../Uploadhere/UploadHere';

const Slider = () => {
const [currentSlide, setCurrentSlide] = useState(0);

    
const data=[
  "https://cdn.movavi.io/pages/0012/80/b1e0facd319e1f489c8a9a531c102cc3a0c3ddbc.webp",
 " https://www.stockvault.net/data/2020/12/28/282045/preview16.jpg",
 "https://www.online-tech-tips.com/wp-content/uploads/2022/08/ott-how-to-change-background-image-using-photoshop-1-compressed.png",
];

const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };


  return (
    <div className='slider'>
        <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
        </div>
        <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
        </div>

       
      
    
    </div>
  )
}

export default Slider
