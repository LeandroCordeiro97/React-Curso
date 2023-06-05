import './App.css';
import ListRender from './Components/ListRender';
import ManageData from './Components/ManageData';
import City from'./assets/city.jpg';

function App() {
  return (
    <div className="App">
      <h1>Avançando No React</h1>
      
      {/*Imagem Em Public*/}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      
      {/*Imagem Em Assets*/}
      <div>
          <img src={City} alt="Cidade" />
      </div>
      <ManageData></ManageData>
      <ListRender></ListRender>
    </div>
  );
}

export default App;
