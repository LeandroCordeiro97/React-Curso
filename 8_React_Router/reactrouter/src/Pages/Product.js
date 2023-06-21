import { useParams } from "react-router-dom"

const Product= () => {
{/*4- Rota Dinmaica*/}
const {id} = useParams();
  return (
   <div>
    <p>ID do porduto:{id}</p>
    </div>
  )
}

export default Product;