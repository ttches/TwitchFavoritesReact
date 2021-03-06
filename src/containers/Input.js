import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { ROOT_URL, API_KEY, addStreamer,
  updateInput, sortStreamersStatus,
  deleteStreamer, inputMatchesStreamer} from '../actions/index.js';

class Input extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleDeleteStreamer = this.handleDeleteStreamer.bind(this);
    this.handleAddStreamer = this.handleAddStreamer.bind(this);
    this.doesInputMatchesStreamer = this.doesInputMatchesStreamer.bind(this);
    this.sortOnline = this.sortOnline.bind(this);
  }

  handleInputChange(e) {
    this.props.updateInput(e.target.value)
    this.doesInputMatchesStreamer(e.target.value);
  }

  handleKeyDown(e) {
    if (e.keyCode !== 13) return;
    e.preventDefault();
    if (this.props.inputMatches) {
      //console.log('matched');
      this.handleDeleteStreamer();
    } else {
      this.handleAddStreamer();
    }
  }

  handleDeleteStreamer() {
    const input = this.props.input.toLowerCase();
    this.props.deleteStreamer(input);
    this.props.updateInput('');
    this.props.inputMatchesStreamer(false);
  }

  handleAddStreamer() {
    const input = this.props.input.toLowerCase();
    this.props.addStreamer(input)
    .then(() => {
      //console.log(this.props.streamers);
      this.props.updateInput('');
      this.sortOnline();
    });
  }

  doesInputMatchesStreamer(input) {
    input = input.toLowerCase();
    for (let streamer of Object.keys(this.props.streamers)) {
      if (streamer === input) {
        //console.log('matched');
        this.props.inputMatchesStreamer(true);
        return;
      }
    }
    this.props.inputMatchesStreamer(false);
  }

  sortOnline() {
    const streamerArr = Object.keys(this.props.streamers).sort((a, b) =>  a > b);
    const streamerList = streamerArr.join(',');
    //console.log(streamerList);
    let  [onlineStreamers, offlineStreamers] = [ [], [] ];

    //get list of IDs of who is online, onlineIDs
    const request = axios
    .get(`${ROOT_URL}streams/${API_KEY}&channel=${streamerList}`)
    .then((response) => {
      const onlineIDs = response.data.streams.map((streamer) =>  {
        return streamer.channel._id
      });
      //console.log(response.data.streams, onlineIDs);
      //compare streamer IDs to onlineIDs to sort on and offline
      streamerArr.forEach((streamer) => {
        //console.log(this.props.streamers[streamer]._id);
        if (onlineIDs.indexOf(this.props.streamers[streamer]._id) !== -1) {
           onlineStreamers.push(streamer);
        } else {
          //console.log(onlineIDs.indexOf(this.props.streamers[streamer]._id));
          offlineStreamers.push(streamer);
        }
      });
      //console.log(onlineStreamers, offlineStreamers);
      this.props.sortStreamersStatus([onlineStreamers, offlineStreamers]);
    });
  }

  componentWillMount(){
    this.sortOnline();
    //console.log(this.props.streamers);
  }


  render() {
    return (
      <div className="search-div">
        <div id="refreshButton" onClick={this.sortOnline}>
          <i className="fa fa-refresh" aria-hidden="true"></i>
        </div>
        <div className="input-container">
          <div id="addSearchIcon"><p><i className="fa fa-search" aria-hidden="true"></i></p></div>
          <input id="searchInput" type="text" placeholder="Add, filter, or delete a streamer"
            onKeyDown={this.handleKeyDown}
            autoComplete="new-password"
            value={this.props.input}
            onChange={this.handleInputChange}
          />

            <button id="addStreamerIcon"
              style={{display: `${((!this.props.inputMatches) && (this.props.input !== '')) ?
                'block' : 'none'}`}}
              onClick={this.handleAddStreamer}>

              <p><i className="fa fa-plus-circle" aria-hidden="true"></i></p>
            </button>

            <button id="removeStreamerIcon"
              style={{display: `${(this.props.inputMatches) ? 'block' : 'none' }`}}
              onClick={this.handleDeleteStreamer}>

              <p><i className="fa fa-minus-circle" aria-hidden="true"></i></p>
            </button>

          </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    streamers: state.streamers,
    input: state.input,
    inputMatches: state.inputMatches
   };
}

Input.propTypes = {
  addStreamer: React.PropTypes.func,
  deleteStreamer: React.PropTypes.func,
  input: React.PropTypes.string,
  inputMatches: React.PropTypes.bool,
  inputMatchesStreamer: React.PropTypes.func,
  sortStreamersStatus: React.PropTypes.func,
  streamers: React.PropTypes.object,
  updateInput: React.PropTypes.func,
}

export default connect(mapStateToProps,
  { addStreamer, sortStreamersStatus, updateInput, deleteStreamer,
    inputMatchesStreamer })(Input);
