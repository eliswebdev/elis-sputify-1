import React from 'react';

const PlayerComponent = () => {
  return (
    <section className="player layout__player">
      <div className='player__details'>
        Artist name - Title Track
      </div>
      <div className='player__controller'>
        <button className="player__btn-play">
          Play
        </button>
        <button className="player__btn-stop">
          stop
        </button>
      </div>
      <div className="player__progress">
        <span className="player__current-time">
          0:00
        </span>
        <input type="range" max={100} defaultValue={0} />
        <span className="player__duration">
          0:00
        </span>
      </div>
    </section>
  )
}

export default PlayerComponent;