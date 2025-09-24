import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Form'
import Cards_practice from './Cards_practice.jsx'
import UseState_practice from './UseState_practice.jsx'
import UseEffect_practice from './UseEffect_practice.jsx'
import Search_us_ue from './search_us_ue.jsx'

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
      <Form />
      <br/>
       <div className='Cards_Parent'>
      {
        MyCards.map((ele) => {
          return <Cards_practice  Data = {ele}/>
        })
      }
      </div> 
      <br/>
      <UseState_practice />
      <br/>
      <UseEffect_practice/>
      <br/>
      <h2><u>Search data using UseState and UseEffect</u></h2>
      <Search_us_ue />
      <br />
    </>
  )
}

export default App
