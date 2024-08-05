import React, { useState } from "react";
import "./User.scss";

const Popup = () => {
  const [popup, setPopup] = useState(false);

  const togglePopup = () => {
    setPopup(!popup);
  };

  const closePopup = () => {
    setPopup(false);
  };

  return (
    <div className="popup">
      {popup && <div className="backdrop" onClick={closePopup}></div>}
      <button type="button" onClick={togglePopup}>
        {popup ? "Close Popup" : "Show Popup"}
      </button>
      {popup && (
        <div className="card">
          <h1>Popup</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </div>
      )}
    </div>
  );
};

export default Popup;
