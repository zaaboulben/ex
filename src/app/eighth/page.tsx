import React from 'react'
import Random from './Components/Random'

export default function eighth() {
  return (
    <div>
      <br/>
      <h2>EXERCICE 8 : FUNCTION AVEC MATH.RANDOM</h2>
      <br />
      <p>Consigne : Le but de cet exercice sera de créer 5 functions qui seront utilisables par l'utilisateur. Ces 5 functions utilises le js Math.random() de javascript. Voici la description des 5 functions :

    {// 1er function bool() : retourne aléatoirement false ou true. Ne prend aucun argument en entré
//console.log(bool()) // Renvoie false ou true

// 2eme function oneOf([]) : retourne un des nombres aléatoirement présent dans le tableau. Prend un tableau en entré
//console.log(oneOf([2,4,8])) // Renvoie 2 ou 4 ou 8

// 3eme function intRange(int, int) : retourne un des nombres aléatoirement compris entre les deux nombres donnée en entré. Prend deux int en entrés
//console.log(intRange(2,5)) // Renvoie 2 ou 3 ou 4 ou 5

// 4eme function intSequence(int, int) : retourne un tableau avec un ordre aléatoire de tous les nombres présent dans l'interval des deux int. Prend deux int en entrés
//console.log(intSequence(2,5)) // Renvoie par exemple [3,5,4,2]

// 5eme function char(string) : retourne une lettre aléatoire présent dans le string donné en argument. Prend un string en argument
//console.log(char("hello")) // Renvoie par exemple "e" ou "l"

    }


      </p>
      <Random/>
    </div>
  )
}
