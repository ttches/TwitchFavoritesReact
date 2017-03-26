import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { ROOT_URL, API_KEY, addStreamer} from '../actions/index.js';

class Input extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sortOnline = this.sortOnline.bind(this);
    this.state = { input: '' };
  }

  handleInputChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addStreamer(this.state.input)
    .then(() => {
      console.log(this.props.streamers);
    })
  }

  sortOnline() {
    return;
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

function mapStateToProps(state) {
  return { streamers: state.streamers };
}

export default connect(mapStateToProps, { addStreamer })(Input);
