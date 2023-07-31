import React from 'react'
import Loto from './Components/Loto'

export default function fourth() {
  return (
    <div>
      <h2>
        EXERCICE 4 : LOTO
      </h2>
      <p>
        <strong>Consigne</strong> : Ecrire un programme qui genere aleatoirement six nombres entiers differents entre 1 et 49 inclus.
        <br />
        Voici un exemple : 1-4-45-3-23-32 ✅
        <br />
        2-2-1-45-22-34 ❌ car il y a deux fois le chiffre 2
      </p>
      <Loto />
    </div>
  )
}
