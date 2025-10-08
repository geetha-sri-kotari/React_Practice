import React from "react";
import { useState } from "react";
const ImageEntityTempPath = () => {
    const [ImagePath, setImagePath] = useState(null);
    const GetTempPath = (event) => {
        const file = event.target.files[0];
        const path = URL.createObjectURL(file)
        setImagePath(path)
    }
    return (
        <>
        <input type="file"  onChange={(event) => GetTempPath(event)}/>
        <br/>
        {
            ImagePath ? <img src={ImagePath} className="image-entity" alt="Image Cracked"/> : <></>
        }
        </>
    )
}
export default ImageEntityTempPath