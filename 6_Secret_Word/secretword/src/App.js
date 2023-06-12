//CSS
import './App.css';

//React
import{useCallback, useEffect, useState, UseState} from "react"

//data
import {wordsList} from './data/words'

//Coponents 
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';


const stages =[
  {id:1, name:"Start"},
  {id:2 ,name:"Game"},
  {id:3, name: "End"}
]
function App() {
const [gameStage, setGameStage] = useState(stages[0].name)
const [words] =useState(wordsList)
const [pickWord, setPickedWord] = useState("")
const [pickedCategory, setPickedCategory]= useState ("")
const [letters, setLetters]=useState([])
const pickWordAndCategory =() =>{
  
  //Pick Random Category
  const categories = Object.keys(words)
  const category = categories[Math.floor(Math.random() *Object.keys(categories).length)]
  console.log(category)

  //Pick Random Word
  const word = words[category][Math.floor(Math.random() *words[category].length)]
  console.log(word)

  return{word, category}
}

//Starts the secretword game
const startGame =() =>{
  //Pick Word And Pick Cateory
  const {word,category} = pickWordAndCategory()

  //Create an array of letters
  
  let wordLetters = word.split("");

  wordLetters = wordLetters.map((l) => l.toLowerCase());
  
  console.log(wordLetters)
 

  //Fill States
  setPickedWord(word)
  setPickedCategory(category)
  setLetters(letters)
  
  
  setGameStage(stages[1].name)
  


}

//pocess the letter input
const verifyLetter =() =>{
   setGameStage(stages[2].name)
}

//Restart The Game
const retry =() =>{
  setGameStage(stages[0].name)
}


  return (
    <div className="App">
      {gameStage === 'Start' && <StartScreen startGame={startGame}/>}
      {gameStage === 'Game' && <Game verifyLetter ={verifyLetter}/>}
      {gameStage === 'End' && <GameOver retry={retry}/>}
      
    </div>
  );
}

export default App;
