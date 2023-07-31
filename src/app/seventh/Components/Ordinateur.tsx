'use client'

import { useState, useEffect } from 'react';

const Ordinateur = () => {
    const [guess, setGuess] = useState(0);
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100) + 1);
    const [attempts, setAttempts] = useState(0);
    const [message, setMessage] = useState('');
    const [gameOver, setGameOver] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGuess(Number(e.target.value));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setAttempts(attempts + 1);
        console.log(randomNumber)
        if (attempts + 1 > 6) {
            setMessage("Désolé, vous avez dépassé le nombre d'essais autorisés!");
            setGameOver(true);
        } else if (guess > randomNumber) {
            setMessage('Trop haut!');
        } else if (guess < randomNumber) {
            setMessage('Trop bas!');
        } else {
            setMessage(`Félicitations! Vous avez trouvé le bon nombre en ${attempts + 1} essais.`);

            setGameOver(true);
        }
    };

    const handleReset = () => {
        setGuess(0);
        setRandomNumber(Math.floor(Math.random() * 100) + 1);
        setAttempts(0);
        setMessage('');
        setGameOver(false);
    };

    useEffect(() => {
        if (gameOver) {
            handleReset();
        }
    }, [gameOver]);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Devinez un nombre entre 1 et 100:
                    <input type="number" value={guess} onChange={handleChange} min="1" max="100" required />
                </label>
                <br />
                <button type="submit">Soumettre</button>
            </form>

            <p>{message}</p>
        </div>
    );
};

export default Ordinateur;
