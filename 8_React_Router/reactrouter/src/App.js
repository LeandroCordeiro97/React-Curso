import './App.css';
//1- Config React Router
import { BrowserRouter,Routes, Route } from 'react-router-dom';

//Components
import Navbar from './Components/Navbar';

//Pages
import Home from './Pages/Home';
import About from './Pages/About';
import Product from './Pages/Product';


function App() {
  return (
    <div className="App">
        <h1>React Router</h1>
        <BrowserRouter>
        {/*2- Links Com React*/}
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
        {/*4- Rota Dinmaica*/}
            <Route path='/products/:id' element={<Product/>}/>

          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
