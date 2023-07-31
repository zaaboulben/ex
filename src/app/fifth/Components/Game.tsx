'use client'


/////////////////////
import React, { useState } from "react";

const CHOICES = ["Pierre", "Feuille", "Ciseau"];
const RULES = {
    Pierre: "Ciseau",
    Feuille: "Pierre",
    Ciseau: "Feuille",
};

const getComputerChoice = () => CHOICES[Math.floor(Math.random() * CHOICES.length)];

function App() {
    const [userScore, setUserScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [winner, setWinner] = useState('');

    const playGame = (userChoice: string) => {
        if (gameOver) return;
        const computerChoice = getComputerChoice();

        if (userChoice === computerChoice) return;

        if (RULES[userChoice] === computerChoice) {
            setUserScore(userScore + 1);
            if (userScore + 1 === 5) {
                setGameOver(true);
                setWinner('Utilisateur');
            }
        } else {
            setComputerScore(computerScore + 1);
            if (computerScore + 1 === 5) {
                setGameOver(true);
                setWinner('Ordinateur');
            }
        }
    };

    return (
        <div>
            <h2>Pierre - Feuille - Ciseau</h2>
            <p>Score Utilisateur: {userScore}</p>
            <p>Score Ordinateur: {computerScore}</p>
            {CHOICES.map(choice => (
                <button key={choice} onClick={() => playGame(choice)}>
                    {choice}
                </button>
            ))}
            {gameOver && <p>Le jeu est terminé. Le gagnant est {winner}</p>}
        </div>
    );
}

export default App;
