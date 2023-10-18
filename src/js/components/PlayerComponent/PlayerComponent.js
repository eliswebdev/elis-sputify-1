import React from 'react';

const PlayerComponent = () => {
        return(
            <section className="player layout__player">
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
            )
}

export default PlayerComponent;