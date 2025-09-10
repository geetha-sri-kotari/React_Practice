import ReactLogo from './assets/react.svg'
import React from 'react'
import './Cards_practice.css'
const Cards_practice = (Props) => {
    return (
            <div className='Card'>
                <p>Name : {Props.Data.Name}</p>
                <p>Occupation : {Props.Data.Occupation}</p>
                <p>Salary : {Props.Data.Salary}</p>
            </div>
    )
}
export default Cards_practice;