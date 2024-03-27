import React from 'react'
import Slider from '../../components/slider/Slider'
import UploadHere from '../../components/Uploadhere/UploadHere';
import "./home.scss";
import VideoContainer from '../../components/videoContainer/VideoContainer';

const Home = () => {
  return (
    <div className='home'>
      
      <VideoContainer/>
      <UploadHere/>
    </div>
  )
}

export default Home
