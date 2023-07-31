import React from 'react'
import Ordinateur from './Components/Ordinateur'

export default function page() {
  return (
    <div>
      <h2>JEU AVEC L&apos;ORDINATEUR.</h2>
      <br/>
      <p>
        <strong> Consigne :</strong> Le but est d’ecrire un programme qui permet a un utilisateur de rechercher un nombre aléatoire entre 1 et 100 généré par la machine.
        Modifier le programme pour que l’ordinateur demande un nombre entre 1 et 100 a l’utilisateur, et qu’il affiche si ce nombre est plus grand ou plus petit que le nombre genere aleatoirement par la machine (jusqu’a ce qu’il trouve!). Le nombre total d’essais necessaires pour trouver le nombre sera affiche a la fin. Modifier le programme pour que l’utilisateur n’ait plus que 7 chances au maximum.
<br/>
<br/>
        <strong>Regle :</strong> Pour cet exercice, tu as le droit d'utiliser ce que tu veux en javascript.


      </p>
      <Ordinateur/>
    </div>
  )
}
