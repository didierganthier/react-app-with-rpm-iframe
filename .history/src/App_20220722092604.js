import logo from './logo.svg';
import './App.css';

function App() {

  const subdomain = 'hallway' // See section about becoming a partner
  const iFrameRef = useRef(null)
  const [avatarUrl, setAvatarUrl] = useState('')
  const [showIFrame, setShowIFrame] = useState(true)
  
  useEffect(() => {
    let iFrame = iFrameRef.current
    if(iFrame) {
       iFrame.src = `https://${subdomain}.readyplayer.me/avatar?frameApi`
    }
  })
  useEffect(() => {
    window.addEventListener('message', subscribe)
    document.addEventListener('message', subscribe)
    return () => {
      window.removeEventListener('message', subscribe)
      document.removeEventListener('message', subscribe)
    }

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

export default App;
