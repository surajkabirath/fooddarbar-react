import React from 'react';
import {FiFacebook, FiInstagram,FiTwitter,FiPhone,FiMail} from 'react-icons/fi'
import { ImLocation} from 'react-icons/im'
import { FooterOverlay, Newsletter } from '../../components';
import {images} from '../../constants'
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay/>
    <Newsletter/>
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
         <h1 className="app__footer-headtext">Contact</h1>
         <p className="p__opensans"><ImLocation style={{color:'yellow'}}/> Dharan,Sunsari,Nepal</p>
         <p className="p__opensans"><FiPhone style={{color:'red'}}/> +9779810549624</p>
         <p className="p__opensans"><FiPhone style={{color:'red'}}/> +9779746649992</p>
         <p className="p__opensans"><FiMail style={{color:'red'}}/> surajkabiratah1234@gmail.com</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.fooddarbar} alt="footer-logo" />
        <p className="p__opensans">"The best way to find yourself is to lose yourself in the service of others"</p>
        <img src={images.spoon} alt="spoon" className='spoon__img' style={{marginTop:15}} />
        <div className="app__footer-links_icons">
          <a href="https://www.facebook.com/suraj.kabirath/"><FiFacebook className='facebook'/></a>
          <a href="https://www.instagram.com/_suraj_kabirath_/"><FiInstagram className='instagram'/></a>
          <a href="https://twitter.com/i/flow/login"><FiTwitter  className='twitter'/></a>
        </div>
      </div>
      <div className="app__footer-links_work">
      <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2022 FoodDarbar.All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
