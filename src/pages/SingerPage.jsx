
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { singers } from "../data/singers";

function SingerPage() {
  const { singerId } = useParams();

  const singer = singers.find(
    (item) => item.id === singerId
  );

  if (!singer) {
    return (
      <div className="error-page">
        <h2>Singer Not Found</h2>
        <p>Sorry, this singer does not exist.</p>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return <LyricsGame key={singerId} singer={singer} />;
}

function LyricsGame({ singer }) {
  const [input, setInput] = useState("");

  const search = input.trim().toLowerCase();

  const matchingLines = search
    ? singer.lines.filter((line) =>
        line.toLowerCase().includes(search)
      )
    : [];

  return (
    <div className="lyrics-container">
      <h2 className="song-title">
        {singer.name} — {singer.song}
      </h2>

      <input
        type="text"
        className="lyrics-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type the lyrics here..."
        autoComplete="off"
      />

      <div className="lyrics-display">
        {matchingLines.map((line, index) => (
          <div
            key={index}
            className="lyric-line"
            style={{ backgroundColor: singer.color }}
          >
            {line}
          </div>
        ))}

        {search && matchingLines.length === 0 && (
          <p className="hint">
            No matching lyrics found. Try another word!
          </p>
        )}

        {!search && (
          <p className="hint">
            Start typing to find matching lyrics.
          </p>
        )}
      </div>

      <Link to="/" className="home-link">
        ← Back to Home
      </Link>
    </div>
  );
}

export default SingerPage;
