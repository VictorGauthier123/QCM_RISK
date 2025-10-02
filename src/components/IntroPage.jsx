import React, { useRef } from "react";
import "./IntroPage.css";

const IntroPage = ({ startQuiz }) => {
  const honeypotRef = useRef(null);

  const handleStartQuiz = () => {
    const honeypotValue = honeypotRef.current?.value;

    if (honeypotValue) {
      console.warn("Tentative suspecte détectée (champ honeypot rempli)");
      return;
    }

    // Pas de bot détecté → on lance le quiz immédiatement
    startQuiz();


  };

  return (
    <div className="intro-page">
      <div className="container">
        {/* Triangle bleu foncé */}

        <div className="quiz-description">
          {/* Champ invisible anti-bot */}
          <input
            type="text"
            name="antiBot"
            ref={honeypotRef}
            style={{ display: "none" }}
            autoComplete="off"
          />

          {/* Bouton Commencer */}
          <button onClick={handleStartQuiz} className="start-button">
            Commencer
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
