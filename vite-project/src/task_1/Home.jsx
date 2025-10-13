import React from "react";
import Store from "./Store";
import AddProduct from "./AddProduct";
import ViewProducts from "./ViewProducts";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Task1Header from "./Task1Header";
const Home = () => {
    const {Task1Cards, setTask1Cards} = useContext(Store)
    return (
        <>
        <Task1Header />
        <h1>Home</h1>
        
        </>
    )
}
export default Home;