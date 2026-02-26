import React, { useState } from "react";

const OpeningScreen = ({ onOpen }) => {
  const [closing, setClosing] = useState(false);

  const handleOpen = () => {
    setClosing(true);
    setTimeout(() => {
      onOpen();
    }, 1200); // smooth exit animation
  };

  return (
    <div className={`opening-screen ${closing ? "fade-out" : ""}`}>
      <div className="invitation-card">
        <h1 className="couple-name">Vinod ❤️ Bride</h1>
        <p className="invite-text">
          Request The Honor Of Your Presence
        </p>
        <button onClick={handleOpen} className="open-btn">
          Open Invitation
        </button>
      </div>
    </div>
  );
};

export default OpeningScreen;