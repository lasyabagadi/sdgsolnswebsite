import logo from './Images/logo.png';
import './App.css';
import Webdev from './Components/Webdev';
import About from './Components/About';
import Whatwedo from './Components/Whatwedo';

function App() {
  return (
    <>
    <div className='container-fluid'>

      <div className='row'>
      <div className='col-md-4'>
        <img src={logo} className='img'/>
      </div>
      <div className='col-md-8'>
        <ul className='listdec'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <hr className='hrdec'/>
      </div>

      
        <Webdev/>
      </div>
    </>
  );
}

export default App;
