'use client'
import React, {useState, useEffect} from 'react'
import { NavBar } from '../NavBar/NavBar'
import { Menu } from '../NavBar/Menu'

export function Navigation () {

    let [ isOpen, setIsOpen ] = useState(false)

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }
    
    return(
        <>
        <NavBar toggleOpen={toggleOpen}/>
        {isOpen && <Menu toggleOpen={toggleOpen}/>}
        </>
    )
}