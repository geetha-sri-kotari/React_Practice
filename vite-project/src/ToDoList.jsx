import React from "react";
import { useState, useEffect } from "react";
import "./ToDoList.css"

const ToDoList = () => {
    const [UserInput, setUserInput] = useState("");
    const [UserTasks, setUserTasks] = useState([]);

    const AddTask = (event) => {
        if(UserInput == "") {alert("Please Enter a Task To Do..."); return;}
        else if(UserTasks.includes(UserInput)) {alert("The entered Task is already present..."); return;}
        //console.log(UserInput)
        setUserTasks([...UserTasks, UserInput])
    }
    const DeleteTask = (del_idx) => {
        const arr = UserTasks.filter((ele, index) => index != del_idx);
        setUserTasks(arr)
    }
    const EditTask =(edit_idx) => {
        
    }

    return (
        <div className="tasks-parent">
            <h3>To Do List</h3>
            <div className="add-task">
                <input type="text" id="add-task-text" onChange={(event)=>setUserInput(event.target.value)} placeholder="Add Task"/>
                <button id="add-task-btn" onClick={(event)=>AddTask(event)}>Add</button>
            </div>
            {
                UserTasks.map((ele) => {
                    return <div className="task">
                        <input type="checkbox"></input>
                        <li>{ele}</li>
                        <button id="task-edit-btn">Edit</button>
                        <button id="task-del-btn" onClick={()=>DeleteTask(UserTasks.indexOf(ele))}>Delete</button>
                    </div>
                })
            }
        </div>
    )
}

export default ToDoList