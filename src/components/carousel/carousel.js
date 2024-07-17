import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img2 from './img-2.jpg'
import './carousel.css'

const images = [
	{
		src: "https://firebasestorage.googleapis.com/v0/b/bhavna-ngo.appspot.com/o/jagriti.jpeg?alt=media&token=656c9e4f-ff06-491f-8a9c-761c4250db6f",
		title: "जागृति",
		info1: "एक पहल",
    info2: "शिक्षा के लिए",
	},

	{
		src: "https://firebasestorage.googleapis.com/v0/b/bhavna-ngo.appspot.com/o/poshan.jpeg?alt=media&token=ce9301ca-4cd2-4c88-893e-e136dffee051",
		title: "पोषण",
		info1: "स्वस्थ भारत",
    info2: "की बुनियाद",
	},

	{
		src: img2,
		title: "Jagriti",
		info1: "Eradicating literacy",
	},
];

function home_Carousel() {

  const renderImages = () => {
    return images.map((item) => {
      return (
        <Carousel.Item interval={3000}>
        <div className='image-container'>
          <img src={item.src} alt='hello world'/>
          <span>
            <h3 style={{color:'orange'}}>{item.title}</h3>
            {/* <p>{item.desc}</p> */}
            <h4>{item.info1}</h4>
            <h4>{item.info2}</h4>
          </span>
        </div>
      </Carousel.Item>
      );
    });
  };

  return (
      <div className='main-container'>
        <Carousel>
          {renderImages()}
        </Carousel>
      </div>
  );
}

export default home_Carousel;