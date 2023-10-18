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
  }, []); // Empty dependency array to ensure useEffect runs only once

  return (
    <section className="playlist layout__playlist">
      <div className="heading">Playlists</div>
      <div className="playlist__cards">
        {playList.map((playCard, index) => (
          <section className="playlist__card" key={index}>
            <div className="playlist__card-coverarea">
              <img className="playlist__card-img" src={playCard.picture} alt="Playlist Cover" />
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
