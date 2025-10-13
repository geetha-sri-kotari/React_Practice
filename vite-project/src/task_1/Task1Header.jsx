import React from "react";
import { Link } from "react-router-dom";
import "./task1.css"
const Task1Header = () => {
    return (
        <div className="task-header">
        <Link to="/add-product" className="link-class">Add Product</Link>
        <Link to="/view-products" className="link-class">View Products</Link>
        </div>
    )
}
export default Task1Header