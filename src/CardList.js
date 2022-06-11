import { Card } from './Card';

export const CardList = ({ cardsArray }) => {
  return cardsArray.map((card) => {
    return <Card key={card.id} card={card} />;
  });
};
