//import { useContext } from "react"
//import { CounterContext } from "../context/CounterContext"

import { useCounterContext } from "../hooks/USEcOUNTERcONTEXT"
import { useTitleConext } from "../hooks/useTittleColorContext"

function About() {
  //const {counter} = useContext(CounterContext)
  const {counter} =useCounterContext()

  //5 - Context Complexo
  const {color} = useTitleConext()
 
  return (
    <div>      
      <h1 style={{color:color}}>About</h1>
      <p>Valor do contador: {counter}</p></div>
  )
}

export default About