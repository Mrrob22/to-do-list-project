import {useEffect, useState} from "react";

function ToDoForm({addTask, initValue, setInitValue}){
    const [userInput, setUserInput] = useState('')
    useEffect(() => {
        if (initValue) {
            setUserInput(initValue.task)
        }
    }, [initValue])
    const handleSubmit = () =>{
        addTask(userInput)
        setUserInput('')
    }

    const handleChange = (e) =>{
        setUserInput(e.currentTarget.value)
    }
    return (
        <div>
            <input
                value={userInput}
                type="text"
                onChange={handleChange}
                // onKeyDown={handleKeyPress}
                placeholder="Введите что-то..."
            />
            <button onClick={handleSubmit}>Сохранить</button>
        </div>
    )
}
export default ToDoForm;