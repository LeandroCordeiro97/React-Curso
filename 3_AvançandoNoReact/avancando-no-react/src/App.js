import './App.css';
import ConditionalRender from './Components/ConditionalRender';
import ListRender from "./Components/ListRender";
import ManageData from './Components/ManageData';
import City from'./assets/city.jpg';
import ShowUserName from './Components/ShowUserName';
import CarDetails from './Components/CarDetails'


function App() {
  const cars =[
    {id:1 , brand:"Ferrari", color: "Amarelo", newCar:true, km:0},
    {id:2 , brand:"Mercedes", color: "branco", newCar:false, km:514445},
    {id:3 , brand:"Renout", color: "Azul", newCar:false, km:10}

  ]
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
     <ConditionalRender></ConditionalRender>
     {/*Props*/}
     <ShowUserName name="Leandro" ></ShowUserName>
         {/*Destructuring*/}
     <CarDetails brand ="VW" km= {100000} color="Azul" newCar ={false} ></CarDetails>
         {/*Reaproveitamento*/}
      <CarDetails brand="Ford" color="Vermelho" km={50000} newCar ={true}></CarDetails>   
      <CarDetails brand="Fiat" color="branco" km={80000} new Car ={false}></CarDetails>   
      {/*Loop em array de objetos*/}
      {cars.map ((car) =>(
        <CarDetails brand={car.brand} color={car.color} km={car.km} newCar={car.newCar}/>
        ))};
    </div>
        
  );
      };

export default App;
