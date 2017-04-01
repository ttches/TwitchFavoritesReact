import React, { Component } from 'react';
import './index.css';

import Nav from './containers/Nav';
import { Tabs } from './containers/Tabs';
import Input from './containers/Input';
import Streams from './containers/Streams';

class App extends Component {

  render() {
    return (
      <div>
        <img id='twitch-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Twitch_BlackLogo.svg/800px-Twitch_BlackLogo.svg.png'
        alt='' />
        <main>
          <Tabs />
          <Input />
          <Streams />
        </main>
      </div>
    );
  }
}

export default App;
