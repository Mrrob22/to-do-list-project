import React, {useState} from 'react';
import './App.css';
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";

function App() {
  const {todos, useTodos} = useState([])

  const addTask = () =>{

  }

  const removeTask = () =>{

  }

  const handleToggle = () =>{

  }

  return (
      <div>App
          <header>
              <h1>Список задач: {todos.length}</h1>
          </header>
          <ToDo/>
          <ToDoForm/>
          {todos.map(()=>{
              return (
                  <ToDo key={todos.id}/>
              )
          })}
      </div>
  )
}

export default App;
