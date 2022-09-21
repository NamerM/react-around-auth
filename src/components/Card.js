import React from 'react';
import { CurrentUserContext } from '../../src/contexts/CurrentUserContext'

function Card({ card, onClick, onCardLike, onCardDelete }) { // card = { title, _id, owner, link, likes }
  const { name, link} = card;
  const currentUser = React.useContext(CurrentUserContext)  // currentUser.name currentUser.link



  function handleClick() {
   onClick(card);
   console.log(card);
  }

  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `elements__button-delete ${isOwn ? '' : 'elements__button-delete_hidden'}`   // default değeri koymak için ''

  const isLiked = card.likes.some(user => user._id === currentUser._id);   // Create a variable which you then set in `className` for the like button
  const cardLikeButtonClassName = `elements__button-like ${isLiked ? 'elements__button-like_active' : ''}` // unliked default değer ''

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card._id);  //card yerine card._id
  }

return (
    <li className="elements__card">
      <button className={cardDeleteButtonClassName} type="button" onClick={handleDeleteClick}></button>
      <img className="elements__image"
        src={link}
        alt={name}
        onClick={handleClick}
        />
      <div className="elements__handle">
        <h2 className="elements__card-text">{name}</h2>
        <div className="elements__handle_likecolumn">
          <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick}></button>
          <p className="elements__card_likes">{card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}


export default Card;


