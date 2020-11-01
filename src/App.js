import logo from './logo.svg';
import './App.scss';
import { Checkbox } from '@material-ui/core';

function App() {
  return (
    <div className="PageContainer">
      <div className="CenterContainer">
        <img src={logo} className="AppLogo" alt="logo" />
        <h1>Example login screen</h1>
        <h4>Getting started with Green.</h4>
        <form className="LoginForm">
          <div className="InputContainer">
            <label className="InputTitle">Email Address</label>
            <input type="email" name="email" />
          </div>
          <div className="CheckBoxContainer">
            <Checkbox className="Checkbox" color="primary" />
            <label>Remember this device</label>
          </div>
          <button className="LoginButton">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default App;
