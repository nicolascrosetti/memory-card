import React from 'react';
import { useEffect, useState } from 'react';
import './styles.css';
import { CardList } from './CardList';
import { v4 as uuidv4 } from 'uuid';
import { getMouseEventOptions } from '@testing-library/user-event/dist/utils';
//Images
import {
  gentooImg,
  emperorImg,
  adelieImg,
  magellanicImg,
  australianImg,
  chinstrapImg,
  kingImg,
  southernRockhopperImg,
  galapagosImg,
  africanImg,
  humboltImg,
  macaroniImg,
} from './image-index';
import userEvent from '@testing-library/user-event';

function App() {
  const [cardsArray, setCardsArray] = useState([
    { name: 'Gentoo', id: uuidv4(), imageSrc: gentooImg, hasBeenClicked: false },
    { name: 'Emperor', id: uuidv4(), imageSrc: emperorImg, hasBeenClicked: false },
    { name: 'Adelie', id: uuidv4(), imageSrc: adelieImg,hasBeenClicked: false },
    { name: 'Magellanic', id: uuidv4(), imageSrc: magellanicImg,hasBeenClicked: false },
    { name: 'Australian', id: uuidv4(), imageSrc: australianImg, hasBeenClicked: false },
    { name: 'Chinstrap', id: uuidv4(), imageSrc: chinstrapImg, hasBeenClicked: false },
    { name: 'King', id: uuidv4(), imageSrc: kingImg, hasBeenClicked: false },
    {
      name: 'Southern Rockhopper',
      id: uuidv4(),
      imageSrc: southernRockhopperImg,
      hasBeenClicked: false 
    },
    { name: 'Galapagos', id: uuidv4(), imageSrc: galapagosImg, hasBeenClicked: false },
    { name: 'African', id: uuidv4(), imageSrc: africanImg, hasBeenClicked: false },
    { name: 'Humbolt', id: uuidv4(), imageSrc: humboltImg, hasBeenClicked: false},
    { name: 'Macaroni', id: uuidv4(), imageSrc: macaroniImg, hasBeenClicked: false},
  ]);

  const [userScore, setUserScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const shuffleArray = (newCardsArray) => {
    for (let i = newCardsArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newCardsArray[i], newCardsArray[j]] = [newCardsArray[j], newCardsArray[i]];
    }
    return newCardsArray
  }

  const resetGame = () => {
    setUserScore(0);
    const newArray = [...cardsArray].forEach((card) => {
      card.hasBeenClicked = false;
    });
  }

  const handleClick = (card) => {
    //Add score to user or reset game if they lose
    if(card.hasBeenClicked == false){
      card.hasBeenClicked = true;
      setUserScore(userScore+1);
    }else{
      if(userScore>bestScore){
        setBestScore(userScore);
      }
      resetGame();
    }
    //Check if user has won
    if(userScore>=12){
      console.log('You won!');
      resetGame();
    }
    
    //Shuffle cards after round
    const newArray = shuffleArray([...cardsArray]);
    setCardsArray(newArray);
  } 

  return (
    <>
    <header>
      <div> 
        <h1>Penguins memory game</h1>
        <p>
          Get points by clicking on an image but don't click on any more than
          once!
        </p>
      </div>
      <div className='score-div'>
        <p>Your score: <span>{userScore}</span></p>
        <p>Best Score: <span>{bestScore}</span></p>
      </div>
    </header>
    
    <div className='container'>
      <CardList cardsArray={cardsArray} handleClick={handleClick} />
    </div>
    </>
  );
}

export default App;
