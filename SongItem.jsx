// SongItem.jsx
// This component displays a single song.
// It also handles editing mode and deleting the song.

import { useState } from "react";

export default function SongItem({ song, deleteSong, updateSong }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedSong, setEditedSong] = useState(song);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateSong(editedSong);
    setIsEditing(false);
  };

  return (
    <li className="song-item">
      {isEditing ? (
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            value={editedSong.title}
            onChange={(e) =>
              setEditedSong({ ...editedSong, title: e.target.value })
            }
          />
          <input
            type="text"
            value={editedSong.artist}
            onChange={(e) =>
              setEditedSong({ ...editedSong, artist: e.target.value })
            }
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <>
          <span>{song.title} – {song.artist}</span>

          <div>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button className="delete" onClick={() => deleteSong(song.id)}>
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
}

