'use client'
import React, { useState } from 'react'

export default function Random() {
    // 1er function bool() : retourne aléatoirement false ou true. Ne prend aucun argument en entré
    //console.log(bool()) // Renvoie false ou true

    // 2eme function oneOf([]) : retourne un des nombres aléatoirement présent dans le tableau. Prend un tableau en entré
    //console.log(oneOf([2,4,8])) // Renvoie 2 ou 4 ou 8

    // 3eme function intRange(int, int) : retourne un des nombres aléatoirement compris entre les deux nombres donnée en entré. Prend deux int en entrés
    //console.log(intRange(2,5)) // Renvoie 2 ou 3 ou 4 ou 5

    // 4eme function intSequence(int, int) : retourne un tableau avec un ordre aléatoire de tous les nombres présent dans l'interval des deux int. Prend deux int en entrés
    //console.log(intSequence(2,5)) // Renvoie par exemple [3,5,4,2]

    // 5eme function char(string) : retourne une lettre aléatoire présent dans le string donné en argument. Prend un string en argument
    //console.log(char("hello")) // Renvoie par exemple "e" ou "l"

    const [A, setA] = useState(0)
    const [B, setB] = useState(0)
    const [intRes, setIntRes] = useState(0)
    const [C, setC] = useState(0)
    const [D, setD] = useState(0)
    const [intSeq, setIntSeq] = useState<number[]>([])
    const[character,setCharacter]=useState("")
    const [returnCharacter,setReturnCharacter]=useState(' ') 

    const boolean = () => {
        const rand = Math.floor((Math.random() * 6) + 1)

        let newbool: boolean = true
        if (rand <= 3) {
            newbool = false

        } else {
            newbool = true
        }
        return newbool.toString()

    }
    const oneOf = () => {
        const array: number[] = [2, 4, 8]
        let arrayselect = array[Math.floor(Math.random() * array.length)]
        return arrayselect

    }
    const intRange = (e: React.FormEvent) => {
        e.preventDefault();

        let first = A
        let second = B
        let result = 0
        let arraynumber: number[] = []
        if (first < second) {
            for (first; first <= second; first++) {
                arraynumber.push(first)
                // console.log(arraynumber)
            }
        } else {
            for (first; first >= second; first--) {
                arraynumber.push(first)
                // console.log(arraynumber)
            }

        }
        result = arraynumber[Math.floor(Math.random() * arraynumber.length)]
        setIntRes(result)
        return intRes
    }

    const intSequence = (e: React.FormEvent) => {
        e.preventDefault();

        let first = C
        let second = D

        let arraynumber: number[] = []
        if (first < second) {
            for (first; first <= second; first++) {
                arraynumber.push(first)
                console.log(arraynumber)

                arraynumber.sort(() => Math.random() - 0.5)
                console.log(arraynumber)

            }
        } else {
            for (first; first >= second; first--) {
                arraynumber.push(first)
                // console.log(arraynumber)
                arraynumber.sort(() => Math.random() - 0.5)

            }

        }
        setIntSeq(arraynumber)

        //   return intSeq

    }

    const char = () => {
        let first = character

        let number = Math.floor(Math.random() * character.length)

        // character.charAt(number)
         setReturnCharacter(character.charAt(number))

    }


    const handleChangeA = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newA: number = e.target.valueAsNumber
        setA(newA)

    }

    const handleChangeB = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newB: number = e.target.valueAsNumber
        setB(newB)
    }

    const handleChangeC = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newC: number = e.target.valueAsNumber
        setC(newC)

    }

    const handleChangeD = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newD: number = e.target.valueAsNumber
        setD(newD)
    }
    const handleChangecha = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newcharachter: string = e.target.value
        setCharacter(newcharachter)
    }





    return (
        <div>
            <br />
            <p> 1er function bool</p>
            <br></br>
            <input type="boolean" value={boolean()} readOnly />
            <br />
            <br />
            <p> 2eme function oneOf</p>
            <br></br>
            <input type="text" value={oneOf()} readOnly />
            <br />
            <br />

            <p> 3eme function intRange(int, int)</p>
            <br />

            <form onSubmit={intRange}>
                <input type="number" value={A} onChange={handleChangeA} />
                <input type="number" value={B} onChange={handleChangeB} />
                <input type="number" value={intRes} readOnly />
                <br />
                <br />

                <p>Resultat</p>
                <br />

                <button type="submit">Soumettre</button>

            </form>

            <form  >
            <br />
            <br />

            <p> 4eme function intSequence(int, int)</p>
            <br />

                <input type="number" value={C} onChange={handleChangeC} />
                <input type="number" value={D} onChange={handleChangeD} />

                <br />
                <br />

                
                <br />
                <button type="button" onClick={intSequence}>Soumettre</button>
                <br />
                <br />
                {intSeq.map((int, id) => (

                    <label key={id}> 
                    
                    {
                    " " + intSeq[id] + " "}

                    </label>

                ))


                }


            </form>
            <br/>
            <br/>

            <p> 5eme function char(string)</p>
            <br/>
            <br/>

            <form>
            <input type="text" value={character} onChange={handleChangecha} />
            <button type='button' onClick={char} >
                    Soumettre

            </button>
                <label >
                    <br />
                    <br/>
                    {returnCharacter}
                </label>

            </form>
            </div>
    )
}
