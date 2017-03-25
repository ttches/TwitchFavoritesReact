import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
    return (
      <header>
        <nav>
          <div className="nav-container">
            <img src="http://vignette4.wikia.nocookie.net/logopedia/images/2/26/Twitch_logo.svg/revision/latest/scale-to-width-down/639?cb=20140727180649" width="100px" alt=''/>
            <form>
              <div style={{position: 'relative'}}>
                <div id="addStreamIcon"><p><i className="fa fa-user-o" aria-hidden="true"></i></p></div>
                <input id="addStreamInput" type="text" placeholder="Add a streamer" />
              </div>
            </form>
          </div>
        </nav>
      </header>
    );
  }
}
