import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Form'
import Cards_practice from './Cards_practice.jsx'

function App() {
  var MyCards = [
    {
      "Name" : 'Geetha',
      "Occupation" : 'ML Engineer',
      "Salary" : '1CPA'
    },
    {
      "Name" : 'Sri',
      "Occupation" : 'Full Stack Developer',
      "Salary" : '50LPA'
    },
    {
      "Name" : 'Suneetha',
      "Occupation" : 'Marketing Manager',
      "Salary" : '1CPA'
    },
    {
      "Name" : 'Sai',
      "Occupation" : 'Spiritual Guider',
      "Salary" : '10000...'
    }

  ];
  return (
    <>
      {/*<Form />*/}
      <div className='Cards_Parent'>
      {
        MyCards.map((ele) => {
          return <Cards_practice  Data = {ele}/>
        })
      }
      </div>
    </>
  )
}

export default App
