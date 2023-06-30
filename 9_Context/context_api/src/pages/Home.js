//import { useContext } from "react"
//import { CounterContext } from "../context/CounterContext"
import ChangeCounter from "../components/ChangeCounter"

//4 - Refaturar com hook
import { useCounterContext } from "../hooks/USEcOUNTERcONTEXT.js"

//5 - Context Complexo
import { useTitleConext } from "../hooks/useTittleColorContext"




const Home=() => {
  //const {counter} = useContext(CounterContext)
  const {counter} = useCounterContext()
  
  //5 - Context Complexo
  const {color, dispatch} = useTitleConext()

  //6 - Alterar state
  const setTittleColor = (color) => {
    dispatch({type: color })
  }
  
  return (
    <div>
      <h1 style={{color: color} }>Home</h1>
      <p>Valor do contador: {counter}</p>
      
      {/*3 - Alterar Contexto*/}
      <ChangeCounter></ChangeCounter>
      <div>
         {/* 6 - Alterar Contxto*/}
         <button onClick={() => setTittleColor("RED")}>Vermelho</button>
         <button onClick={() => setTittleColor("BLUE")}>Azul</button>
      </div>
    </div>
  )
}

export default Home