import './App.css';
import MyComponents from './Components/MyComponents';
import Title from './Components/Title';

function App() {

  const n =9
  const redTitle = true

  return (
    <div className="App">
      
      {/*CSS GLOBAL*/}
   <h1>React com CSS</h1>
      
      {/*CSS De componetes*/}
      <MyComponents/>
      <p>este paragrafo é do app js</p>
        
         {/*CSS Inline*/}
         <p style = {{color:"blue", 
                      padding: "25px",
                      borderTop:"2px solid red"}}>
          Este elemento foi estilizado de forma inline
         </p>

         {/*CSS Inline Dinamico*/}
         <h2 style={n < 10 ?{color: "purple"} : {color:"pink"}}>Css Dinâmico</h2>

        {/*Classe Dinamica*/}
        <h2 className={redTitle ? "red-title" : "title"} >Este titulo vai ter classe dinâmica</h2>
          
        {/*CSS Modules*/}
        <Title/>
    </div>
  );
}

export default App;
