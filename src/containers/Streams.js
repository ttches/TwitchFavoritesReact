import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StreamsPlaceholder } from './StreamsPlaceholder';
import StreamsConstructor from '../constructors/StreamsConstructor';

class Streams extends Component {
  constructor(props) {
    super(props);
    this.transferFocus = this.transferFocus.bind(this);
  }

  transferFocus() {
    document.getElementById('searchInput').focus();
  }

  render() {

    const { online, offline } = this.props.status;
    const hasStreamers = Object.keys(this.props.streamers).length > 0

    return (
      <div>
        <div id="loading-div">
          <div className="loader"></div>
        </div>

        <div className="online-streams">
          {online.map((streamer, index) =>
            <StreamsConstructor
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
            offline.map((streamer, index) =>
              <StreamsConstructor
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
  return { streamers: state.streamers, status: state.status };
}

export default connect(mapStateToProps)(Streams);
