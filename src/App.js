import React, { Component } from 'react';
import './index.css';

import Nav from './containers/Nav';
import { Tabs } from './containers/Tabs';
import Input from './containers/Input';

class App extends Component {

  render() {
    return (
      <div>
        <Nav />
        <main>
          <Tabs />
          <Input />
        </main>
      </div>
    );
  }
}

export default App;
