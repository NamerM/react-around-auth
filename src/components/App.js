import React  from 'react';
import Header from '../components/Header.js';
import Main from '../components/Main.js';
import Footer from '../components/Footer.js';
import ImagePopup from './ImagePopup.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import api from '../../src/utils/api';

import { CurrentUserContext } from '../../src/contexts/CurrentUserContext'
import '../index.js';


function App() {
  const [currentUser, setCurrentUser] = React.useState({});   // {name, about, avatar }
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen ] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(undefined);
  const [cards, setCards] = React.useState([]);
  const [submitButtonEffect, setSubmitButtonEffect] =React.useState(false);

  React.useEffect(() => {
    api.getUserInfo()
      .then( res => {  // { data: { name, avatar, about, _id}}
        setCurrentUser(res);
      })
      .catch(console.log);
    api.getInitialCards()
      .then( res => {
        setCards(res);
      })
      .catch(console.log);
    }, [])

  React.useEffect(() => {
      const closeByEscape = (e) => {
        if (e.key === 'Escape') {
          closeAllPopups();
        }
      }

      document.addEventListener('keydown', closeByEscape)

      return () => document.removeEventListener('keydown', closeByEscape)
  }, [])


  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(undefined);
  }




  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleUpdateUser({name, about}){
    setSubmitButtonEffect(true)
    api.editProfile(name, about)
      .then( res => {
        setCurrentUser(res);
        closeAllPopups()
      })
      .catch(console.log)
      .finally(() => {
        setSubmitButtonEffect(false)
      })
  }

  function handleUpdateAvatar({avatar}) {
    setSubmitButtonEffect(true)
    api.editAvatar(avatar)
      .then( res => {
        setCurrentUser(res);
        closeAllPopups()
      })
      .catch(console.log)
      .finally(() => {
        setSubmitButtonEffect(false)
      })
  }

      //{/* handeLikeClick card._id olduğundan burada sadece id objecti gerekiyor bize api.dele velike card._id card return card*/}
  function handleCardLike(card) {
    const isLiked = card.likes.some(user => user._id === currentUser._id);

    api.cardLikeStatusChange(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((currentCard) => currentCard._id === card._id ? newCard : currentCard));
      })
      .catch(console.log)
  }

  function handleCardDelete(card) {
    api.deleteCard(card)
      .then(() => {
        setCards((state) => state.filter((cards) => cards._id !== card))
      })
      .catch(console.log)
   }

  function handleAddPlaceSubmit({ name, link }) {
    setSubmitButtonEffect(true)
    api.addCard(name, link)
      .then( res => {
        setCards([res, ...cards ]);
        closeAllPopups()
      })
      .catch(console.log)
      .finally(() => {
        setSubmitButtonEffect(false)
      })
    }



  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page__content">
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          isLoading={submitButtonEffect}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          isLoading={submitButtonEffect}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlaceSubmit={handleAddPlaceSubmit}
          isLoading={submitButtonEffect}
        />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <Header />
        <Main
          onEditAvatarClick={handleEditAvatarClick}
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          cards = {cards}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

