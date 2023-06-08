import './App.css';
import ConditionalRender from './Components/ConditionalRender';
import ListRender from "./Components/ListRender";
import ManageData from './Components/ManageData';
import City from'./assets/city.jpg';
import ShowUserName from './Components/ShowUserName';
import CarDetails from './Components/CarDetails'
import  Fragment  from './Components/Fragment';
import Container from './Components/Container';
import ExecuteFunctions from './Components/ExecuteFunctions';
import { useState } from 'react';
import Message from './Components/Message';
import ChangMessageState from './Components/ChangMessageState';
import Desafio4 from './Components/Desafio4';


function App() {
  const cars =[
    {id:1 , brand:"Ferrari", color: "Amarelo", newCar:true, km:0},
    {id:2 , brand:"Mercedes", color: "branco", newCar:false, km:514445},
    {id:3 , brand:"Renout", color: "Azul", newCar:false, km:10}

  ]
  function showMessage(){
    console.log ("Evento do componente pai!")
  }

  const [message, setMessage]= useState("")
  const handleMessage = (msg) =>{
    setMessage(msg)
  }

  const users =[
    {id:1, name:"Leandro", age:25, job:"Programador"},
    {id:2, name:"Tiago", age:17, job:"Motorista"},
    {id:2, name:"Maria", age:55, job:"Advogada"}

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
      
      <CarDetails 
      brand="Ford" 
      color="Vermelho" 
      km={50000} 
      newCar ={true}></CarDetails>   
      <CarDetails 
      brand="Fiat" 
      color="branco" 
      km={80000} n
      ew Car ={false}></CarDetails>   
     
     {/*Loop em array de objetos*/}
      
      {cars.map ((car) =>(
        <CarDetails
        key={car.id}
         brand={car.brand} 
         color={car.color}
          km={car.km}
          newCar={car.newCar}/>
        ))};
        {/*Fragment*/}
        <Fragment/>

        {/*Children*/}
        <Container myValue ="testing">
          <p>este é o conteudo</p>
        </Container>
        <Container myValue ="testing">
          <h5>Testando o container</h5>
        </Container>

        {/*Criar Função no Props*/}
        <ExecuteFunctions myFunction ={showMessage}/>

         {/*State Lift*/}
         <Message msg ={message}/>
        <ChangMessageState handleMessage ={handleMessage}/>
        
        {/*Desafio 4*/}
        {users.map((user) =>
        <Desafio4 
        key={user.id} 
        name={user.name} 
        age ={user.age} 
        job={user.job}/>
        )}
    </div>
        
  );
      };

export default App;
