// SongList.jsx
// Displays all songs in a list.
// Each song shows title, artist, a toggle button, and a delete button.

export default function SongList({ songs, deleteSong, toggleLike }) {
  return (
    <div className="song-list">
      {songs.map((song) => (
        <div className="song-item" key={song.id}>
          <div>
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
          </div>

          <div>
            {/* Like toggle (Week 15 update feature) */}
            <button className="like-btn" onClick={() => toggleLike(song.id)}>
              {song.liked ? "💖 Unlike" : "🤍 Like"}
            </button>

            {/* Delete button */}
            <button className="delete-btn" onClick={() => deleteSong(song.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}


