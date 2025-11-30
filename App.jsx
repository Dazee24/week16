// App.jsx
// WEEK 16 VERSION
// This is the main component that stores the playlist data in state.
// It also contains the functions to create, delete, and update songs.

import { useState } from "react";
import { songsData } from "./songsData";
import SongList from "./SongList";
import SongForm from "./SongForm";

export default function App() {
  // ------------------------------
  // STATE
  // Week 15 moved test data into state
  // Week 16 continues using this state
  // ------------------------------
  const [songs, setSongs] = useState(songsData);

  // ------------------------------
  // CREATE (Week 16 - dynamic form)
  // Receives a full song object from SongForm
  // ------------------------------
  const addSong = (newSong) => {
    // Add new song to array (immutably)
    setSongs([...songs, newSong]);
  };

  // ------------------------------
  // DELETE
  // Removes one song by ID
  // ------------------------------
  const deleteSong = (id) => {
    setSongs(songs.filter((song) => song.id !== id));
  };

  // ------------------------------
  // UPDATE (Week 15)
  // Toggles the "liked" boolean
  // ------------------------------
  const toggleLike = (id) => {
    setSongs(
      songs.map((song) =>
        song.id === id ? { ...song, liked: !song.liked } : song
      )
    );
  };

  return (
    <div className="app">
      <h1>My Playlist</h1>

      {/* Pass props to SongList */}
      <SongList
        songs={songs}
        deleteSong={deleteSong}
        toggleLike={toggleLike}
      />

      {/* Week 16 dynamic CREATE form */}
      <SongForm addSong={addSong} />
    </div>
  );
}


