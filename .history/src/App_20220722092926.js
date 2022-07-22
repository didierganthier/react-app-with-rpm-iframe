import React from 'react'

const App = () => {
  return (
    <div className="App">
      <div className="topBar">
        <input
          className="toggleButton"
          onClick={() => setShowIFrame(!showIFrame)}
          type="button"
          value={`${showIFrame ? 'Close': 'Open'} creator`}
        />
        <p id="avatarUrl">Avatar URL: {avatarUrl}</p>
      </div>
      <iframe
        allow="camera *; microphone *"
        className="iFrame"
        id="frame"
        ref={iFrameRef}
        style={{
          display: `${showIFrame ? 'block': 'none'}`
        }}
        title={"Ready Player Me"}
      />
    </div>
  );
}

export default App