'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormState {
    input1?: number;
    input2?: number;
    input3?: number;
    // Ajoutez autant d'inputs que nécessaire
}
const initialFormState: FormState = {
    input1: null,
    input2: null,
    input3: null
    // Ajoutez autant d'inputs que nécessaire
};

export default function Form(props: FormState) {
    const [formState, setFormState] = useState<FormState>(initialFormState);
    const [event, setEvent] = useState<FormState>(initialFormState);
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const name = event.target.name;

        setFormState(prevState => ({
            ...prevState, 
            [name]: value // Mettre à jour la valeur de l'input correspondante
        }));
    }
    const handleSubmit = (event: FormEvent<HTMLFormElement>,formState:FormState  ) => {
        event.preventDefault();
        console.log(formState); // Afficher l'état du formulaire dans la console
    }
    const printhandleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
        return (
            <div className='div-class'>
                <p> {formState.input1} </p>
                <p> {formState.input2} </p>
                <p> {formState.input3} </p>
            </div>
        )

    }

    return (
        <section className='section-Form'
        >
            <label>
                <p>Consigne : Ecrire un programme qui permet de saisir l’âge de 5 personnes puis qui affiche true si au moins 4 personnes sont adultes et false sinon. Une personne est considérée comme adulte si il a un âge strictement supérieur à 18 ans.
            Regle : Pour cet exercice, tu as le droit d'utiliser ce que tu veux en javascript.</p>
                <span>Entrez un des ages</span>
             </label>
                <textarea 
                value={formState.input1}
                    // onChange={event => handleChange(event)}
                    placeholder='Entrez un des ages'
                    className='input-class'
                    name='input1'
                    defaultValue={formState.input1}

    />
     <input         type='number' 
                value={formState.input2}
                    // onChange={event => handleChange(event)}
                    placeholder='Entrez un des ages'
                    className='input-class'
                    name='input1'
                 onChange={event => handleChange(event)}
    />
     <textarea 
                value={formState.input3}
                    // onChange={event => handleChange(event)}
                    placeholder='Entrez un des ages'
                    className='input-class'

                    name='input1'
                    defaultValue={formState.input1}
    />
                <button 
                type='submit'
                onClick={event => printhandleSubmit(event)}
                className='button-class'

>
Entrez
                </button>




        </section>

    )
}
