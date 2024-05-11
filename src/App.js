import logo from './Images/logo.png';
import './App.css';
import Webdev from './Components/Webdev';
import About from './Components/About';
import Cloud from './Components/Cloud';
import Cards from './Components/Cards';
import Digmark from './Components/Digmark';
import Hire from './Components/Hire';

function App() {
  return (
    <>
    <div className='container-fluid'>
      <div className='row'>
      <div className='col-md-8'>
        <img src={logo} className='img'/>
      </div>
      <div className='col-md-4 listdec'>
        <ul>
          <li style={{color:"orange"}}>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      </div>
      <hr className='hrdec'/>
      
      <Webdev/>
      <About/>
    
      <center><p style={{color:'orange',marginTop:50}}>What We Do?</p>
      <h2>We Provide Best Customer Solutions</h2>
      </center>
      <Cards/>
      <br/><br/>
      <Cloud/>
      <br/><br/>
      <Digmark/>
      <br/>
      <br/>
      <br/>
      <Hire/>
      </div>
    </>
  );
}

export default App;
