import React from "react";
import { useState } from "react";
const ImageEntityTempPath = () => {
    const [ImagePath, setImagePath] = useState(null);
    const [ReaderImagePath, setReaderImagePath] = useState(null)
    const GetTempPath = (event) => {
        const file1 = event.target.files[0];
        const path = URL.createObjectURL(file1)
        setImagePath(path)
        
    }
    const GetReaderPath = (event) => {
        const file2 = event.target.files[0];
        const reader = new FileReader()
        reader.readAsDataURL(file2)
        reader.onload = () => {
            setReaderImagePath(reader.result)
            console.log(reader.result)
        }
    }
    return (
        <>
        <h3>Using Temporary Path</h3>
        <input type="file"  onChange={(event) => GetTempPath(event)}/>
        <br/>
        {
            ImagePath ? <img src={ImagePath} className="image-entity" alt="Image Cracked"/> : <></>
        }
        <br />
        <h3>Using Reader </h3>
        <input type="file"  onChange={(event) => GetReaderPath(event)}/>
        <br/>
        {
            ReaderImagePath ? <img src={ReaderImagePath} className="image-entity" alt="Image Cracked"/> : <></>
        }
        </>
    )
}
export default ImageEntityTempPath