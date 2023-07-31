'use client'

import React, { useState } from 'react';


export default function Calculatrice() {

   

    const [number1, setNumber1] = useState<String>(' ')
    const [number2, setNumber2] = useState<String>(' ')
    const [operation, setOperation] = useState<String>("+")
    const [result, setResult] = useState<String>('')

    
    const handleFirstNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNumber1(e.target.value)

    }
    const handleSecondNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNumber2(e.target.value)

    }
    const handleOperation = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOperation(e.target.value);


    }

  
    const calculateResult = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        const num1: number = parseFloat(number1)
        const num2: number = parseFloat(number2)

        switch (operation) {
            case'+':
            setResult((num1+num2).toString())
            break;
            case'-':
            setResult((num1-num2).toString())
            break;
            case'*':
            setResult((num1*num2).toString())
            break;
            case'/':
            setResult((num1/num2).toString())
            break;
            default:
                setResult('Error')




}


    }

    return (
        <div>
            <form >
                <input type="number" name='number1' value={number1} onChange={handleFirstNumber} />
                <select value={operation} onChange={handleOperation}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="/">/</option>
                    <option value="*">*</option>

                </select>
                <input type="number" name='number2' value={number2} onChange={handleSecondNumber} />

                <button onClick={calculateResult} >=</button>
                <p>Result: {result}</p>

            </form>
        </div>


    )
}
