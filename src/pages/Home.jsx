function Home() {
  return (
    <div className="lyrics-container">
      <input
        type="text"
        className="lyrics-input"
        placeholder="Select a singer to start..."
        disabled
      />

      <div className="lyrics-display">
        <p className="hint">
          Choose a singer above to begin!
        </p>
      </div>
    </div>
  );
}

export default Home;
