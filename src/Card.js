export const Card = ({ card }) => {
  return (
    <div className='card'>
      <img src={card.imageSrc} alt='penguin' className='card-image' />
      <p>{card.name}</p>
    </div>
  );
};
