import React from 'react';

import './Chef.css';
import { SubHeading } from '../../components';
import {images} from '../../constants'
const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">I started cooking professionally because I had hit a point in</p>
        </div>
        <p className="p__opensans"> my life where I was just sort of lost and cooking was something I had always loved and so I grabbed onto it. </p>
      </div>

      <div className="app__chef-sign">
        <p>Mahesh bhatta</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>

);

export default Chef;
