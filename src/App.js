import './App.css';
//import StateEx from './Components/StateEx'
import Home from './Projects/Home'
import ContactUs from './Projects/ContactUs'
import AboutUs from './Projects/AboutUs'
import ButtonAppBar from './Projects/NavBarDemo'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Components/Forms/Login';
//import Menu from './Projects/Menu';
function App() {
  return ( 
    <div className="App">
    <BrowserRouter>

    <ButtonAppBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>

    </div>
  );
} 

export default App;