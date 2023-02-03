import { useEffect, useState } from "react";
import "./App.css";
import words from './assets/valid_words.json';

function App() {
  // Initialization of the indexes to know where we are
  let rowIndex = 0;
  let colIndex = 0;

  // Initialization of the boards : One for the letters the other for the validation.
  const boardInitialization = new Array(6)
    .fill("")
    .map(() => new Array(5).fill(""));
  const boardValidationInitialization = new Array(6)
    .fill("")
    .map(() => new Array(5).fill(""));

  // Random word
  const word = randomWord();

  // The states : two boards, one state to know if the player won the other if he lost (to show messages at the end) 
  // and the word to guess
  const [board, setBoard] = useState(boardInitialization);
  const [valid, setValid] = useState(boardValidationInitialization);
  const [playerWon, setPlayerWon] = useState(false);
  const [playerLost, setPlayerLost] = useState(false);
  const [wordToGuess, setWordToGuess] = useState(word);

  // The function when we press a key
  function handleKeyPress(e: KeyboardEvent) {
    // if the user already lost/won then he can't type anything
    if (playerWon || playerLost) return;
    // else we take the full board
    const fullBoard = [...board];

    
    // First check to see if the user is trying to delete a letter
    if (e.key === "Backspace" && colIndex > 0) {
      colIndex--;
      fullBoard[rowIndex][colIndex] = "";
      setBoard(fullBoard);
      return;
    }
    
    
    if (colIndex < 5 && e.key.match(/^[a-zA-Z]$/)) {
      console.log(wordToGuess)
      //If we are under 5 characters and we're typing only letters then we add those to the board
      fullBoard[rowIndex][colIndex] = e.key.toUpperCase();
      setBoard(fullBoard);
      colIndex++;
    } else if (e.key === "Enter" && colIndex === 5 && rowIndex < 5) {
      // else if we typed a full word and type enter we check if the letters in the words are in the right order or not
      checkWord(fullBoard[rowIndex], wordToGuess, rowIndex);
      rowIndex++;
      colIndex = 0;
    } else if (rowIndex === 5 && colIndex === 5 && !playerWon && e.key === "Enter") {
      // else if we're on the last row we launch a last check
      checkWord(fullBoard[rowIndex], wordToGuess, rowIndex);
    }
  }

  function checkWord(word: Array<String>, wordToGuess: Array<String>, rowIndex: number) {
    //We take the full board of validation (it's empty strings at first)
    const fullBoardValidation = [...valid];

    // we pass through the word we're typing and through the word we're guessing
    for (let i = 0; i < word.length; i++) {
      for (let j = 0; j < wordToGuess.length; j++) {
        if (word[i] === wordToGuess[i]) {
          // if the letter on the first word and second word are the same and at the same place (i) then we add "valid" to the board
          fullBoardValidation[rowIndex][i] = "valid";
        } else if (word[i] === wordToGuess[j]) {
          // else we check if the letter is somewhere in the word we're guessing and add "maybe" if it is
          fullBoardValidation[rowIndex][i] = "maybe";
        }
      }
    }

    setValid(fullBoardValidation);

    // If every single letters of our word are the same as the other word then we set playerWon to true
    if (word.every((letter, letterIndex) => letter === wordToGuess[letterIndex])) {
      setPlayerWon(true);
    } else if (rowIndex === 5) {
      // else if we're on the last row and we didn't pass the first check then we set playerLost to true
      setPlayerLost(true);
    }
  }

  function resetBoard() {
    //We reset everything

    let fullBoard = [...board];
    fullBoard = boardInitialization;
    setBoard(fullBoard);

    setValid(boardValidationInitialization);
    setPlayerWon(false);
    setPlayerLost(false);
    rowIndex = 0;
    colIndex = 0;
    setWordToGuess(randomWord());
  }

  function randomWord() {
    return words.valid_words[Math.floor(Math.random() * words.valid_words.length)].toUpperCase().split('');
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [playerWon, playerLost]);

  return (
    <div className="App">
      {board.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((col, colIndex) => (
            <div
              key={colIndex}
              className={`col tile ${valid[rowIndex][colIndex]}`}>
              {col}
            </div>
          ))}
        </div>
      ))}

      {playerWon ? (
        <div>
          <h1>YOU WON !</h1>
          <button onClick={resetBoard}>New game ?</button>
        </div>
      ) : (
        ""
      )}

      {playerLost ? (
        <div>
          <h1>You lost.</h1>
          <button onClick={resetBoard}>New game ?</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
