import './GameOver.css'

function GameOver({retry,score}) {
  return (
    <div>
        <h1>Game Over</h1>
        <h2>A Tua Pontuação foi: <span>{score}</span></h2>
       <button onClick ={retry}>Resetar Jogo</button>
    </div>
  )
}

export default GameOver