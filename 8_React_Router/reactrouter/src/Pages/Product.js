import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/UseFetch";

const Product= () => {
{/*4- Rota Dinmaica*/}
const {id} = useParams();

//5-Carregamento Dado Individual
const url = "http://localhost:3000/products/" + id
const {data:product,loading,error} = useFetch(url);
console.log(product)
  

return (
   <div>
    <p>ID do porduto:{id}</p>
    {error && <p>Ocorreu um erro..</p>}
    {loading && <p>Carregando...</p>}
    {product && (<div>
      <h1>{product.name}</h1>
      <p>€{product.price}</p>
       {/*6- Nested Routes*/}
       <Link to = {`/products/${product.id}/info`}>Mais Informações</Link>
    </div>)}
    </div>
  )
}

export default Product;