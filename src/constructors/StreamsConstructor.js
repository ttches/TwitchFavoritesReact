import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StreamsPlaceholder } from '../containers/StreamsPlaceholder';

export default class StreamsConstructor extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { streamers, name, isOnline } = this.props;
    const streamer = streamers[name];
    console.log(streamer);

    return (
      <div  className={(isOnline) ? 'online-stream' : 'offline-stream'}
            id={streamer._id}
            name={streamer.name} >
        <div className={'stream-logo'}>
          <a href={streamer.url}>
            <img alt='' src={streamer.logo || 'http://vignette3.wikia.nocookie.net/logopedia/images/8/83/Twitch_icon.svg/revision/latest?cb=20140727180700'}
            />
          </a>
        </div>
        <div className='stream-basic-info'>
          <div className={(isOnline) ? 'online-light' : ''}></div>
          <a href={streamer.url}>
            <h1><strong>{streamer.display_name}</strong></h1>
            <p>{streamer.game}</p>
          </a>
        </div>
      </div>
    )
  }
}
