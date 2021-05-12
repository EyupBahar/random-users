import email from "./assets/email.svg";
import location from "./assets/location.svg";
import phone from "./assets/phone.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="pic">{/* <img src= {} alt="" /> */}</div>
      <div className="logo">
        <img src={email} className="App-logo" alt="logo" />
      </div>
      <div>
        <p>Email adress</p>
      </div>
      <div className="logo">
        <img src={location} className="App-logo" alt="logo" />
      </div>
      <div>
        <p>Location</p>
      </div>
      <div className="logo">
        <img src={phone} className="App-logo" alt="logo" />
      </div>
      <div>
        <p>phone number</p>
      </div>
    </div>
  );
}

export default App;
