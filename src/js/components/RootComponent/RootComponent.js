import React from 'react';
import "../../../scss/clientlib.main.scss";

class RootComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<>
    <main class="layout">
      <div class="layout__main-wrapper">
        <aside class="sidebar layout__sidebar">
          <div class="heading">Sputofy</div>
        </aside>
        <div class="layout__content">
          <section class="playlist layout__playlist">
            <div class="heading">Playlists</div>
            <div class="playlist__cards">
              <section class="playlist__card">
                <div class="playlist__card-coverarea">
                  <img class="playlist__card-img" src= "https://unsplash.it/600/400" />
                </div>
                <div class="playlist__card-title">playlist title</div>
              </section>
              <section class="playlist__card">
                <div class="playlist__card-coverarea">
                  <img class="playlist__card-img" src= "https://unsplash.it/600/400" />
                </div>
                <div class="playlist__card-title">playlist title</div>
              </section>
              <section class="playlist__card">
                <div class="playlist__card-coverarea">
                  <img class="playlist__card-img" src= "https://unsplash.it/600/400" />
                </div>
                <div class="playlist__card-title">playlist title</div>
              </section>
              <section class="playlist__card">
                <div class="playlist__card-coverarea">
                  <img class="playlist__card-img" src= "https://unsplash.it/600/400" />
                </div>
                <div class="playlist__card-title">playlist title</div>
              </section>
              <section class="playlist__card">
                <div class="playlist__card-coverarea">
                  <img class="playlist__card-img" src= "https://unsplash.it/600/400" />
                </div>
                <div class="playlist__card-title">playlist title</div>
              </section>
              <section class="playlist__card">
                <div class="playlist__card-coverarea">
                  <img class="playlist__card-img" src= "https://unsplash.it/600/400" />
                </div>
                <div class="playlist__card-title">playlist title</div>
              </section>
              <section class="playlist__card">
                <div class="playlist__card-coverarea">
                  <img class="playlist__card-img" src= "https://unsplash.it/600/400" />
                </div>
                <div class="playlist__card-title">playlist title</div>
              </section>
              <section class="playlist__card">
                <div class="playlist__card-coverarea">
                  <img class="playlist__card-img" src= "https://unsplash.it/600/400" />
                </div>
                <div class="playlist__card-title">playlist title</div>
              </section>
              <section class="playlist__card">
                <div class="playlist__card-coverarea">
                  <img class="playlist__card-img" src= "https://unsplash.it/600/400" />
                </div>
                <div class="playlist__card-title">playlist title</div>
              </section>
              <section class="playlist__card">
                <div class="playlist__card-coverarea">
                  <img class="playlist__card-img" src= "https://unsplash.it/600/400" />
                </div>
                <div class="playlist__card-title">playlist title</div>
              </section>
            </div>
            <div class="heading">Tracklist</div>
          </section>
          <section class="trackslist layout__trackslist">
            <table class="trackslist__table">
              <tr>
                <th>Title</th>
                <th>Album</th>
                <th>Duration</th>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>4:55</td>
              </tr>
              <tr>
                <td>Dolor sit amet</td>
                <td>Francisco Chang</td>
                <td>3:24</td>
              </tr>
              <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>4:55</td>
              </tr>
            <tr>
              <td>Dolor sit amet</td>
              <td>Francisco Chang</td>
              <td>3:24</td>
            </tr>
            <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>4:55</td>
            </tr>
          <tr>
            <td>Dolor sit amet</td>
            <td>Francisco Chang</td>
            <td>3:24</td>
          </tr>
          <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>4:55</td>
          </tr>
        <tr>
          <td>Dolor sit amet</td>
          <td>Francisco Chang</td>
          <td>3:24</td>
        </tr>
        <tr>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td>4:55</td>
        </tr>
      <tr>
        <td>Dolor sit amet</td>
        <td>Francisco Chang</td>
        <td>3:24</td>
      </tr>
      <tr>
        <td>Dolor sit amet</td>
        <td>Francisco Chang</td>
        <td>3:24</td>
      </tr>
      <tr>
      <td>Alfreds Futterkiste</td>
      <td>Maria Anders</td>
      <td>4:55</td>
      </tr>
    <tr>
      <td>Dolor sit amet</td>
      <td>Francisco Chang</td>
      <td>3:24</td>
    </tr>
    <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>4:55</td>
    </tr>
    <tr>
      <td>Dolor sit amet</td>
      <td>Francisco Chang</td>
      <td>3:24</td>
    </tr>
    <tr>
      <td>Dolor sit amet</td>
      <td>Francisco Chang</td>
      <td>3:24</td>
    </tr>
    <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>4:55</td>
    </tr>
    <tr>
      <td>Dolor sit amet</td>
      <td>Francisco Chang</td>
      <td>3:24</td>
    </tr>
    <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>4:55</td>
    </tr>
    <tr>
      <td>Dolor sit amet</td>
      <td>Francisco Chang</td>
      <td>3:24</td>
    </tr>
    <tr>
      <td>Dolor sit amet</td>
      <td>Francisco Chang</td>
      <td>3:24</td>
    </tr>
    <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>4:55</td>
    </tr>
    <tr>
      <td>Dolor sit amet</td>
      <td>Francisco Chang</td>
      <td>3:24</td>
    </tr>
    <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>4:55</td>
    </tr>
    <tr>
      <td>Dolor sit amet</td>
      <td>Francisco Chang</td>
      <td>3:24</td>
    </tr>
    </table>
          </section>
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