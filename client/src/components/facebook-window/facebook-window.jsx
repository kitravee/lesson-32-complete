import React from 'react';

import useScript from './hooks/facebook-script.js';
import './facebook-window.css';
const FacebookWindow = (props) => {
  useScript(
    'https://connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v7.0&appId=871449966679356&autoLogAppEvents=1',
  );
  return (
    <div
      className='fb-page window-box'
      data-href='https://www.facebook.com/Kitshop-106813497765803/?modal=admin_todo_tour'
      data-tabs='timeline'
      data-width='500'
      data-height=''
      data-small-header='false'
      data-adapt-container-width='true'
      data-hide-cover='false'
      data-show-facepile='true'
    >
      <blockquote
        cite='https://www.facebook.com/Kitshop-106813497765803/?modal=admin_todo_tour'
        className='fb-xfbml-parse-ignore'
      >
        <a
          className='content-center'
          href='https://www.facebook.com/Kitshop-106813497765803/?modal=admin_todo_tour'
        >
          Kitshop is Loadding ...
        </a>
      </blockquote>
    </div>
  );
  // rest of your component
};

export default FacebookWindow;
