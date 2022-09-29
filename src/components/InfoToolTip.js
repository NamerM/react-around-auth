import React from 'react';
import TickIcon from '../images/TickIcon.svg';
import ErrorIcon from '../images/ErrorIcon.svg'

function InfoToolTip({ isOpen, onClose, status}) {
return (
  <div className={`popup ${isOpen && "popup_open"}`}>
    <div className="popup__square">
      <form className="popup__form" noValidate>
        {status === "success"? (
          <div>
            <img className="popup__icon" src={TickIcon} alt="" />
            <p className="popup__status-message">
              Success! Now you have been registered.
            </p>
          </div>
        ) : (
          <div>
            <img className="popup__icon" src={ErrorIcon} alt="" />
            <p className="popup__status-message">
              Oops, something went wrong! Please try again.
            </p>
          </div>
        )}
        <button type="button" className="popup__close" onClick={onClose}></button>
      </form>
    </div>
  </div>
  );
}


export default InfoToolTip;
