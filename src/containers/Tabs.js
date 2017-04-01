import React from 'react';

export const Tabs = () => {

  function toggleArrowClass(e) {
    document.querySelector('#online-tab').classList.remove('arrow-box');
    document.querySelector('#offline-tab').classList.remove('arrow-box');
    document.querySelector('#all-tab').classList.remove('arrow-box');
    e.target.closest('div').classList.add('arrow-box');
  }

  function hideOnline(e) {
    toggleArrowClass(e)
    document.querySelector('.online-streams').classList.add('hidden');
    document.querySelector('.offline-streams').classList.remove('hidden');
  }
  function hideOffline(e) {
    toggleArrowClass(e)
    document.querySelector('.online-streams').classList.remove('hidden');
    document.querySelector('.offline-streams').classList.add('hidden');
  }
  function showAll(e) {
    toggleArrowClass(e)
    document.querySelector('.online-streams').classList.remove('hidden');
    document.querySelector('.offline-streams').classList.remove('hidden');
  }

  return (
    <div id="tab-container">
      <div id="all-tab" className="arrow-box tab-box" onClick={showAll}>
        <h2><strong>All</strong></h2>
      </div>

      <div id="online-tab" className="tab-box" onClick={hideOffline}>
        <h2><strong>Online</strong></h2>
      </div>

      <div id="offline-tab" className="tab-box" onClick={hideOnline}>
        <h2><strong>Offline</strong></h2>
      </div>
    </div>
  );
}
