import React, { Component } from 'react';
import { FacebookProvider, Page } from 'react-facebook';
import './facebook-page.css';

export default class FacebookPage extends Component {
  render() {
    return (
      <div className='window-box'>
        <FacebookProvider appId='990485818037987'>
          <Page
            href='https://www.facebook.com/Kitshop-106813497765803'
            tabs='timeline'
          />
        </FacebookProvider>
      </div>
    );
  }
}
