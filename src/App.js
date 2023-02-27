import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import Add from './Components/Add';
import Update from './Components/Update';
import Register from './Components/Register';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element ={<Login/>}></Route>
    <Route path="/register" element ={<Register />}></Route>
    <Route path="/home" element ={<Home />}></Route>
    <Route path="/add" element ={<Add />}></Route>
    <Route path="/update" element ={<Update />}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
