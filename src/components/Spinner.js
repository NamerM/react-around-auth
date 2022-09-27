import React from 'react';
import Loader from '../images/loading-braid.png';

function Spinner({ isLoading }) {
  return (
        <div className="popup__square">
          <form className="popup__form" noValidate>
            { isLoading === "true" ? ( <img className="" src={Loader} alt="" />
            )  : ( '' )
            }
          </form>
        </div>
  )
}

export default Spinner;
