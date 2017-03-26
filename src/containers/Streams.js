import React, { Component } from 'react';
import { StreamsPlaceholder } from './StreamsPlaceholder';

export default class Streams extends Component {
  constructor() {
    super();
    this.transferFocus = this.transferFocus.bind(this);
  }
  transferFocus() {
    document.getElementById('searchInput').focus();
  }
  render() {
    const noStreams = true;
    
    if (noStreams) {
      return (
        <StreamsPlaceholder />
      )
    }


    return (
      <div>
        <div id="loading-div">
          <div className="loader"></div>
        </div>

        <div className="online-streams">
        </div>

        <div className="offline-streams">
        </div>
      </div>
    )
  }
}
