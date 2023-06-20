import './App.css';

import { useState, useEffect } from "react";

// Custom Hook
import { useFetch } from './hooks/UseFetch';

const url ="http://localhost:3000/products"

function App() {
  const [products,setProducts] = useState([]);

  //4 Custom Hook
  const {data:items, httpConfig,loading, error} = useFetch(url);

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  //1- Resgatar dados
  //useEffect(() => {
    //async function fetchData() {
      // You can await here
     // const res = await fetch(url);
     // const data = await res.json();
     // setProducts(data);
      
    //}
    //fetchData();
  //}, []); // Or [] if effect doesn't need props or state

  //2-ADD Products
  const handleSubmit = async (e) =>{
    e.preventDefault()
    const product ={
      name,
      price,
    };

  /*const res = await fetch(url, {
    method:"POST",
    headers:{
      "Content-Type": "application/json"
    },
    body:JSON.stringify(product)
  });

  //3 - Carregamento Dinâmico
  const addedProduct = await res.json()
  setProducts((prevProducts)=>[...prevProducts,addedProduct]);*/

  //5Refaturando Post
  httpConfig(product,"POST")

  setName("")
  setPrice("")

  
  }

  //*8 Desafio 6
  const handleRemove =(id) =>{
    httpConfig(id,"DELETE")
  }
  
return (
    <div className="App">
      <h1>Lista De Produtos</h1>
      {/*6-Loading*/}
      {loading && <p>Carregando Dados...</p>}
      {error && <p>{error}</p>}
      
      <ul>
        {items && items.map((product) =>(
          <li key={product.id}>{product.name} - €{product.price}
          <button onClick ={() => handleRemove(product.id)}>Excluir</button></li>
          
        ))}
      </ul>
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" 
            value={name} 
            name="name" 
            onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Preço:
            <input type="number" 
            value={price} 
            name="price" onChange={(e) => setPrice(e.target.value)} />
          </label>
           {/* 7 - state de loading no post */}
            {/* 7 - state de loading no post */}
          {loading && <input type='submit' disabled value= "Aguarde"></input>}
          {!loading && <input type='submit' value= "Criar"></input>}
        </form>
      </div>
    </div>
  );
}

export default App;
