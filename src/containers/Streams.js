import React, { Component } from 'react';

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
        <div className="offline-streams">
          <div className="streams-placeholder"
               onClick={this.transferFocus}>
            <i className="fa fa-plus-circle" aria-hidden="true"></i>
              Click to add Streamers
          </div>
        </div>
      );
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
