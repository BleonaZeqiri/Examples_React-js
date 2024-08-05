import React, { useState } from "react";
import "./User.scss";

const Popup = () => {
  const [popup, setPopup] = useState(false);
  const showPopup = () => {
    setPopup(!popup);
  };
  const closePopup = () => {
    setPopup(false);
  };
  return (
    <div className="popup">
      {popup ? <div className="backdrop" onClick={closePopup}></div> : null}
      <button type="button" onClick={showPopup}>
        show popup
      </button>
      {popup ? (
        <div className="card">
          <h1>Popup</h1>
          <p>Lorem ipsum ...</p>
          <p>Lorem ipsum ...</p>
          <p>Lorem ipsum ...</p>
        </div>
      ) : null}
    </div>
  );
};

export default Popup;
