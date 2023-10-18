import React from 'react';
import "../../../scss/clientlib.main.scss";
import PlayerComponent from '../PlayerComponent/PlayerComponent';
import PlayListComponent from '../PlayListComponent/PlayListComponent'
import TrackListComponent from '../TrackListComponent/TrackListComponent';

class RootComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<>
    <main className="layout">
      <div className="layout__main-wrapper">
        <aside className="sidebar layout__sidebar">
          <div className="heading">Sputofy</div>
        </aside>
        <div className="layout__content">
          <PlayListComponent />
          <TrackListComponent />
        </div>
      </div>
      <section class="player layout__player">
      <button id="play-icon">
          Play
        </button>
        <div id="audio-player-container">

          <span id="current-time" className="time">
            0:00
          </span>
          <input type="range" id="seek-slider" max={100} defaultValue={0} />
          <span id="duration" className="time">
            0:00
          </span>
        </div>
      </section>
    </main></>);
  }
}

export default RootComponent;