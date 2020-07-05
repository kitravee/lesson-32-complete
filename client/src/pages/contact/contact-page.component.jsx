import React from 'react';
// import FacebookWindow from '../../components/facebook-window/facebook-window';
import FacebookPage from '../../components/facebook-page/facebook-page.component';
import './contact-page.css';
const ContactPage = () => (
  <div>
    <h1 className='content-h1'>Thnak you for support us</h1>
    <blockquote className='blockquote content-h3'>
      Give credit to ZTM Communuty and 3 contributors{' '}
      <a
        href='https://github.com/kitravee'
        data-tool-tip='You can call me "Trongtong"'
        className='tooltip'
      >
        KITRAVEE
      </a>
      | YIHUA | BUIHUYHUNG
    </blockquote>
    <FacebookPage />
  </div>
);
export default ContactPage;
