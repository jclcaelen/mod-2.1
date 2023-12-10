import './App.css';
import logo from './IMG_8312.PNG';

function App() {
  return (
    <div className="App">
      <img src={logo} alt="Profile Pic" />
      <h1>Caelen Lin</h1>
      <h2>Just another Human</h2>
      <div className='Body-div'>
        <h3>About Me</h3>
        <p>I'm seriously trying to learn how to be a software developer. It is a tough yet fulfilling journey, especially if I am able to conquer all the assignments.</p>
      </div>
      <div className='Body-div'>
        <h3>Contact Me</h3>
        <p>Email: X@gmail.com | LinkedIn: https://www.linkedin.com/X</p>
      </div>
    </div>
  );
}

export default App;
