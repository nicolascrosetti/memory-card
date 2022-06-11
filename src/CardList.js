import { Card } from './Card';

export const CardList = ({ cardsArray, handleClick}) => {
  
  const cardClickHandler = (card) => {
    handleClick(card);
  }

  return cardsArray.map((card) => {
    return <Card key={card.id} card={card} onclick={() => cardClickHandler(card)} />;
  });
};
