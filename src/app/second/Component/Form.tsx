'use client'
import { ChangeEvent, useState } from "react"
interface FormData{

ages:string[]

}

export default function Form() {

    const [result,setResult]=useState<number>(0)

    const [age,setAge]=useState<FormData>({
        ages:Array(5).fill('')
    
    })

    const handleChange=(id:number)=>(e:ChangeEvent<HTMLInputElement>)=>{
        const newAges=[...age.ages]
    newAges[id]=e.target.value
    setAge({ages:newAges})
    }
    
const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
e.preventDefault()
const adultcont=age.ages.filter(age=>Number(age)>18).length
const result=adultcont>4;
console.log(result)
setResult(adultcont)

}


  return (
<div className='form-class_ex1'>
           <form onSubmit={handleSubmit}>
            {
                age.ages.map((age,id)=>(
                    <label key={id}>
                        <input type="number" value={age} onChange={handleChange(id)} />
                    </label>
                    ))}
                    <input type="submit" value="submit" />
                 
                    <p>Number of mineur: {age.ages.length-result}</p>
                        {result>=2?<p>True</p>:<p>False</p>}
           </form>
        </div>  )
}
