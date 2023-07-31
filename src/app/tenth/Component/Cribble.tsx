'use client'
import React, { useState } from 'react';

export default function Cribble() {
    const [n, setN] = useState(0);
    const [primes, setPrimes] = useState<number[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setN(parseInt(e.target.value));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Initialize an array with true values up to n
        let sieve = new Array(n + 1).fill(true);
        sieve[0] = sieve[1] = false; // 0 and 1 are not prime

        for (let i = 2; i * i <= n; i++) {
            if (sieve[i]) {
                // i is prime, mark multiples of i as not prime
                for (let j = i * i; j <= n; j += i) {
                    sieve[j] = false;
                }
            }
        }

        // Filter out the prime numbers
        let primes = sieve
            .map((isPrime, i) => (isPrime ? i : null))
            .filter((i) => i !== null);

        setPrimes(primes);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='number' value={n} onChange={handleChange} />
                <button type='submit'>Find primes</button>
            </form>
            {primes.length > 0 && (
                <p>
                    Voici les nombres premiers entre 1 et {n}: {primes.join(', ')}
                </p>
            )}
        </div>
    );
}
