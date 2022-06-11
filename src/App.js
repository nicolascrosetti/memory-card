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

function App() {
  const [cardsArray, setCardsArray] = useState([
    { name: 'gentoo', id: uuidv4(), imageSrc: gentooImg },
    { name: 'emperor', id: uuidv4(), imageSrc: emperorImg },
    { name: 'adelie', id: uuidv4(), imageSrc: adelieImg },
    { name: 'magellanic', id: uuidv4(), imageSrc: magellanicImg },
    { name: 'australian', id: uuidv4(), imageSrc: australianImg },
    { name: 'chinstrap', id: uuidv4(), imageSrc: chinstrapImg },
    { name: 'king', id: uuidv4(), imageSrc: kingImg },
    {
      name: 'southern rockhopper',
      id: uuidv4(),
      imageSrc: southernRockhopperImg,
    },
    { name: 'galapagos', id: uuidv4(), imageSrc: galapagosImg },
    { name: 'african', id: uuidv4(), imageSrc: africanImg },
    { name: 'humbolt', id: uuidv4(), imageSrc: humboltImg },
    { name: 'macaroni', id: uuidv4(), imageSrc: macaroniImg },
  ]);

  return (
    <>
      <h1>Penguins memory game</h1>
      <p>
        Get points by clicking on an image but don't click on any more than
        once!
      </p>
      <div className='container'>
        <CardList cardsArray={cardsArray} />
      </div>
    </>
  );
}

export default App;
