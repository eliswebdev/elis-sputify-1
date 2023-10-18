import React, {useEffect} from 'react';



const PlayListComponent = () => {
  let playList = [];
  useEffect(()=>{
    fetch('../../../../db.json')
    .then(response => response.json())
    .then(json => playList.push(json.playlists))
  })
  console.log(playList)
    return (
        <section className="playlist layout__playlist">
            <div className="heading">{playList} - Playlists</div>
            <div className="playlist__cards">
              <section className="playlist__card">
                <div className="playlist__card-coverarea">
                  <img className="playlist__card-img" src= "https://unsplash.it/600/400" />
                </div>
                <div className="playlist__card-title">playlist title</div>
              </section>
              <section className="playlist__card">
                <div className="playlist__card-coverarea">
                  <img className="playlist__card-img" src= "https://unsplash.it/600/400" />
                </div>
                <div className="playlist__card-title">playlist title</div>
              </section>
              <section className="playlist__card">
                <div className="playlist__card-coverarea">
                  <img className="playlist__card-img" src= "https://unsplash.it/600/400" />
                </div>
                <div className="playlist__card-title">playlist title</div>
              </section>
              <section className="playlist__card">
                <div className="playlist__card-coverarea">
                  <img className="playlist__card-img" src= "https://unsplash.it/600/400" />
                </div>
                <div className="playlist__card-title">playlist title</div>
              </section>
              <section className="playlist__card">
                <div className="playlist__card-coverarea">
                  <img className="playlist__card-img" src= "https://unsplash.it/600/400" />
                </div>
                <div className="playlist__card-title">playlist title</div>
              </section>
              <section className="playlist__card">
                <div className="playlist__card-coverarea">
                  <img className="playlist__card-img" src= "https://unsplash.it/600/400" />
                </div>
                <div className="playlist__card-title">playlist title</div>
              </section>
              <section className="playlist__card">
                <div className="playlist__card-coverarea">
                  <img className="playlist__card-img" src= "https://unsplash.it/600/400" />
                </div>
                <div className="playlist__card-title">playlist title</div>
              </section>
              <section className="playlist__card">
                <div className="playlist__card-coverarea">
                  <img className="playlist__card-img" src= "https://unsplash.it/600/400" />
                </div>
                <div className="playlist__card-title">playlist title</div>
              </section>
              <section className="playlist__card">
                <div className="playlist__card-coverarea">
                  <img className="playlist__card-img" src= "https://unsplash.it/600/400" />
                </div>
                <div className="playlist__card-title">playlist title</div>
              </section>
              <section className="playlist__card">
                <div className="playlist__card-coverarea">
                  <img className="playlist__card-img" src= "https://unsplash.it/600/400" />
                </div>
                <div className="playlist__card-title">playlist title</div>
              </section>
            </div>
            <div className="heading">Tracklist</div>
          </section>
    );
}

export default PlayListComponent;