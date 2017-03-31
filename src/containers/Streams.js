import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StreamsPlaceholder } from './StreamsPlaceholder';
import StreamsConstructor from '../constructors/StreamsConstructor';

class Streams extends Component {
  constructor(props) {
    super(props);
    this.transferFocus = this.transferFocus.bind(this);
    this.displayFilter = this.displayFilter.bind(this);
  }

//Transfers focus to imput when clicking add new streamer
  transferFocus() {
    document.getElementById('searchInput').focus();
  }

//Only streamers matching input will be displayed
  displayFilter(streamer) {
    const { streamers, input } = this.props;
    const regex = new RegExp(input, 'gi');
    //If the streamer has been deleted and reducer_status has not been run again,
    //ignore the streamer
    if (!streamers[streamer]) return;
    if (streamers[streamer].game) {
      return streamers[streamer].name.match(regex) ||
      streamers[streamer].game.match(regex);
    } else {
      return streamers[streamer].name.match(regex);
    }
  }

  render() {

    const { online, offline } = this.props.status;
    const hasStreamers = Object.keys(this.props.streamers).length > 0

    return (
      <div className={(this.props.inputMatches) ? 'streams-input-matches' : ''}>
        <div id="loading-div">
          <div className="loader"></div>
        </div>

        <div className="online-streams">
          {online
            .filter(this.displayFilter)
            .map((streamer, index) =>
            <StreamsConstructor
              input={this.props.input}
              streamers={this.props.streamers}
              isOnline={true}
              key={this.props.streamers[streamer]._id}
              name={streamer}
            />
          )}
        </div>

        <div className="offline-streams">
          {(hasStreamers === true)
            ?
            offline
            .filter(this.displayFilter)
            .map((streamer, index) =>
              <StreamsConstructor
                input={this.props.input}
                streamers={this.props.streamers}
                isOnline={false}
                key={this.props.streamers[streamer]._id}
                name={streamer}

              />
            )
            :
            <StreamsPlaceholder />
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    streamers: state.streamers,
    status: state.status,
    input: state.input,
    inputMatches: state.inputMatches
  };
}

export default connect(mapStateToProps)(Streams);
