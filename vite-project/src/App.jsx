import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Form'
import Cards_practice from './Cards_practice.jsx'
import UseState_practice from './UseState_practice.jsx'
import UseEffect_practice from './UseEffect_practice.jsx'
import Search_us_ue from './search_us_ue.jsx'
import ToDoList from './ToDoList.jsx'
import RouterPractice from './RouterPractice.jsx'
import ImageEntityTempPath from './ImageEntityTempPath.jsx'
import Store from './task_1/Store.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useContext } from 'react'
import Home from './task_1/Home.jsx'
import AddProduct from './task_1/AddProduct.jsx'
import ViewProducts from './task_1/ViewProducts.jsx'
import AddOns from './AddOns.jsx'
import Task1Header from './task_1/Task1Header.jsx'


function App() {
  // var MyCards = [
  //   {
  //     "Name" : 'Geetha',
  //     "Occupation" : 'ML Engineer',
  //     "Salary" : '1CPA'
  //   },
  //   {
  //     "Name" : 'Sri',
  //     "Occupation" : 'Full Stack Developer',
  //     "Salary" : '50LPA'
  //   },
  //   {
  //     "Name" : 'Suneetha',
  //     "Occupation" : 'Marketing Manager',
  //     "Salary" : '1CPA'
  //   },
  //   {
  //     "Name" : 'Sai',
  //     "Occupation" : 'Spiritual Guider',
  //     "Salary" : '10000...'
  //   }

  // ];
  const [Task1Cards, setTask1Cards] = useState([])
  //console.log(Task1Cards)
  return (
    <>
      {/* <Form />
      <br/>
       <div className='Cards_Parent'>
      {
        MyCards.map((ele) => {
          return <Cards_practice  Data = {ele}/>
        })
      }
      </div> 
      <hr/>
      <UseState_practice />
      <br/>
      <UseEffect_practice/>
      <br/>
      <h2><u>Search data using UseState and UseEffect</u></h2>
      <Search_us_ue />
      <br />
      <ToDoList />
      <br /> */}
      {/* <RouterPractice />
      <br /> */}
      {/* <ImageEntityTempPath /> */}

      <Store.Provider value={{Task1Cards, setTask1Cards}} >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/view-products" element={<ViewProducts />} />
          </Routes>
        </BrowserRouter>
      </Store.Provider>

      <AddOns />
    </>
  )
}

export default App
