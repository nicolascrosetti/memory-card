export const Card = ({ card, onclick}) => {
  return (
    <div className='card' onClick={onclick}>
      <img src={card.imageSrc} alt='penguin' className='card-image' />
      <p>{card.name}</p>
    </div>
  );
};
