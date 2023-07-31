import React from 'react'
import Conjugaison from './Components/Conjugaison'

export default function page() {
  return (
    <div>
      <h2> EXERCICE 9 : CONJUGAISON.</h2>
      <br />
    <p><strong>Consigne :</strong> Ecrire un programme qui lit au clavier un verbe du premier groupe (il s’assurera qu’il est bien terminé par er) et qui en affiche la conjugaison au présent de l’indicatif. On supposera qu’il s’agit d’un verbe régulier. Autrement dit, on admettra que l’utilisateur ne fournit pas un verbe tel que manger (dans ce cas, le programme affichera nous mangons !). Les résultats se présenteront ainsi :</p>  
    
    <Conjugaison/>
    </div>
  )
}
