import logo from "./logo.png";
import "./App.css";
import UploadComponent from "./Components/UploadComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Insta Tracker!</h1>
        <p>
          This is a simple application to track who is not following you back.
        </p>
      </header>
      <UploadComponent></UploadComponent>
    </div>
  );
}

export default App;
