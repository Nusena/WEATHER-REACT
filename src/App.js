import SearchEngine from "./SearchEngine";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <SearchEngine />
          <small>
            <a
              href="https://github.com/Nusena/WEATHER-REACT.git"
              target="_blank"
              rel="noreferrer"
            >
              Open source code{" "}
            </a>
            by Hanna
          </small>
        </div>
      </div>
    </div>
  );
}

export default App;