"use client"
import React, { FormEvent, useEffect, useState } from "react"

export default function Loto() {
    const [numbers, setNumbers] = useState<string[]>([]);

    const generateNum = (e: FormEvent) => {
        e.preventDefault();
        const newNumbers: string[] = [];
        while(newNumbers.length < 6){
            const random = (Math.floor(Math.random()*49)+1).toString();
            if(!newNumbers.includes(random)){
                newNumbers.push(random);
            }
        }
        setNumbers(newNumbers);
        console.log(newNumbers);
    }

    return (
        <div>Loto
            <form onSubmit={generateNum}>
                <button type="submit">Generate</button>
                { numbers.map((number, id) => (
                    <label key={id}>
                        <input type="text" value={number} readOnly />
                    </label>
                ))}
            </form>
        </div>
    )
}
