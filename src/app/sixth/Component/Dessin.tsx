"use client"
import React, { useEffect, useState } from 'react'

const drawPattern = (n: number): string[] => {
    let output: string[] = []

    for (let i = 0; i < n; i++) {
        for (let j = n; j > 0; j--) {
            let line = '';
            for (let k = 0; k < n - j; k++) {
                line += ' ';
            }
            for (let k = 0; k < j; k++) {
                line += '* ';
            }
            output.push(line);
        }
        for (let j = 2; j <= n; j++) {
            let line = '';
            for (let k = 0; k < n - j; k++) {
                line += ' ';
            }
            for (let k = 0; k < j; k++) {
                line += '* ';
            }
            output.push(line);
        }
    }
    console.log(output);

    return output

}

export default function Dessin() {
    const [n, setN] = useState(0)

    const [pattern, setPattern] = useState<string[]>([])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setPattern(drawPattern(n))


    }






    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    enter a number

                    <input
                        type='number'
                        value={n}
                        onChange={(e) => setN(Number(e.target.value))}
                    >
                    </input>

                </label>
                <button type='submit' >Draw</button>
            </form>
            <pre>{pattern}</pre>
        </div>
    )
}
