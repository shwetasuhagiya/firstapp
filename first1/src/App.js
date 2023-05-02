import logo from './logo.svg';
import './App.css';
import './media.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Home from './Home';
import Slider from './Slider';
import Sec1 from './Sec1';
import Sec2 from './Sec2';
import Sec3 from './Sec3';
import Sec4 from './Sec4';


function App() {
  return (

    <>
      <Home/>
      <Slider/>
      <Sec1/>
      <Sec2/>
      <Sec3/>
      <Sec4/>
    </>
  );
}

export default App;

