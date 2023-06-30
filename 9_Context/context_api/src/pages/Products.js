import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

function Products() {
  const {counter} = useContext(CounterContext)
  return (
    <div>      
      <h1>About</h1>
      <p>Valor do contador: {counter}</p></div>
  )
}

export default Products