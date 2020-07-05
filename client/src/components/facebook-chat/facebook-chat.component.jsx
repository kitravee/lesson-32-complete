import React, { Component } from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';

export default class FacebookChat extends Component {
  render() {
    return (
      <FacebookProvider appId='990485818037987' chatSupport>
        <CustomChat pageId='106813497765803' minimized={false} />
      </FacebookProvider>
    );
  }
}
