import React from 'react';

export const StreamsPlaceholder = () => {

  function transferFocus() {
    document.getElementById('searchInput').focus();
  }

  return (
      <div className="streams-placeholder"
           onClick={transferFocus}>
        <i className="fa fa-plus-circle" aria-hidden="true"></i>
          Click to add Streamers
      </div>
  );
}
