import React, { useContext } from "react";
import { useState } from "react";
import Home from "./Home";
import ViewProducts from "./ViewProducts";
import Store from "./Store";
import "./task1.css"
import { Link } from "react-router-dom";
import Task1Header from "./Task1Header";
const AddProduct = () => {
    const {Task1Cards, setTask1Cards} = useContext(Store)
    const [ProName, setProName] = useState("")
    const [ProBrand, setProBrand] = useState("")
    const [ProSize, setProSize] = useState("")
    const [ProPrice, setProPrice] = useState("")
    const [ProDesc, setProDesc] = useState("")
    const [ProImagePath, setProImagePath] = useState(null)
    const FindImagePath = (event) => {
        const f = event.target.files[0]
        const propath = URL.createObjectURL(f)
        setProImagePath(propath)
    }
    const AddNewProduct = (event) => {
        event.preventDefault()
        //console.log(Task1Cards)
        const new_pro = {
            "Name" : ProName,
            "Brand" : ProBrand,
            "Size" : ProSize,
            "Price" : ProPrice,
            "Image" : ProImagePath,
            "Description" : ProDesc
        }
        setTask1Cards([...Task1Cards, new_pro])
        alert("The Product added successfully")
        console.log(Task1Cards)
    }
    return (
        <>
        <Task1Header />
        <div className="add-product">
        <form >
            <label>Name : </label>
            <input type="text" className="add-pro-feature" required value={ProName} onChange={(event)=>setProName(event.target.value)}/>
            <label>Brand : </label>
            <input type="text" className="add-pro-feature" required value={ProBrand} onChange={(event)=>setProBrand(event.target.value)}/>
            <label>Quantity : </label>
            <input type="text" className="add-pro-feature" required value={ProSize} onChange={(event)=>setProSize(event.target.value)}/>
            <label>Price : </label>
            <input type="text" className="add-pro-feature" required value={ProPrice} onChange={(event)=>setProPrice(event.target.value)}/>
            <label>Picture : </label>
            <input type="file" required onChange={(event)=>FindImagePath(event)} />
            {
                ProImagePath ? <img src={ProImagePath} className="show-temp-image"/> : <></>
            }
            <label>Description : </label>
            <input type="text" className="add-pro-feature" value={ProDesc} onChange={(event)=>setProDesc(event.target.value)}/>
            <div className="add-pro-btns">
                <button className="add-pro-btn" type="submit" onClick={(event)=>AddNewProduct(event)}>Submit</button>
                <button className="add-pro-btn" type="reset">Clear</button>
            </div>
            <Link to="/view-products" className="link-class">View Proucts</Link>
        </form>
        
    </div>
    </>
    )
}
export default AddProduct