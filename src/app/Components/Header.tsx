"use client"

import { headers } from 'next/dist/client/components/headers'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  const[open,setOpen]=React.useState(false)
  return (
   <section className='section_header'>
        <h1>ALGORITHME EN JAVASCRIPT</h1>

      <nav className='menuder' >
<p className='menuwait' >selectionner</p>
       <ol>
        <li>
          <Link href="/first">
            first
          </Link>
        </li>
        <li>
          <Link href="/second">
            second
          </Link>
        </li>
        <li>
          <Link href="/third">
            third
          </Link>
        </li>
        <li>
          <Link href="/fourth">
            fourth
          </Link>
        </li>
        <li>
          <Link href="/fifth">
            fifth
          </Link>
        </li>
        <li>
          <Link href="/sixth">
            sixth
          </Link>
        </li>
        <li>
          <Link href="/seventh">
            seventh
          </Link>
        </li>
        <li>
          <Link href="/eighth">
            eighth
          </Link>
        </li>
        <li>
          <Link href="/ninth">
            ninth
          </Link>
        </li>
        <li>
          <Link href="/tenth">
            tenth
          </Link>
        </li>
        </ol>

      </nav>
    

   </section>
  )
}
