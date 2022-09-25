import React from 'react';

function InfoToolTip({name, about}) {

return (
  <section className={`popup popup_type_${name} ${card ? 'popup_open' : ''}`} > {/* burası değişecek */}
    <div className="popup__square popup__square_preview">
      <button type='button' className='popup__close popup__close_preview' onClick={onClose}></button>
      <img className="popup__image" src={card ? card.link : ''} alt={card ? card.name : ''} />  {/* popup__infoTool css ? diğer kısımlar? */}
      <p className="popup__subtitle">{card ? card.name : '' }</p>
    </div>
  </section>
  )
}


export default InfoToolTip;
