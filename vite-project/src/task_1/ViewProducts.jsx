import React, { useContext } from "react";
import "./task1.css"
import Store from "./Store";
import { Link } from "react-router-dom";
import Task1Header from "./Task1Header";
const ViewProducts = () => {
  const  {Task1Cards}  = useContext(Store);
  console.log(Task1Cards)
  return (
    <>
    <Task1Header />
    <div className="all-products">
        {
            Task1Cards.map((ele, index)=>(
                <div className="product-container">
                <div key={index} className="view-pro-image">
                    <img src={ele.Image} />
                </div>
                <div className="pro-basic-details">
                    <p>Name : {ele.Name}</p>
                    <p>Brand : {ele.Brand}</p>
                </div>
                </div>
            ))
        }
    </div>
    <Link to="/add-product" className="link-class">Add Product</Link>
    </>
  )
};
export default ViewProducts;
