import React, { useState, useEffect } from "react";

const PlayListComponent = () => {
  const [playList, setPlayList] = useState([]);

  useEffect(() => {
    fetch("../../../../db.json")
      .then((response) => response.json())
      .then((json) => {
        setPlayList(json.playlists);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section className="playlist layout__playlist">
      <div className="heading">Playlists</div>
      <div className="playlist__cards">
        {playList.map((playCard) => (
          <section className="playlist__card" key={playCard.id}>
            <div className="playlist__card-coverarea">
              <img className="playlist__card-img" src="https://unsplash.it/600/400"/>
            </div>
            <div className="playlist__card-title">{playCard.name}</div>
            <div className="playlist__card-description">{playCard.description}</div>
          </section>
        ))}
      </div>
      <div className="heading">Tracklist</div>
    </section>
  );
};

export default PlayListComponent;
