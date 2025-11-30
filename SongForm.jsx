// SongForm.jsx
// WEEK 16 VERSION
// This is a REAL create form with 2 inputs: title + artist.
// Users can now create songs with custom data.

import { useState } from "react";

export default function SongForm({ addSong }) {
  // ------------------------------
  // FORM STATE (controlled inputs)
  // ------------------------------
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");

  // ------------------------------
  // FORM SUBMISSION HANDLER
  // Builds a new song object and sends it to App.jsx
  // ------------------------------
  const handleSubmit = (e) => {
    e.preventDefault();

    const newSong = {
      id: Date.now(), // unique ID
      title,
      artist,
      liked: false    // new songs start unliked
    };

    // Send song to App.jsx
    addSong(newSong);

    // Reset the form
    setTitle("");
    setArtist("");
  };

  return (
    <form className="song-form" onSubmit={handleSubmit}>
      <h2>Add a New Song</h2>

      {/* Song title input */}
      <input
        type="text"
        placeholder="Song title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      {/* Artist name input */}
      <input
        type="text"
        placeholder="Artist"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        required
      />

      {/* Submit button */}
      <button type="submit">Add Song</button>
    </form>
  );
}

