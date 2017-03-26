import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { input: '' };
  }

  handleInputChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const request = axios.get(`https://api.twitch.tv/kraken/channels/chu8?client_id=i30wq60kvle7tjxaye4s84w760olue`)
    .then((response) => {
      console.log(response);
    })
  }

  render() {
    return (
      <div className="search-div">
        <div id="refreshButton"><i className="fa fa-refresh" aria-hidden="true"></i></div>
        <form onSubmit={this.handleSubmit}>
          <div className="input-container">
            <div id="addSearchIcon"><p><i className="fa fa-search" aria-hidden="true"></i></p></div>
            <input id="searchInput" type="text" placeholder="Search your streamers"
              value={this.state.input}
              onChange={this.handleInputChange}
              onSubmit={() => console.log('test')}/>
          </div>
        </form>
      </div>
    );
  }
}
