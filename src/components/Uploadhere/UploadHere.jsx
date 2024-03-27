import React from 'react'
import './uploadhere.scss';
import {Route, Routes, useNavigate} from 'react-router-dom';

const UploadHere = () => {
   const navigate =useNavigate();

   const navigateToUpload=()=>{
    navigate('/upload');
   }

   const navigateHome=()=>{
    navigate('/');
   }


  return (
    <div className='sections'>


    <div className='section1'>

        <div className='section1-left'>
            <img src="/img/pic.png" alt="" /></div>
      
      <div className='section1-right'>
        <h1 className='heading'>Automatic Background Changer</h1>
        <p className='matter'>AI-powered background changer gives you one-click power to change the background of any photo online. Just drag and drop your photo to Fotor’s background changing tool, and Fotor will automatically detect and remove the background from your photo in a flash. You can then change image background to anything you want- solid colors, pattern or texture backgrounds, landscape photos, and more. The entire process takes less than 5 seconds- simple and fast!</p>

      <div className='upload-btn'>
        <button className='btn' onClick={navigateToUpload}>Change Background Now</button>
      </div>
      </div>
</div>



<div className='section1'>

       
      
      <div className='section1-right'>
        <h1 className='heading'>Change Background to White for eCommerce Product Images</h1>
        <p className='matter'>A white background is one of the most popular backgrounds for online marketplaces because it makes the listed products look clean and focused. Using Fotor, you can easily and quickly add white backgrounds to your product photos. Fotor’s background changer also provides a set of editing tools to help you edit photo backgrounds- blur backgrounds, adjust lighting, remove unwanted objects from backgrounds, change background color, and more. Easily optimize your product images for the best impact.

</p>

      <div className='upload-btn'>
        <button className='btn' onClick={navigateToUpload}>Change Background Now</button>
      </div>
      </div>

      <div className='section2-left'>
            <img  src="/img/sofa.png" alt="" /></div>


    </div>




    <div className='section1'>
     
    <div className='section3-left'>
            <img  src="/img/products.png" alt="" /></div>
       
      
      <div className='section1-right'>
        <h1 className='heading'>A Wide Variety of Backgrounds Pictures to Choose From</h1>
        <p className='matter'>Besides changing photo backgrounds, Fotor’s photo background changer offers a variety of preset backgrounds you can freely use. You can add solid color backgrounds, pattern backgrounds, nature and landscape photos, illustrations, and much more to your photos. You can even describe the desired background picture you want, and let Fotor AI create it for you. Effortlessly use AI-generated images to match your needs and aesthetics.</p>

      <div className='upload-btn'>
        <button className='btn' onClick={navigateToUpload}>Change Background Now</button>
      </div>
      </div>

     


    </div>


    </div>
  )
}

export default UploadHere
