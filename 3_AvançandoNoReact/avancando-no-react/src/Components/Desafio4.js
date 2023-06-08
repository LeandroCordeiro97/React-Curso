import React from 'react'

function Desafio4({name, age, job}) {
  
  return (
    <div>
        <h2>{name}</h2>
        <p>Idade: {age}</p>
        <p>Profissão:{job}</p>
        {age >=18? (<p>Pode tirar a carta</p>) : (<p>Menor de idade</p>)}
    </div>
  )
}

export default Desafio4