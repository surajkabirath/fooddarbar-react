import React from 'react';
import {images} from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
  
  <div className="app__aboutus-content flex__center ">
    <div className="app__aboutus_content_about">
      <h1 className='headtext__cormorant'>About Us</h1>
      <img src={images.spoon} alt="about_spoon" className='spoon__img' />
      <p className='p__opensans'>FoodDarbar bridges the traditional with the contemporary, bringing live-fire cooking, housemade pasta, and a robust national and international wine list to the heart of FoodDarbar.FoodDarbar Restaurant has three generations of family member working together to fulfill the idea “Honor the Customer, Quality Comes First”. Through hard work and dedication.</p>
      <button type='button' className='custom__button'>Know More</button>
    </div>
    <div className="app__aboutus-content_knife flex__center">
      <img src={images.knife} alt="about_Knife" />
    </div>
    <div className="app__aboutus_content_history">
      <h1 className='headtext__cormorant'>Our History</h1>
      <img src={images.spoon} alt="about_spoon" className='spoon__img' />
      <p className='p__opensans'>FoodDarbar Restaurant began on june 22th, 2022 in the city of Dharan. Focusing on the goals of “Quality, Healthy, and Tradition” the company is family operation making each dish in our own kitchens from scratch.  FoodDarbar Restaurant began building its brand around the idea of delicious and authentic traditional Nepali and french food.</p>
      <button type='button' className='custom__button'>Know More</button>
    </div>
  </div>
  </div>
);

export default AboutUs;
