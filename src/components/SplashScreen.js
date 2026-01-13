import React, { useEffect, useState } from "react";
import "../styles/SplashScreen.css";

function SplashScreen() {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false); // hide overlay after 10 seconds
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="splash-container">
      {showOverlay && <div className="dark-blur-overlay"></div>}
      <div className="splash-content">
        <div className="book-icon">📖</div>
        <h1>BOOKSPHERE</h1>
        <p>Your Digital Library</p>
      </div>
    </div>
  );
}

export default SplashScreen;
