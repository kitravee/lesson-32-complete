import React from 'react';
import FacebookWindow from '../../components/facebook-window/facebook-window';
import './contact-page.css';
const ContactPage = () => (
  <div>
    <h1 className='content-h1'>3 Contributors Kitravee, Yihua, buihuyhung</h1>
    <blockquote className='blockquote content-h3'>
      Give credit to to ZTM Communuty and 3 contributors{' '}
      <a
        href='https://github.com/kitravee'
        data-tool-tip='You can call me "Trongtong"'
        className='tooltip'
      >
        Kitravee
      </a>
      | YIHUA | BUIHUYHUNG
    </blockquote>
    <FacebookWindow />
  </div>
);
export default ContactPage;
