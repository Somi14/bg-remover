import React from 'react';  
import './upload.scss';
import { useState } from 'react';
import { Image } from '@mui/icons-material';

const Upload = () => {
    const [beforeImage, setBeforeImage] = useState(null);
    const [afterImage, setAfterImage] = useState(null);
    const [displayedImage, setDisplayedImage] = useState('before');
    const[image1, setImage1]=useState(null);
  
  let imgUrl;
            function handleUpload() {
               

                const fileInput = document.getElementById('filepicker');
                if (!fileInput) {
                  console.error("Element with ID 'filepicker' not found");
                  return;
              }

                const image = fileInput.files[0]; // picking first file 
                setBeforeImage(image);

               
                
                const formData = new FormData();
                formData.append("image_file" , image); // form data ke andar image dali
                formData.append('size', 'auto');
                // formdata ko pass karna h server pe

            
                console.log("clicked");
                // form data use karte h taki ham multimedia files ko multipart data ke form me bhej sake
                    //https://api.remove.bg/v1.0/removebg 
                    const apiKey =  "uGmQua6fSRU7k87RFRP7L1fn";
                    
                    fetch('https://api.remove.bg/v1.0/removebg', {
                        method : 'POST',
                        headers : {
                            'X-Api-Key' : apiKey,
                        },
                        body : formData // formdata ko server me bhej diya
                    })
                    .then(function(response) { // ye response server wala h
                        return response.blob(); // server se jo response mil rha h vo blob ke form me mil rha h
                    })
                    .then(function(blob) {
                        console.log(blob);
                        const url = URL.createObjectURL(blob); // inbuilt function which creates url of blob
                        imgUrl = url;
                        setImage1(url);
                        setAfterImage(url);

                                              
                    })
                    .catch();
                    console.log(imgUrl);


                    
            }

            const handleButtonClick = (type) => {
                setDisplayedImage(type);
              };

            function downloadFile() {
              console.log("Downloading image:", imgUrl);

              var anchorElement = document.createElement('a');
              anchorElement.href = imgUrl;
              anchorElement.download = 'no-bg.png';
              document.body.appendChild(anchorElement);
              anchorElement.click();
              document.body.removeChild(anchorElement);
          }

       


  return (
    
        
            <div className="upload-page">
                <h1 className='heading'>Upload an image to remove background</h1>

                <div className='mainConatin'>
           <div className='conatiner'>
                
                       


                <label htmlFor="filepicker" id="upload-btn">Upload Image*</label>
                <input className="form-control" id="filepicker" type="file" style={{ display: 'none' }}/>

      
      
                              <button className="btn" type="button" onClick={handleUpload}>Remove Background</button>


                              


                        <button className="btn" type="button" onClick={downloadFile} >Download</button>

                        
                    

                    
                    </div>

    <div className='removedConatiner'>
          
    {displayedImage === 'before' && beforeImage && (
        <div>
         
          <img className='final-images' src={URL.createObjectURL(beforeImage)} alt="Before" />
        </div>
      )}

      {displayedImage === 'after' && afterImage && (
        <div>
        
          <img className='final-images' src={afterImage} alt="After"  />
        </div>
      )}
          
        </div>


        </div>
        <div className="before-after-btens">
          <button className='R-btn'
           onClick={() => handleButtonClick('before')} >Before</button>

          <button className='R-btn' 
          onClick={() => handleButtonClick('after')} >After</button>
          </div>



          
                   
            </div>
         )
}

  

export default Upload
