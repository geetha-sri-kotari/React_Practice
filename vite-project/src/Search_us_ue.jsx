import React from "react";
import { useState, useEffect } from "react";
import './Search_us_ue.css'

const Search_us_ue = () => {
    const [CompleteData, setCompleteData] = useState([
        {
            "name" : "Geetha",
            "roll_no": "23A91A0529"
        },
        {
            "name" : "Sri",
            "roll_no": "23A91A0500"
        },
        {
            "name" : "Surekha",
            "roll_no": "23A91A0519"
        },
        {
            "name" : "Tulasi",
            "roll_no": "23A91A05C5"
        },
        {
            "name" : "Deepthi",
            "roll_no": "23A91A0585"
        },
        {
            "name" : "Sindhu",
            "roll_no": "23A91A0595"
        }
    ])
    const [QueryResult, setQueryResult] = useState([]);
    const [UserQuery, setUserQuery] = useState("");
    
    useEffect(()=> {
            let arr = CompleteData.filter((ele) => (ele.name.includes(UserQuery) || ele.roll_no.includes(UserQuery)))
            setQueryResult(arr);
    }, [UserQuery])

    return (
        <>
        <div className="search-container">
        <input type="text" id="userquery" onChange={(event) => setUserQuery(event.target.value)} placeholder="Search..."/>
        <div className="search-parent">
            {
                QueryResult.map((ele) => {
                    return <div className="search-card">
                        <p>Name : {ele.name}</p>
                        <p>Roll No : {ele.roll_no}</p>
                    </div>
                })
            }
        </div>
        </div>
        </>
    )
}
export default Search_us_ue;