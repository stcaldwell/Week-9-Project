import React, { Component } from "react";

class PlayListItem extends Component {
  render () {
    let cards = this.props.songs.map(song => {
      return (
        <div className="row">
          <div className="col-sm playListItem">
            <div className="card">
              <div className="card-block" key={song.id}>
                <p className="card-text">
                  User Name: {song.userName}
                </p>
                <p className="card-text">
                  Artist/Band/Group: {song.songArtist}
                </p>
                <p className="card-text">
                  Song Title: {song.songTitle}
                </p>
                <p className="card-text">
                  Notes on the Song: {song.songNotes}
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        {cards}
      </div>
    );
  }
}

export default PlayListItem;
