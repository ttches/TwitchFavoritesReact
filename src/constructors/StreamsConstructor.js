import React, { Component } from 'react';

export default class StreamsConstructor extends Component {
  constructor(props) {
    super(props);
    this.highlight = this.highlight.bind(this);
  }

  //Highlights streamer's display info by input
  highlight(value) {
    const input = this.props.input.toLowerCase();
    if (input === '') {
      return value;
    }
    const regex = new RegExp(input, 'gi');
    return value.replace(regex,
      `<span class='highlight'>$&</span>`);
  }

  render() {

    const { streamers, name, isOnline } = this.props;
    const streamer = streamers[name];

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
            <h1><strong dangerouslySetInnerHTML={{
              __html: this.highlight(streamer.display_name)
            }} />
            </h1>
            <p dangerouslySetInnerHTML={(streamer.game)
              ?
                {
                  __html: this.highlight(streamer.game)
                }
              :
                {
                  __html: ''
                }} />
            <p className='streamer-status'>{streamer.status}</p>
          </a>
        </div>
        <div className="stream-banner"
          style={{backgroundImage: `url(${streamer.profile_banner ||
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Twitch_BlackLogo.svg/800px-Twitch_BlackLogo.svg.png'})`}}>
        </div>
      </div>
    )
  }
}

StreamsConstructor.propTypes = {
  input: React.PropTypes.string,
  isOnline: React.PropTypes.bool,
  name: React.PropTypes.string,
  streamers: React.PropTypes.object
};
