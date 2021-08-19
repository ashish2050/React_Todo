import react, { useState } from 'react';
import './App.css'

const NewTodo=()=>{
    const [todo,setTodo]=useState("");
    const [todos, setTodos]=useState([])
    const [editId,setEditId]=useState(0);
    
    const handleSubmit=(e)=>{
        e.preventDefault();
       if(editId){
           const editTodo=todos.find((i)=>i.id===editId);
           const updatedTodos=todos.map((t)=>t.id===editTodo.id
           ?(t={id:t,todo})
           :{id: t.id,todo:t.todo}
           );
           setTodos(updatedTodos);
           setEditId(0);
           setTodo("");
           return;

       }
        
        if(todo !==''){
            setTodos([{id:`${todo}-${Date.now()}`,todo},...todos])
            setTodo("");
        }
    }

    const handleDelete=(id)=>{
        const delTodo=todos.filter((to)=>to.id !==id)
        setTodos([...delTodo]);
    }

    const handleEdit=(id)=>{
        const editTodo=todos.find((i)=>i.id===id);
        setTodo(editTodo.todo)
        setEditId(id)
       // handleDelete(editId);
        
    }
    return(
        <div className="App">
            <div className="container">
                <h1>Todo List App</h1>
                <form className="todoForm" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter Todo" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
                    <button type="submit">{editId ?"Edit":"Go"}</button>

                </form>
                <ul className="allTodos">
                {
                    todos.map((t)=>(
                        <li className="singleTodo">
                        <span className="todoText" key={t.id}>{t.todo}</span>
                        <button onClick={()=>handleEdit(t.id)}>Edit</button>
                        <button onClick={()=>handleDelete(t.id)}>Delete</button>
                    </li>
                    ))
                }

                    
                    
                </ul>

            </div>
        </div>

    );
} ;

export default NewTodo;