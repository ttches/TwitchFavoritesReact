import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { ROOT_URL, API_KEY, addStreamer,
  updateInput, sortStreamersStatus} from '../actions/index.js';

class Input extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sortOnline = this.sortOnline.bind(this);
  }

  handleInputChange(e) {
    this.props.updateInput(e.target.value)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addStreamer(this.props.input)
    .then(() => {
      console.log(this.props.streamers);
      this.props.updateInput('');
      this.sortOnline();
    })
  }

  sortOnline() {
    const streamerArr = Object.keys(this.props.streamers).sort((a, b) =>  a > b);
    const streamerList = streamerArr.join(',');
    console.log(streamerList);
    let  [onlineStreamers, offlineStreamers] = [ [], [] ];

    //get list of IDs of who is online, onlineIDs
    const request = axios
    .get(`${ROOT_URL}streams/${API_KEY}&channel=${streamerList}`)
    .then((response) => {
      const onlineIDs = response.data.streams.map((streamer) =>  {
        return streamer.channel._id
      });
      console.log(response.data.streams, onlineIDs);
      //compare streamer IDs to onlineIDs to sort on and offline
      streamerArr.forEach((streamer) => {
        console.log(this.props.streamers[streamer]._id);
        if (onlineIDs.indexOf(this.props.streamers[streamer]._id) !== -1) {
           onlineStreamers.push(streamer);
        } else {
          console.log(onlineIDs.indexOf(this.props.streamers[streamer]._id));
          offlineStreamers.push(streamer);
        }
      });
      console.log(onlineStreamers, offlineStreamers);
      console.log(this);
      this.props.sortStreamersStatus([onlineStreamers, offlineStreamers]);
    });
  }

  componentWillMount(){
    this.sortOnline();  //eventually make this a refresh
  }


  render() {
    return (
      <div className="search-div">
        <div id="refreshButton"><i className="fa fa-refresh" aria-hidden="true"></i></div>
        <form onSubmit={this.handleSubmit}>
          <div className="input-container">
            <div id="addSearchIcon"><p><i className="fa fa-search" aria-hidden="true"></i></p></div>
            <input id="searchInput" type="text" placeholder="Search your streamers"
              value={this.props.input}
              onChange={this.handleInputChange}
              onSubmit={() => console.log('test')}/>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    streamers: state.streamers,
    input: state.input
   };
}

export default connect(mapStateToProps,
  { addStreamer, sortStreamersStatus, updateInput })(Input);
