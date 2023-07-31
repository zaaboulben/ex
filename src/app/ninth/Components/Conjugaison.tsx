'use client'

import React, { useState } from 'react'

export default function Conjugaison() {
    const [verbe, setVerbe] = useState("manger")
    const [conjugaison, setConjugaison] = useState<string[]>([])

    const handleSubmit = (e: React.FormEvent) => {
        console.log(verbe);
        
        e.preventDefault()
        let verbEnd: boolean = false
        console.log(verbEnd);

        if (verbe.charAt(verbe.length - 1) === 'r' && verbe.charAt(verbe.length - 2) === 'e') {
            verbEnd = true
            console.log(verbEnd);

        } if (!verbEnd) {
            alert("Il ne se termine pas par 'er' - donnez-en un autre : ");
            return;
            console.log(verbe.charAt(verbe.length - 1) );
            
        }
  
    const BaseVerbe = verbe.slice(0, verbe.length - 2);

    setConjugaison([
        `je ${BaseVerbe.concat("e")}`,
        `tu ${BaseVerbe.concat("es")}`,
        `il/elle/on ${BaseVerbe.concat("e")}`,
        `nous ${BaseVerbe.concat("ons")}`,
        `vous ${BaseVerbe.concat("ez")}`,
        `ils/elles ${BaseVerbe.concat("ent")}`
    ]);
}





    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={verbe} onChange={e => setVerbe(e.target.value)} />
                <button type='submit' >conjuguez</button>

            </form>
            {conjugaison.map((form, id) => (

                <p key={id}>{form}</p>


            ))




            }



        </div>
    )
}
