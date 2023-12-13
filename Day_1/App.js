import logo from './logo.svg';
import './App.css';
import LoginForm from './Components/LoginForm/LoginForm';
import SignUpForm from './Components/SignUpForm/SignUpForm';
import backgroundVideo from './Components/Assets/Airway.mp4';

function App() {
  return (
    <div>
      <video src={backgroundVideo} autoPlay loop muted className='background-video'></video>
      {/* <LoginForm/> */}
      <SignUpForm/>
    </div>
  );
}

export default App;
