import React, { Component } from 'react';

export const Tabs = () => {
  return (
    <div id="tab-container">
      <div id="all-tab" className="arrow-box tab-box"><h2><strong>All</strong></h2></div>
      <div id="online-tab" className="tab-box"><h2><strong>Online</strong></h2></div>
      <div id="offline-tab" className="tab-box"><h2><strong>Offline</strong></h2></div>
    </div>
  );
}
