import React, {useEffect, useState} from 'react';
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    const [todos, setTodos] = useState([])
    const [initValue, setInitValue] = useState(null)
    const [isEdit, setIsEdit] = useState(false)

    useEffect(()=>{
        setTodos(JSON.parse(localStorage.getItem('todos')))
    }, [])

    useEffect(()=>{
        if (todos.length && (JSON.stringify(todos) !== localStorage.getItem('todos'))){
            localStorage.setItem('todos', JSON.stringify(todos))
        }
    }, [todos])

    const addTask = (userInput) =>{
      if (userInput){
          if (isEdit) {
              setTodos([
                  ...todos.map((todo) =>
                      todo.id === initValue.id ? {...todo, task: userInput} : {...todo}
                  )
              ])
              setInitValue(null)
          } else {
              const newItem = {
                  id: Math.random().toString(10).substr(2,11),
                  task: userInput,
                  complete: false
              }
              setTodos([...todos, newItem])
          }
      }
        setIsEdit(false)
    }

    const removeTask = (id) =>{
        setTodos([...todos.filter((todo)=>todo.id !== id)])
    }

    const editTask = (id) =>{
        const selectedTodo = todos.find(todo => {
            return todo.id === id
        })
        setInitValue(selectedTodo)
        setIsEdit(true)
    }
    const handleToggle = (id) =>{
        setTodos([
            ...todos.map((todo) =>
                todo.id === id ? {...todo, complete: !todo.complete} : {...todo}
            )
        ])
    }

    return (
      <div className="App">
          <header className='border'>
              <h1>Список задач: {todos.length}</h1>
          </header>
          <div>
              {todos.map((todo, index) => {
                  return (
                      <ToDo
                          todo={todo}
                          key={todo.id}
                          toggleTask={handleToggle}
                          removeTask={removeTask}
                          editTask={editTask}
                          index={1 + index}
                          />
                  )
              })}
          </div>
          <ToDoForm
              addTask={addTask}
              initValue={initValue}
              setInitValue={setInitValue}
          />
      </div>
    )
}

export default App;
