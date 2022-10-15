import React, { useState, useEffect } from "react";
import axios from "axios";

function Todos() {
  const [todos, setTodo] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        console.log(res);
        setTodo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      {
        todos.map(todo=>(
          <div>
               <p>User:{todo.userId}</p>
               <p>Id:{todo.id}</p>
               <p>Title:{todo.title}</p>
               <p>Task:{todo.completed}</p>
          </div>
          
        ))
      }
      

        
    </div>
  );
}

export default Todos;
