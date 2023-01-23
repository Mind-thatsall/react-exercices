import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('');
  const [guess, setGuess] = useState(false);

  useEffect(() => {
    const buttons = document.querySelectorAll('button');

    if(buttons) {
      buttons.forEach(button => {
        button.innerText = getRandomColorBis();
      })
    }

    setColor(buttons[Math.floor(Math.random() * 3)].innerText);
    setGuess(false);    
    getRandomColorBis();
    
  }, [guess])
  
  function checkAnswer(e: MouseEvent<HTMLParagraphElement>) {
    const answer = e.target.innerText;
    const prompt: HTMLParagraphElement | null = document.querySelector('#answer');

    if(answer === color && prompt) {
      prompt.style.color = 'green';
      prompt.innerText = 'Right Answer !';
    } else if(prompt && answer !== color) {
      prompt.style.color = 'red';
      prompt.innerText = 'Wrong Answer !';
    }
    setGuess(answer === color);


    return answer === color;
  }

  function getRandomColorBis(): string {
    const colorHEX = '0123456789ABCDEF';

    const fullColorBis = new Array(6).fill('').map(element => colorHEX.charAt(Math.floor(Math.random() * colorHEX.length))).join('');
    console.log(fullColorBis)

    return '#' + fullColorBis;
  }

  return (
    <div className="App">
      <div className="container">
        <div className="colortoguess" style={{backgroundColor: color}}></div>
        <div className="buttons-container">
          <button onClick={checkAnswer}>a</button>
          <button onClick={checkAnswer}>b</button>
          <button onClick={checkAnswer}>c</button>
        </div>
        <p id="answer"></p>
      </div>
    </div>
  )
}

export default App
