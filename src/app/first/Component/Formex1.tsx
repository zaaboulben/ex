"use client"
"take the data from the form and put it in the state"
import { ChangeEvent, FormEvent, useState } from "react"
interface FormData {
    ages: string[]
}


export default function Formex1() {
    const [adultCount, setAdultCount] = useState<number>(0);

    const [formData, setFormData] = useState<FormData>({
        ages: Array(5).fill('')
    })

    const handleChange = (id: number) => (e: ChangeEvent<HTMLInputElement>) => {
        const newAges = [...formData.ages]
        newAges[id] = e.target.value
        setFormData({ ages: newAges })


    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(formData)
        const adultcont = formData.ages.filter(age => Number(age) > 18).length
        const result = adultcont >= 4;
        console.log(result)
        setAdultCount(adultcont)

    }


    return (
        <div className='form-class_ex1'>
            <form onSubmit={handleSubmit}>
                {
                    formData.ages.map((age, id) => (
                        <label key={id}>
                            <input type="number" value={age} onChange={handleChange(id)} />
                        </label>
                    ))}
                <input type="submit" value="submit" />

                <p>Nombre d&apos;adultes: {adultCount}</p>
                {adultCount >= 4 ? <p>True</p> : <p>False</p>}
            </form>
        </div>
    )
}
import React from 'react'


