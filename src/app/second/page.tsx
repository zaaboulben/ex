import React from 'react'
import Form from './Component/Form'

export default function second() {
  return (
    <div>
      <h2>EXERCICE 2 : PERSONNE AGES v2.</h2>
      <p>
      <strong>Consigne :</strong> Ecrire un programme qui permet de saisir l’age de 5 personnes puis qui affiche Il n’y a pas de mineurs si les 5 âges sont supérieurs ou egaux a 18, qui affiche il y a un seul mineur si un seul age est inférieur strictement a 18, et qui affiche il y a au moins deux mineurs sinon.
      </p>
      <Form/>
    </div>
  )
}
