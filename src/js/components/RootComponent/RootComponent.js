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
          <img className='sidebar__img' src='https://media1.giphy.com/media/l0HU5bbgdW6qzJsmQ/giphy.gif'/>
        </aside>
        <div className="layout__content">
          <PlayListComponent />
          <TrackListComponent />
        </div>
      </div>
      <PlayerComponent />
    </main></>);
  }
}

export default RootComponent;