import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

function Home() {
  const {counter} = useContext(CounterContext)
  return (
    <div>
      <h1>Home</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  )
}

export default Home