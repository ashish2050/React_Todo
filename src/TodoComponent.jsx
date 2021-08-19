import React, { useState } from 'react';

const TodoComponent=()=>{

    const [newtodo,setNewtodo]=useState("");
    const [addtodos,setAddTodos]=useState([])
    const todo_item=(e)=>{
        setNewtodo(e.target.value)
    }

    const addTodo=()=>{
        setAddTodos((oldvalue)=>{
            if(newtodo!=="")
                return [...oldvalue,newtodo]
            else
                return
        })
        setNewtodo("");
    }
    
    return(
        <div className="main_class">
            <div className="todo_class">
               
                <h1 className="header-h1">ToDO List</h1>
                
                <input type="text" placeholder="Enter Todo" onChange={todo_item} name="todo" value={newtodo}/>
                <button onClick={addTodo}>+</button>

                <ul>
                  { 
                      addtodos.map((items)=>{
                        
                           return  <li>{items}</li>
                        
                    }
                    )}
                </ul>
                
            </div>

        
        </div>

    );
}
export default TodoComponent;