import React, { Component } from 'react';

export default class Input extends Component {
  constructor() {
    super();
    this.state = { input: '' };
  }

  render() {
    return (
      <div className="search-div">
        <div id="refreshButton"><i className="fa fa-refresh" aria-hidden="true"></i></div>
        <div id="addSearchIcon"><i className="fa fa-search" aria-hidden="true"></i></div>
        <input id="searchInput" type="text" placeholder="Search your streamers" />
      </div>
    );
  }
}
