import React from 'react'
import "./videoConatiner.scss";
import { Navigate, useNavigate } from 'react-router-dom';

const VideoContainer = () => {
  const navigate=useNavigate();

  const navigateToUpload=()=>{
    navigate('/upload');
   }

  return (
    <div className='video'>


        <div className='main'>
        <div className="content">
          <h2>Free Background Changer</h2>
          <p>Change image backgrounds online in seconds with Fotor's background changer. Change background of photo at your fingertips with  photo background changing app. You can change photo background to transparent and add aesthetic backgrounds to make your photo look perfect in one tap.</p>
          <p>Whether you want to change the background of a photo to white or add a new background, you can do it all.</p>

          <div className='upload-btn'>
        <button className='btn' onClick={navigateToUpload}>Change Background Now</button>
      </div>

          
        </div>

        <div className='video-container'>
        <video src="/video/Change-image-background-online-in-seconds-with-Fotors-AI-background-changer (1).mp4" loop autoPlay muted></video>
        
        </div>
        </div>

      
    </div>
  )
}

export default VideoContainer
